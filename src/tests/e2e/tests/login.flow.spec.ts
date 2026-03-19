import { test, expect } from '@playwright/test';

test('User can login successfully', async ({ page }) => {
  // 1. Access login page
  await page.goto("https://the-internet.herokuapp.com/login");

  // 2. Input username
  await page.locator('#username').fill('tomsmith');

  // 3. Input password
  await page.locator('#password').fill('SuperSecretPassword!');

  // 4. Click Login
  await page.locator('button[type="submit"]').click();

  // 5. Verify login success message
  const successMessage = page.locator('#flash');
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText(
    'You logged into a secure area!'
  );
});

