#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import matter from 'gray-matter';
import {
  NOT_FOUND_METADATA,
  ROUTE_METADATA,
  buildBlogPostMetadata,
  buildHeadMarkup,
} from '../seo/siteMetadata.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dist = path.join(root, 'dist');
const shellPath = path.join(dist, 'index.html');
const manifestPath = path.join(dist, 'blog', 'index.json');
const serverEntryPath = path.join(root, 'dist-ssr', 'entry-server.js');
const START = '<!-- SEO_HEAD_START -->';
const END = '<!-- SEO_HEAD_END -->';

if (!fs.existsSync(shellPath)) throw new Error('dist/index.html is missing; run Vite before SEO page generation');
if (!fs.existsSync(serverEntryPath)) throw new Error('dist-ssr/entry-server.js is missing; build the SSR entry before SEO page generation');

const shell = fs.readFileSync(shellPath, 'utf8');
if (!shell.includes(START) || !shell.includes(END)) throw new Error('SEO head markers are missing from dist/index.html');
const { render } = await import(pathToFileURL(serverEntryPath).href);

const blogEntries = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  : [];
const pages = [
  ...ROUTE_METADATA,
  ...blogEntries.map((entry) => buildBlogPostMetadata(entry)),
];

const seen = new Set();
for (const meta of pages) {
  if (seen.has(meta.path)) throw new Error(`Duplicate SEO route: ${meta.path}`);
  seen.add(meta.path);
  if (!meta.title || meta.title.length > 70) throw new Error(`Invalid title for ${meta.path}: ${meta.title}`);
  if (!meta.description || meta.description.length > 180) throw new Error(`Invalid description for ${meta.path}`);
}

function safeInlineJson(value) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function initialArticle(entry) {
  if (!entry) return null;
  const source = path.join(dist, 'blog', `${entry.path}.md`);
  if (!fs.existsSync(source)) throw new Error(`Blog source is missing for ${entry.slug}: ${source}`);
  const parsed = matter(fs.readFileSync(source, 'utf8'));
  return {
    slug: entry.slug,
    title: entry.title,
    date: entry.date,
    summary: entry.summary,
    author: entry.author,
    content: parsed.content,
  };
}

async function renderPage(meta, article = null) {
  const head = `${START}\n    ${buildHeadMarkup(meta)}\n    ${END}`;
  const appHtml = await render(meta.path, article);
  const initialState = article
    ? `<script>window.__INITIAL_BLOG_ARTICLE__=${safeInlineJson(article)}</script>`
    : '';
  return shell
    .replace(new RegExp(`${START}[\\s\\S]*?${END}`), head)
    .replace(/<html\s+lang="[^"]*"/, `<html lang="${meta.lang || 'en'}"`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>${initialState}`);
}

function outputPath(routePath) {
  if (routePath === '/') return shellPath;
  return path.join(dist, routePath.replace(/^\//, ''), 'index.html');
}

for (const meta of pages) {
  const target = outputPath(meta.path);
  const articleEntry = meta.schemaType === 'BlogPosting'
    ? blogEntries.find((entry) => `/blog/${entry.slug}` === meta.path)
    : null;
  const article = initialArticle(articleEntry);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, await renderPage(meta, article));
}

fs.writeFileSync(path.join(dist, '404.html'), await renderPage(NOT_FOUND_METADATA));
console.log(`[seo-pages] wrote ${ROUTE_METADATA.length} static route(s), ${blogEntries.length} article route(s), and 404.html`);
