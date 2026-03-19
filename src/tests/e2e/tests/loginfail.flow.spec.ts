import { test, expect } from '@playwright/test';

test('Auth flow advanced: fail → recover → logout', async ({ page }) => {
  // STEP 1
  await page.goto('https://the-internet.herokuapp.com/login');
  await expect(page.locator('h2')).toHaveText('Login Page');

  // STEP 2: Login fail
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'WrongPassword!');
  await page.click('button[type="submit"]');

  const flash = page.locator('#flash');
  await expect.soft(flash).toContainText('Your password is invalid');

  // STEP 3: Reload before retry 
  await page.reload();

  // STEP 4: Login success
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  await expect.poll(() => page.url()).toContain('/secure');
  await expect(page.locator('#flash')).toContainText(
    'You logged into a secure area!'
  );

  // STEP 5: Logout
  await page.click('a[href="/logout"]');
  await expect(page.locator('h2')).toHaveText('Login Page');
});
