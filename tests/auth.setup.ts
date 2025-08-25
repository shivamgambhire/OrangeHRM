// tests/auth.setup.ts
import { chromium } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const loginPage = new LoginPage(page);

  await loginPage.visitAndLogin();
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;
