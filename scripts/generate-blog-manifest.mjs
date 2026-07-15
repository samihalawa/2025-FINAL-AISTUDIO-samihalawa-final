#!/usr/bin/env node
// Build-time blog indexer.
//
// The blog is fed by two sources that both land as Markdown files under
// `public/blog/`:
//   1. Hand-written posts at `public/blog/<slug>.md` (legacy flat layout).
//   2. Content-hub deliveries at `public/blog/<locale>/<slug>.md` (committed by
//      the central content hub's deliver-github.mjs for site "samihalawa").
//
// This script runs before `vite build` and:
//   - walks `public/blog/**/*.md`, parses front matter (both the legacy shape
//     {title,date,summary,author} and the hub shape {title,publishedAt,excerpt,
//     tags,metaDescription}), normalises them into one manifest, and writes
//     `public/blog/index.json` (newest first). The runtime blog reads this so
//     new posts appear WITHOUT editing constants.ts.
//   - rewrites the per-article `<url>` entries in `public/sitemap.xml` so every
//     post gets an indexable /blog/<slug> URL. Non-blog sitemap URLs are left
//     untouched; the operation is idempotent.
//
// No network, no deps beyond gray-matter (already a project dependency).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const blogDir = path.join(root, 'public', 'blog');
const manifestPath = path.join(blogDir, 'index.json');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const SITE = 'https://samihalawa.com';

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function firstNonEmpty(...vals) {
  for (const v of vals) {
    if (v != null && String(v).trim() !== '') return String(v).trim();
  }
  return '';
}

function normalizeTags(tags) {
  if (Array.isArray(tags)) return tags.map((t) => String(t).trim()).filter(Boolean);
  if (typeof tags === 'string' && tags.trim()) {
    return tags.replace(/^\[|\]$/g, '').split(',').map((t) => t.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  }
  return [];
}

function stripBody(body) {
  return String(body || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`~\-]/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

const files = fs.existsSync(blogDir) ? walk(blogDir) : [];
const bySlug = new Map();

for (const file of files) {
  const rel = path.relative(blogDir, file).replace(/\\/g, '/'); // e.g. "en/foo.md" or "foo.md"
  const routePath = rel.replace(/\.md$/, ''); // "en/foo" or "foo"
  const slug = path.basename(rel, '.md');
  if (slug.endsWith('-old') || slug.startsWith('_')) continue; // superseded / hidden drafts
  let parsed;
  try {
    parsed = matter(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    console.warn(`[blog-manifest] skip ${rel}: ${err.message}`);
    continue;
  }
  const data = parsed.data || {};
  const title = firstNonEmpty(data.title, data.metaTitle) || slug.replace(/-/g, ' ');
  const date = firstNonEmpty(data.date, data.publishedAt, data.updatedAt) || '1970-01-01';
  const summary =
    firstNonEmpty(data.summary, data.excerpt, data.metaDescription) ||
    stripBody(parsed.content).slice(0, 180);
  const author = firstNonEmpty(data.author, data.sourceName) || 'Sami Halawa';
  const tags = normalizeTags(data.tags);
  const entry = { slug, path: routePath, title, date, summary, author, tags };

  // Dedupe by slug: prefer the newest by date. Flat (top-level) files win ties
  // so legacy hand-written posts are never shadowed by a hub re-slug.
  const existing = bySlug.get(slug);
  if (!existing) {
    bySlug.set(slug, entry);
  } else {
    const cmp = new Date(entry.date).getTime() - new Date(existing.date).getTime();
    const existingIsFlat = !existing.path.includes('/');
    const entryIsFlat = !entry.path.includes('/');
    if (cmp > 0 || (cmp === 0 && entryIsFlat && !existingIsFlat)) bySlug.set(slug, entry);
  }
}

const manifest = [...bySlug.values()].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`[blog-manifest] wrote ${manifest.length} post(s) to public/blog/index.json`);

// --- Sitemap: keep all non-blog-article URLs, refresh /blog/<slug> entries ---
if (fs.existsSync(sitemapPath)) {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const urlBlockRe = /\s*<url>[\s\S]*?<\/url>/g;
  const isBlogArticle = (block) => /<loc>\s*[^<]*\/blog\/[^<]+<\/loc>/.test(block);
  const kept = (xml.match(urlBlockRe) || []).filter((b) => !isBlogArticle(b));
  const articleUrls = manifest
    .map((p) => `  <url><loc>${SITE}/blog/${p.slug}</loc></url>`)
    .join('\n');
  const body = `${kept.map((b) => b.trim()).map((b) => `  ${b}`).join('\n')}\n${articleUrls}`;
  const out = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, out);
  console.log(`[blog-manifest] sitemap: ${kept.length} static URL(s) + ${manifest.length} blog article URL(s)`);
} else {
  console.warn('[blog-manifest] public/sitemap.xml not found; skipped sitemap update');
}
