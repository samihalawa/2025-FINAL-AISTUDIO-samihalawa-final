import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';

const activeArtifacts = [
  'public/cv/Sami_Halawa_CV.pdf',
  'public/cv/Sami_Halawa_CV_ATS.txt',
  'public/cv/Sami_Halawa_CV_ES.pdf',
  'public/cv/Sami_Halawa_CV_ES_ATS.txt',
  'public/cv/Sami_Halawa_Complete_CV.pdf',
  'public/cv/variants/Sami_Halawa_CV_AI_Platform_Product_Engineering_2026-08-09-v6.pdf',
  'public/cv/variants/Sami_Halawa_CV_AI_Platform_Product_Engineering_2026-08-09-v6_ATS.txt',
  'public/cv/variants/Sami_Halawa_CV_AI_Teaching_Governance_2026-08-09-v6.pdf',
  'public/cv/variants/Sami_Halawa_CV_AI_Teaching_Governance_2026-08-09-v6_ATS.txt',
  'public/cv/variants/Sami_Halawa_CV_Clinical_AI_Healthcare_2026-08-09-v6.pdf',
  'public/cv/variants/Sami_Halawa_CV_Clinical_AI_Healthcare_2026-08-09-v6_ATS.txt',
  'public/cv/variants/Sami_Halawa_CV_Founding_AI_Product_2026-08-09-v6.pdf',
  'public/cv/variants/Sami_Halawa_CV_Founding_AI_Product_2026-08-09-v6_ATS.txt',
  'public/cv/variants/Sami_Halawa_CV_Founding_AI_Product_ES_2026-08-09-v6.pdf',
  'public/cv/variants/Sami_Halawa_CV_Founding_AI_Product_ES_2026-08-09-v6_ATS.txt',
  'public/cv/variants/Sami_Halawa_CV_GenAI_Agents_Automation_2026-08-10-v9.pdf',
  'public/cv/variants/Sami_Halawa_CV_GenAI_Agents_Automation_2026-08-10-v9_ATS.txt',
];

const sourceFiles = [
  'pages/CVPage.tsx',
  'portfolio.ts',
  'constants.ts',
  'index.html',
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
  for (const pattern of forbidden) {
    const match = text.match(pattern);
    if (match) failures.push(`${relativePath}: ${JSON.stringify(match[0])}`);
  }
}

if (failures.length) {
  console.error('Public-copy verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Public-copy verification passed for ${sourceFiles.length} source surfaces and ${activeArtifacts.length} active CV artifacts.`);
