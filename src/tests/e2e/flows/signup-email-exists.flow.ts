import { Page, expect } from '@playwright/test'

type SignupUser = {
  name: string
  team: string
  email: string
  password: string
}

export class SignupEmailExistsFlow {

  static async submitExistingEmail(page: Page, user: SignupUser) {

    // STEP 1 — Open Sign Up Page
    await page.goto('/auth/join')

    // STEP 2 — Fill Form
    await page.locator('input[name="name"]').fill(user.name)
    await page.locator('input[name="team"]').fill(user.team)
    await page.locator('input[name="email"]').fill(user.email)
    await page.locator('input[name="password"]').fill(user.password)

    // STEP 3 — Submit Form
    await page.getByRole('button', { name: /create account/i }).click()

    // STEP 4 — Validate Error Toast (BEST STRATEGY)
    const errorToast = page
      .getByText(/email.*(exists|already)/i)
      .first()

    await expect(errorToast).toBeVisible()

  }

}
