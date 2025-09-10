import { test, expect } from '@playwright/test';

const pagesToCheck = [
  '/',
  '/services',
  '/services/medical-ai',
  '/services/business-automation',
  '/services/prompt-engineering',
  '/services/rag-langchain',
  '/ai-training',
  '/case-studies',
  '/case-studies/autoclient',
  '/case-studies/radiology-ai',
  '/locations',
  '/locations/madrid',
  '/locations/madrid/ai-readiness-audit',
  '/blog',
  '/contact',
];

test.describe('SEO meta + schema present', () => {
  for (const path of pagesToCheck) {
    test(`meta/og/schema: ${path}`, async ({ page }) => {
      const resp = await page.goto(path);
      expect(resp?.ok()).toBeTruthy();

      const ogImage = await page.locator('meta[property="og:image"]').count();
      expect(ogImage).toBeGreaterThan(0);

      // Some pages may not have schema; enforce for services and case-studies
      const needsSchema = /\/services\//.test(path) || /\/case-studies/.test(path);
      const schemaCount = await page.locator('script[type="application/ld+json"]').count();
      if (needsSchema) expect(schemaCount).toBeGreaterThan(0);
    });
  }
});

test('sitemap and robots', async ({ page }) => {
  const site = await page.goto('/sitemap.xml');
  expect(site?.ok()).toBeTruthy();
  const xml = await page.locator('body').innerText();
  expect(xml).toContain('/locations/madrid/ai-readiness-audit');
  expect(xml).toContain('/case-studies/banking-assistant');
  expect(xml).toContain('/case-studies/airbnb-intelligence');

  const robots = await (await page.goto('/robots.txt'))?.text();
  expect(robots).toContain('Sitemap:');
});

