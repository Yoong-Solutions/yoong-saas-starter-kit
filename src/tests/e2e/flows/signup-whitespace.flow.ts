import { Page, expect } from '@playwright/test'

export class SignupWhitespaceFlow {

  static async submitWhitespaceInput(
    page: Page,
    user: {
      name: string
      team: string
      email: string
      password: string
    }
  ) {

    // Fill fields
    await page.locator('input[name="name"]').fill(user.name)

    const teamInput = page.locator('input[name="team"]')
    await teamInput.fill(user.team)

    await page.locator('input[name="email"]').fill(user.email)

    const passwordInput = page.locator('input[name="password"]')
    await passwordInput.fill(user.password)

    // Submit
    await page.getByRole('button', { name: /create account/i }).click()

    // ⭐ Check validation error (Slug / invalid input)
    await expect(
      page.getByText(/slug.*(least|character|invalid)|invalid input/i)
    ).toBeVisible()

  }

}
