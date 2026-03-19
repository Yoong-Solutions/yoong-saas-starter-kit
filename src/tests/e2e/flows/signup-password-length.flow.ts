import { Page, expect } from '@playwright/test'

export class SignupPasswordLengthFlow {

  static async submitShortPassword(
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
    await page.locator('input[name="team"]').fill(user.team)
    await page.locator('input[name="email"]').fill(user.email)

    const passwordInput = page.locator('input[name="password"]')
    await passwordInput.fill(user.password)

    // Submit
    await page.getByRole('button', { name: /create account/i }).click()

    // ⭐ TRY HTML5 VALIDATION FIRST
    const nativeMessage = await passwordInput.evaluate(
      el => (el as HTMLInputElement).validationMessage
    )

    if (nativeMessage && nativeMessage.length > 0) {
      expect(nativeMessage.length).toBeGreaterThan(0)
      return
    }

    // ⭐ FALLBACK → Custom UI Validation
    await expect(
      page.getByText(/password.*(short|min|length|8|character)/i)
    ).toBeVisible()

  }

}
