import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  // Screenshot local version
  const localPage = await context.newPage();
  await localPage.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await localPage.waitForTimeout(2000); // Wait for animations
  await localPage.screenshot({ path: 'local-version.png', fullPage: true });
  console.log('Local version screenshot saved as local-version.png');
  
  // Screenshot live version
  const livePage = await context.newPage();
  await livePage.goto('https://samihalawa.com', { waitUntil: 'networkidle' });
  await livePage.waitForTimeout(2000); // Wait for animations
  await livePage.screenshot({ path: 'live-version.png', fullPage: true });
  console.log('Live version screenshot saved as live-version.png');
  
  await browser.close();
})();