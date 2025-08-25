// tests/dashboard.spec.ts
import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Dashboard', () => {
  test('Verify Dashboard after login', async ({ page }) => {
    await page.goto('/dashboard');                                                               // baseURL is set in playwright.config.ts
    await expect(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible();
    await expect(page.locator('.oxd-userdropdown-name')).not.toBeEmpty();
  });
});
