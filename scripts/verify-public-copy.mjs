import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

function collectTextArtifacts(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectTextArtifacts(path);
    return ['.pdf', '.txt'].includes(extname(entry.name).toLowerCase())
      ? [relative(process.cwd(), path)]
      : [];
  });
}

const activeArtifacts = collectTextArtifacts(resolve('public/cv')).sort();

const sourceFiles = [
  'components/About.tsx',
  'components/Contact.tsx',
  'components/Experience.tsx',
  'components/Footer.tsx',
  'components/Hero.tsx',
  'components/HireCTA.tsx',
  'components/Projects.tsx',
  'i18n/translations.ts',
  'pages/CVPage.tsx',
  'pages/case-studies/AutoClient.tsx',
  'pages/case-studies/Oulang.tsx',
  'portfolio.ts',
  'constants.ts',
  'index.html',
  'public/llms.txt',
  'seo/siteMetadata.js',
];

const forbidden = [
  /delivery evidence/i,
  /pruebas de entrega/i,
  /experience and evidence selected/i,
  /selected evidence supporting/i,
  /certification not claimed/i,
  /not employment or client work/i,
  /not a separate employment/i,
  /not additional full[- ]time jobs/i,
  /not additional employment/i,
  /no como trabajos comerciales independientes/i,
  /no empleos adicionales/i,
  /no confundir productos con empleos/i,
  /delivery-proof/i,
  /selected public proof/i,
  /evidence-ledger/i,
  /provider snapshot/i,
  /contracting vehicle/i,
  /remains as contracting/i,
  /madrid\s*\/\s*london/i,
  /public_copy/i,
  /internal_context/i,
];

const contradictions = [
  /Agents AI Ltd[\s\S]{0,220}(?:January 2024|Jan(?:uary)? 2024|2 years 6 months)/i,
  /(?:January 2024|Jan(?:uary)? 2024|2 years 6 months)[\s\S]{0,220}Agents AI Ltd/i,
  /AutoClient[\s\S]{0,160}2024\s*[–-]\s*(?:present|actualidad|présent|至今)/i,
  /2024\s*[–-]\s*(?:present|actualidad|présent|至今)[\s\S]{0,160}AutoClient/i,
  /OULANG[\s\S]{0,160}2024\s*[–-]\s*(?:present|actualidad|présent|至今)/i,
  /2024\s*[–-]\s*(?:present|actualidad|présent|至今)[\s\S]{0,160}OULANG/i,
  /London company/i,
  /Empresa y portfolio de producto en Londres/i,
  /Contact Agents AI Ltd/i,
  /Contacta con Agents AI Ltd/i,
  /Contactez Agents AI Ltd/i,
  /联系 Agents AI Ltd/i,
];

const requiredPositioning = [
  ['components/Hero.tsx', /Senior \/ Lead AI Engineer/],
  ['seo/siteMetadata.js', /jobTitle: 'Senior \/ Lead AI Engineer'/],
  ['i18n/translations.ts', /'layout\.jobTitle': 'Senior \/ Lead AI Engineer'/],
  ['public/llms.txt', /Senior \/ Lead AI Engineer/],
  ['pages/CVPage.tsx', /Senior \/ Lead AI Engineer taking agentic systems from architecture to production/],
];

function readPublicText(relativePath) {
  const absolutePath = resolve(relativePath);
  if (!existsSync(absolutePath)) throw new Error(`Missing active public artifact: ${relativePath}`);
  if (extname(relativePath).toLowerCase() === '.pdf') {
    return execFileSync('pdftotext', ['-layout', absolutePath, '-'], { encoding: 'utf8' });
  }
  return readFileSync(absolutePath, 'utf8');
}

const failures = [];
for (const relativePath of [...sourceFiles, ...activeArtifacts]) {
  const text = readPublicText(relativePath);
  for (const pattern of [...forbidden, ...contradictions]) {
    const match = text.match(pattern);
    if (match) failures.push(`${relativePath}: ${JSON.stringify(match[0])}`);
  }
}

for (const [relativePath, pattern] of requiredPositioning) {
  const text = readPublicText(relativePath);
  if (!pattern.test(text)) failures.push(`${relativePath}: missing canonical Senior / Lead AI Engineer positioning`);
}

if (failures.length) {
  console.error('Public-copy verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Public-copy verification passed for ${sourceFiles.length} source surfaces and ${activeArtifacts.length} active CV artifacts.`);
