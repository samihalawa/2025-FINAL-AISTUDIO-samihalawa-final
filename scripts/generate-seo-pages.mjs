#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
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
const START = '<!-- SEO_HEAD_START -->';
const END = '<!-- SEO_HEAD_END -->';

if (!fs.existsSync(shellPath)) throw new Error('dist/index.html is missing; run Vite before SEO page generation');

const shell = fs.readFileSync(shellPath, 'utf8');
if (!shell.includes(START) || !shell.includes(END)) throw new Error('SEO head markers are missing from dist/index.html');

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

function renderPage(meta) {
  const head = `${START}\n    ${buildHeadMarkup(meta)}\n    ${END}`;
  return shell
    .replace(new RegExp(`${START}[\\s\\S]*?${END}`), head)
    .replace(/<html\s+lang="[^"]*"/, `<html lang="${meta.lang || 'en'}"`);
}

function outputPath(routePath) {
  if (routePath === '/') return shellPath;
  return path.join(dist, routePath.replace(/^\//, ''), 'index.html');
}

for (const meta of pages) {
  const target = outputPath(meta.path);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, renderPage(meta));
}

fs.writeFileSync(path.join(dist, '404.html'), renderPage(NOT_FOUND_METADATA));
console.log(`[seo-pages] wrote ${ROUTE_METADATA.length} static route(s), ${blogEntries.length} article route(s), and 404.html`);
