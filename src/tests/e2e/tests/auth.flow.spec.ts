import { test, expect } from '@playwright/test';

test('Auth flow: login → logout (learning)', async ({ page }) => {
  // ===== STEP 1: Open login page =====
  await page.goto('https://the-internet.herokuapp.com/login');

  // Verify login page loaded
  await expect(page.locator('h2')).toHaveText('Login Page');

  // ===== STEP 2: Fill credentials =====
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // ===== STEP 3: Submit login =====
  await page.click('button[type="submit"]');

  // ===== STEP 4: Verify login success =====
  const flash = page.locator('#flash');
  await expect(flash).toBeVisible();
  await expect(flash).toContainText('You logged into a secure area!');

  // Verify URL contains /secure
  await expect(page).toHaveURL(/\/secure/);

  // ===== STEP 5: Logout =====
  await page.click('a[href="/logout"]');

  // ===== STEP 6: Verify back to login =====
  await expect(page.locator('h2')).toHaveText('Login Page');
  await expect(page).toHaveURL(/\/login/);
});
