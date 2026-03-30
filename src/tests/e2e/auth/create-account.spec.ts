// tests/auth/join.spec.ts
import { test, expect } from '../support/fixtures/auth-fixture';

test.describe('Create account page UI', () => {

  test('Create account with Static Prefix', async ({ page, registrationData }) => {
    // 1. Go to create account page
    await page.goto('https://saas.yoong.xyz/auth/join');

    // 2. Fill in the information using date from the Fixture
    // Warning: Change the selector to the actual HTML of the page
    await page.fill('input[name="full_name"]', registrationData.fullName);
    await page.fill('input[name="email"]', registrationData.email);
    await page.fill('input[name="password"]', registrationData.pass);

    // 3. Click register button
    await page.click('button[type="submit"]');

    // 4. Verify the register result
    await expect(page).toHaveURL(/.*dashboard/); 
    
    console.log(`Created account successfully: ${registrationData.email}`);
  });

});