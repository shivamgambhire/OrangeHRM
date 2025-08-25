// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
    retries: 1,
    reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    storageState: 'storageState.json', // Reuse login for all tests
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    headless: true,
  },
  globalSetup: require.resolve('./tests/auth.setup'),

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'storageState.json',
      },
      dependencies: ['setup'],
    },
     {
      name: 'setup',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.*\.setup\.ts/,
    }
  ],
});
