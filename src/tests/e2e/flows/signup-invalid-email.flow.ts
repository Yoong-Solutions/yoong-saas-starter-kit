import { Page, expect } from '@playwright/test'

export class SignupInvalidEmailFlow {

  static async submitInvalidEmail(
    page: Page,
    user: {
      name: string
      team: string
      email: string
      password: string
    }
  ) {

    // Fill required fields
    await page.locator('input[name="name"]').fill(user.name)
    await page.locator('input[name="team"]').fill(user.team)

    const emailInput = page.locator('input[name="email"]')
    await emailInput.fill(user.email)

    await page.locator('input[name="password"]').fill(user.password)

    // Submit form
    await page.getByRole('button', { name: /create account/i }).click()

    // ⭐ BEST PRACTICE VALIDATION CHECK
    const validationMessage = await emailInput.evaluate(
      el => (el as HTMLInputElement).validationMessage
    )

    // Must exist
    expect(validationMessage.length).toBeGreaterThan(0)

    // Must relate to email format
    expect(validationMessage).toContain('@')

  }

}
