import { test, expect } from '@playwright/test'

test('Verify Sign Up UI', async ({ page }) => {

  // STEP 1 — Navigate
  await page.goto('/auth/join')

  // STEP 2 — Verify Title Section
  await expect(
    page.getByText('Create a new account')
  ).toBeVisible()

  // STEP 3 — Verify OAuth Buttons
  await expect(
    page.getByRole('button', { name: /continue with github/i })
  ).toBeVisible()

  await expect(
    page.getByRole('button', { name: /continue with google/i })
  ).toBeVisible()

  // STEP 4 — Verify Form Fields
  await expect(page.locator('input[name="name"]')).toBeVisible()
  await expect(page.locator('input[name="team"]')).toBeVisible()
  await expect(page.locator('input[name="email"]')).toBeVisible()
  await expect(page.locator('input[name="password"]')).toBeVisible()

  // STEP 5 — Verify Create Account Button
  await expect(
    page.getByRole('button', { name: /create account/i })
  ).toBeVisible()

  // STEP 6 — Verify Legal Text
  await expect(
    page.getByText(/terms and conditions/i)
  ).toBeVisible()

  await expect(
    page.getByText(/privacy statement/i)
  ).toBeVisible()

  // STEP 7 — Verify Sign In Link
  await expect(
    page.getByText(/already have an account/i)
  ).toBeVisible()

  await expect(
    page.getByRole('link', { name: /sign in/i })
  ).toBeVisible()

})
