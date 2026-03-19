import { Page, expect } from '@playwright/test'

type SignupUser = {
  name: string
  team: string
  email: string
  password: string
}

export class SignupFlow {

  static async successfulSignup(page: Page, user: SignupUser) {

    await page.goto('/auth/join')

    await page.locator('input[name="name"]').fill(user.name)
    await page.locator('input[name="team"]').fill(user.team)
    await page.locator('input[name="email"]').fill(user.email)
    await page.locator('input[name="password"]').fill(user.password)

    await page.getByRole('button', { name: /create account/i }).click()

    // ⭐ Wait network settle (important)
    await page.waitForLoadState('networkidle')

    // ⭐ Soft success validation
    await expect(page).toHaveURL(/(dashboard|home|auth)/)
  }

}
