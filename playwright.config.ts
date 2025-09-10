import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
    viewport: { width: 1280, height: 800 },
    video: 'off',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --port 5173 --strictPort',
    port: 5173,
    reuseExistingServer: true,
    timeout: 90_000,
  },
  projects: [
    { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } },
  ],
});

