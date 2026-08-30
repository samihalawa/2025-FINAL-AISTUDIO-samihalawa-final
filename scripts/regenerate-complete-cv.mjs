import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const sourcePath = process.env.COMPLETE_CV_SOURCE ||
  '/Users/samihalawa/git/PROJECTS_MEDIA/SAMIHALAWA_CV_FINAL/final/Sami_Halawa_Complete_CV_LinkedIn_Format.html';
const outputPath = resolve('public/cv/Sami_Halawa_Complete_CV.pdf');
const datedOutputPath = resolve('public/cv/Sami_Halawa_Complete_CV_2026-08-30.pdf');
const chromePath = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

for (const requiredPath of [sourcePath, chromePath]) {
  if (!existsSync(requiredPath)) throw new Error(`Required file not found: ${requiredPath}`);
}

let html = readFileSync(sourcePath, 'utf8');

const replacements = [
  [
    'Founding AI Engineer and Systems Architect specialising in building production agentic AI systems',
    'Senior / Lead AI Engineer and systems architect specialising in building production agentic AI systems',
  ],
  [
    'Open To Roles: Founding AI Engineer · AI Systems Architect · Senior AI Engineer · ML / LLMOps Engineer · AI Test Automation Engineer · Portfolio: samihalawa.com',
    'Open To Roles: Senior AI Engineer · Lead AI Engineer · AI Platform / Agentic AI Engineer · Portfolio: samihalawa.com',
  ],
  ['<p class="codur">2 years 6 months</p>', ''],
];

for (const [from, to] of replacements) {
  if (!html.includes(from)) throw new Error(`Expected Complete CV source fragment not found: ${from}`);
  html = html.replace(from, to);
}

const secondaryRolePattern = /<p class="role">ML \/ LLMOps Engineer<\/p><p class="dates">January 2024 - June 2026 \(2 years 6 months\)<\/p><p class="locl">Madrid, Community of Madrid, Spain<\/p><p class="desc">([\s\S]*?)<\/p>/;
const secondaryMatch = html.match(secondaryRolePattern);
if (!secondaryMatch) throw new Error('Expected duplicate Agents AI ML / LLMOps role was not found.');

const companyStart = html.indexOf('<p class="co">Agents AI Ltd</p>');
const primaryDescriptionStart = html.indexOf('<p class="desc">', companyStart);
const primaryDescriptionEnd = html.indexOf('</p>', primaryDescriptionStart);
if (companyStart < 0 || primaryDescriptionStart < 0 || primaryDescriptionEnd < 0) {
  throw new Error('Could not locate the primary Agents AI experience description.');
}

const mergedScope = ` • Additional ML / LLMOps scope during this same delivery period: ${secondaryMatch[1]}`;
html = `${html.slice(0, primaryDescriptionEnd)}${mergedScope}${html.slice(primaryDescriptionEnd)}`;
html = html.replace(secondaryRolePattern, '');

for (const forbidden of ['2 years 6 months', 'January 2024 - June 2026', '<p class="role">ML / LLMOps Engineer</p>']) {
  if (html.includes(forbidden)) throw new Error(`Chronology contradiction remains after transformation: ${forbidden}`);
}

mkdirSync(dirname(outputPath), { recursive: true });
const tempDir = mkdtempSync(resolve(tmpdir(), 'sami-complete-cv-'));
const transformedHtml = resolve(tempDir, 'complete-cv.html');
writeFileSync(transformedHtml, html, 'utf8');

try {
  const result = spawnSync(chromePath, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${outputPath}`,
    pathToFileURL(transformedHtml).href,
  ], { encoding: 'utf8', timeout: 120000 });

  if (result.status !== 0 || !existsSync(outputPath)) {
    throw new Error(`Chrome PDF generation failed (${result.status}): ${result.stderr || result.stdout}`);
  }
  copyFileSync(outputPath, datedOutputPath);
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

console.log(`Generated ${outputPath}`);
console.log(`Generated ${datedOutputPath}`);
