import { test, expect } from '@playwright/test';
import fs from 'fs';

const shot = async (page, name: string) => {
  fs.mkdirSync('test-artifacts', { recursive: true });
  await page.screenshot({ path: `test-artifacts/${name}.png`, fullPage: true });
};

test('Navigate 7+ views with embeds/modals working', async ({ page }) => {
  // 1. Home
  await page.goto('/');
  await shot(page, '01-home');

  // 2. Open language selector (header interaction)
  const langBtn = page.getByRole('button').filter({ hasText: /English|Español|Français|中文/ }).first();
  await langBtn.click();
  await shot(page, '02-language-open');
  await page.keyboard.press('Escape');

  // 3. Corporate
  await page.getByRole('navigation').getByRole('link', { name: /For Businesses|Para Empresas|Pour les entreprises|企业服务/ }).click();
  await expect(page).toHaveURL(/\/corporate/);
  await shot(page, '03-corporate');

  // 4. Projects, open info, demo modal, close
  await page.getByRole('navigation').getByRole('link', { name: /Projects|Proyectos|Projets|项目/ }).click();
  await expect(page).toHaveURL(/\/projects/);
  await shot(page, '04-projects');
  const firstCard = page.locator('.project-card').first();
  await firstCard.getByRole('button', { name: /Info|Información|Infos|信息/ }).click();
  await shot(page, '05-project-info');
  const demoBtn = firstCard.getByRole('button', { name: /Demo|Demostración|Démo|演示/ });
  if (await demoBtn.isVisible()) {
    await demoBtn.click();
    await shot(page, '06-demo-open');
    await page.waitForTimeout(1200);
    await page.getByRole('button', { name: 'Close' }).click();
    await shot(page, '07-demo-close');
  }

  // 5. Chat modal (graceful fallback)
  const chatBtn = firstCard.getByRole('button', { name: /Chat/ });
  if (await chatBtn.isVisible()) {
    await chatBtn.click();
    await shot(page, '08-chat-open');
    const input = page.getByRole('textbox', { name: 'Chat message input' });
    await input.fill('Hello!');
    await page.getByRole('button', { name: 'Send message' }).click();
    await expect(page.getByText(/Demo response for/)).toBeVisible();
    await shot(page, '09-chat-response');
    await page.getByRole('button', { name: 'Close' }).click();
  }

  // 6. Blog and article modal
  await page.getByRole('navigation').getByRole('link', { name: /Blog/ }).click();
  await expect(page).toHaveURL(/\/blog/);
  await shot(page, '10-blog');
  const readMore = page.getByRole('button', { name: /Read More|Leer más|En savoir plus|阅读更多/ }).first();
  await readMore.click();
  await shot(page, '11-article-open');
  await page.getByRole('button', { name: 'Close' }).click();

  // 7. Contact with Tally embeds
  await page.getByRole('navigation').getByRole('link', { name: /Contact|Contacto|Contact|联系/ }).click();
  await expect(page).toHaveURL(/\/contact/);
  await shot(page, '12-contact');
  // Wait briefly for iframes to get src via loader
  await page.waitForTimeout(1000);
  const iframes = page.locator('iframe[data-tally-src]');
  await expect(iframes.nth(0)).toBeVisible();
  await expect(iframes.nth(1)).toBeVisible();
  await shot(page, '13-contact-embeds');
});

