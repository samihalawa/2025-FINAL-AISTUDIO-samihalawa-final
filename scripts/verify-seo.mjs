#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ROUTE_METADATA,
  SITE_URL,
  absoluteUrl,
  buildBlogPostMetadata,
} from '../seo/siteMetadata.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dist = path.join(root, 'dist');
const appSource = fs.readFileSync(path.join(root, 'App.tsx'), 'utf8');
const serviceBlock = appSource.match(/<Route path="services"[\s\S]*?^\s*<\/Route>/m)?.[0] || '';
const routePattern = /<Route path="([^"]+)"/g;
const appRoutes = new Set(['/']);

for (const match of appSource.matchAll(routePattern)) {
  const value = match[1];
  if (value === '/' || value === '*' || value.includes(':')) continue;
  const withinServices = serviceBlock.includes(match[0]) && value !== 'services';
  appRoutes.add(withinServices ? `/services/${value}` : `/${value}`);
}

const configuredRoutes = new Set(ROUTE_METADATA.map((meta) => meta.path));
const missingConfig = [...appRoutes].filter((route) => !configuredRoutes.has(route));
const staleConfig = [...configuredRoutes].filter((route) => !appRoutes.has(route));
if (missingConfig.length || staleConfig.length) {
  throw new Error(`Route metadata mismatch. Missing: ${missingConfig.join(', ') || 'none'}. Stale: ${staleConfig.join(', ') || 'none'}.`);
}

const manifest = JSON.parse(fs.readFileSync(path.join(dist, 'blog', 'index.json'), 'utf8'));
const pages = [...ROUTE_METADATA, ...manifest.map((entry) => buildBlogPostMetadata(entry))];
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');

for (const meta of pages) {
  const target = meta.path === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, meta.path.slice(1), 'index.html');
  if (!fs.existsSync(target)) throw new Error(`Missing generated HTML for ${meta.path}`);
  const html = fs.readFileSync(target, 'utf8');
  if (html.includes('\0')) throw new Error(`${meta.path} contains an invalid NUL byte`);
  const canonical = absoluteUrl(meta.path);
  const required = [
    `<title data-seo-head="true">`,
    `name="description"`,
    `name="robots"`,
    `rel="canonical" href="${canonical}"`,
    `property="og:title"`,
    `property="og:description"`,
    `property="og:image"`,
    `property="og:image:width" content="1200"`,
    `property="og:image:height" content="630"`,
    `name="twitter:card" content="summary_large_image"`,
    `name="twitter:image"`,
    `type="application/ld+json"`,
  ];
  for (const fragment of required) {
    if (!html.includes(fragment)) throw new Error(`${meta.path} is missing ${fragment}`);
  }
  if (!html.includes('<main') || !html.includes('<h1')) {
    throw new Error(`${meta.path} is missing server-rendered main content or H1`);
  }
  if (html.includes('content-hub-pages')) {
    throw new Error(`${meta.path} exposes the internal content delivery source as public authorship`);
  }
  if (meta.schemaType === 'BlogPosting' && !html.includes('<article')) {
    throw new Error(`${meta.path} is missing its server-rendered article body`);
  }
  const jsonLd = html.match(/<script data-seo-head="true" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (!jsonLd) throw new Error(`${meta.path} has no JSON-LD body`);
  JSON.parse(jsonLd);
  if (!meta.robots.startsWith('noindex') && !sitemap.includes(`<loc>${canonical}</loc>`)) {
    throw new Error(`${meta.path} is absent from sitemap.xml`);
  }
}

const notFound = fs.readFileSync(path.join(dist, '404.html'), 'utf8');
if (!notFound.includes('name="robots" content="noindex,follow"')) throw new Error('404.html must be noindex,follow');
if (!notFound.includes('<h1')) throw new Error('404.html must contain a server-rendered H1');
if (sitemap.includes(`<loc>${SITE_URL}/search</loc>`)) throw new Error('/search must not appear in sitemap.xml');
if (!fs.existsSync(path.join(dist, 'og', 'sami-halawa-ai-engineer.png'))) throw new Error('Default OG image is missing');

console.log(`[seo-verify] ${ROUTE_METADATA.length} app route(s), ${manifest.length} article route(s), JSON-LD, sitemap, OG and 404 checks passed`);
