#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ROUTE_METADATA,
  SITE_URL,
  absoluteUrl,
  buildBlogPostMetadata,
  canonicalPath,
} from '../seo/siteMetadata.js';

// --- Content guards -------------------------------------------------------
// Function words that only appear in one of the two languages the site mixes.
// Ambiguous tokens (a, no, o, si, me, son, ...) are deliberately excluded so a
// single shared word cannot tip the ratio.
const SPANISH_MARKERS = new Set(['de', 'del', 'la', 'el', 'los', 'las', 'una', 'unos', 'unas', 'y', 'en', 'para', 'con', 'que', 'por', 'más', 'cómo', 'qué', 'su', 'sus', 'tu', 'tus', 'sin', 'sobre', 'desde', 'hasta', 'entre', 'cada', 'todo', 'todos', 'toda', 'todas', 'así', 'también', 'muy', 'pero', 'cuándo', 'dónde', 'quién', 'este', 'esta', 'estos', 'estas', 'ese', 'esa', 'nuestro', 'nuestra', 'nuestros', 'nuestras', 'según', 'aunque', 'porque', 'mientras', 'está', 'están', 'ser', 'hacer', 'tiene', 'tienen', 'puede', 'pueden']);
const ENGLISH_MARKERS = new Set(['the', 'of', 'and', 'to', 'in', 'for', 'with', 'that', 'an', 'on', 'from', 'by', 'is', 'are', 'your', 'you', 'we', 'our', 'it', 'as', 'at', 'this', 'these', 'those', 'but', 'not', 'if', 'when', 'where', 'who', 'how', 'what', 'each', 'all', 'also', 'more', 'than', 'into', 'without', 'between', 'every', 'they', 'their', 'be', 'has', 'have', 'can', 'will', 'which', 'about', 'after', 'before', 'so']);
const SPANISH_RATIO_LIMIT = 0.3;
const MIN_SERVICE_BODY_WORDS = 150;

function mainText(html) {
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] || '';
  return main
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|quot|#0?39|lt|gt|bull|hellip|middot|[a-z]+|#\d+);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function words(text) {
  return text.toLowerCase().match(/[a-zá-úñü'’-]+/gi) || [];
}

function spanishRatio(text) {
  let es = 0;
  let en = 0;
  for (const word of words(text)) {
    if (SPANISH_MARKERS.has(word)) es += 1;
    else if (ENGLISH_MARKERS.has(word)) en += 1;
  }
  const total = es + en;
  // Below a dozen function words there is not enough signal to judge; every
  // prerendered page clears that easily once header and footer are included.
  return { ratio: total < 12 ? 0 : es / total, es, en };
}

function metadataTitles(html) {
  return [
    ...html.matchAll(/<title data-seo-head="true">([^<]*)<\/title>/g),
    ...html.matchAll(/<meta data-seo-head="true" property="og:title" content="([^"]*)"/g),
    ...html.matchAll(/<meta data-seo-head="true" name="twitter:title" content="([^"]*)"/g),
  ].map((match) => match[1]);
}

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
  const canonical = absoluteUrl(canonicalPath(meta));
  const required = [
    `<title data-seo-head="true">`,
    `name="description"`,
    `name="robots"`,
    `rel="canonical" href="${canonical}"`,
    `property="og:title"`,
    `property="og:description"`,
    `property="og:image"`,
    `property="og:image:width" content="${meta.imageWidth}"`,
    `property="og:image:height" content="${meta.imageHeight}"`,
    `property="og:image:type" content="${meta.imageMime}"`,
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
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) {
    throw new Error(`${meta.path} must render exactly one H1, found ${h1Count}`);
  }
  for (const title of metadataTitles(html)) {
    if (title.includes('…') || title.includes('...')) {
      throw new Error(`${meta.path} has an elided metadata title: ${title}`);
    }
  }
  if (html.includes('content-hub-pages')) {
    throw new Error(`${meta.path} exposes the internal content delivery source as public authorship`);
  }
  const body = mainText(html);
  const bodyWordCount = words(body).length;
  if ((meta.lang || 'en') === 'en') {
    const { ratio, es, en } = spanishRatio(body);
    if (ratio > SPANISH_RATIO_LIMIT) {
      throw new Error(`${meta.path} is an English route with ${Math.round(ratio * 100)}% Spanish body text (${es} ES vs ${en} EN function words)`);
    }
  }
  if (meta.schemaType === 'Service' && bodyWordCount < MIN_SERVICE_BODY_WORDS) {
    throw new Error(`${meta.path} is a thin service page: ${bodyWordCount} body words, minimum ${MIN_SERVICE_BODY_WORDS}`);
  }
  if (meta.schemaType === 'BlogPosting' && !html.includes('<article')) {
    throw new Error(`${meta.path} is missing its server-rendered article body`);
  }
  const jsonLd = html.match(/<script data-seo-head="true" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (!jsonLd) throw new Error(`${meta.path} has no JSON-LD body`);
  JSON.parse(jsonLd);
  const selfCanonical = canonicalPath(meta) === meta.path;
  if (!meta.robots.startsWith('noindex') && selfCanonical && !sitemap.includes(`<loc>${canonical}</loc>`)) {
    throw new Error(`${meta.path} is absent from sitemap.xml`);
  }
  if (!selfCanonical && sitemap.includes(`<loc>${absoluteUrl(meta.path)}</loc>`)) {
    throw new Error(`${meta.path} canonicalises to ${canonical} but is still listed in sitemap.xml`);
  }
}

// Every URL advertised in the sitemap must be the canonical of the page it
// points at. A sitemap entry whose page canonicalises elsewhere sends Google
// two contradictory instructions.
const canonicalByPath = new Map(pages.map((meta) => [meta.path, absoluteUrl(canonicalPath(meta))]));
for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const loc = match[1];
  const routePath = loc.replace(SITE_URL, '') || '/';
  const normalized = routePath !== '/' && routePath.endsWith('/') ? routePath.slice(0, -1) : routePath;
  const declared = canonicalByPath.get(normalized);
  if (!declared) throw new Error(`sitemap.xml lists ${loc}, which has no generated page`);
  if (declared !== loc) {
    throw new Error(`sitemap.xml lists ${loc} but that page declares canonical ${declared}`);
  }
}

const notFound = fs.readFileSync(path.join(dist, '404.html'), 'utf8');
if (!notFound.includes('name="robots" content="noindex,follow"')) throw new Error('404.html must be noindex,follow');
if (!notFound.includes('<h1')) throw new Error('404.html must contain a server-rendered H1');
if (sitemap.includes(`<loc>${SITE_URL}/search</loc>`)) throw new Error('/search must not appear in sitemap.xml');
if (!fs.existsSync(path.join(dist, 'og', 'sami-halawa-ai-engineer.png'))) throw new Error('Default OG image is missing');

console.log(`[seo-verify] ${ROUTE_METADATA.length} app route(s), ${manifest.length} article route(s), JSON-LD, sitemap, OG and 404 checks passed`);
