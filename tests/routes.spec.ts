import { test } from '@playwright/test';
import fs from 'fs';

const shot = async (page, name: string) => {
  fs.mkdirSync('test-artifacts', { recursive: true });
  await page.screenshot({ path: `test-artifacts/${name}.png`, fullPage: true });
};

test('Capture key pages screenshots', async ({ page }) => {
  // Services hub
  await page.goto('/services');
  await shot(page, '20-services-index');

  // Top services
  const servicePaths = [
    'prompt-engineering',
    'rag-langchain',
    'agents-automation',
    'ai-readiness-audit',
    'ai-for-marketing',
    'business-automation',
  ];
  for (const sp of servicePaths) {
    await page.goto(`/services/${sp}`);
    await shot(page, `2x-service-${sp}`);
  }

  // Training overview
  await page.goto('/ai-training');
  await shot(page, '30-ai-training');

  // Case studies
  await page.goto('/case-studies');
  await shot(page, '40-case-studies');
  await page.goto('/case-studies/radiology-ai');
  await shot(page, '41-case-radiology');
  await page.goto('/case-studies/autoclient');
  await shot(page, '42-case-autoclient');

  // Locations
  await page.goto('/locations');
  await shot(page, '50-locations');
  await page.goto('/locations/madrid');
  await shot(page, '51-locations-madrid');
  await page.goto('/locations/online');
  await shot(page, '52-locations-online');
});

