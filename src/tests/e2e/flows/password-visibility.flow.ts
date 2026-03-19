import { Page, expect } from '@playwright/test'

export class PasswordVisibilityFlow {

  static async togglePasswordVisibility(page: Page, password: string) {

    // STEP 1 — Fill password
    const passwordInput = page.locator('input[name="password"]')
    await passwordInput.fill(password)

    // STEP 2 — Verify default masked
    await expect(passwordInput).toHaveAttribute('type', 'password')

    // STEP 3 — Click eye icon (adjust locator if needed)
    const eyeToggle = page.locator('button:has(svg)').last()
    await eyeToggle.click()

    // STEP 4 — Verify visible
    await expect(passwordInput).toHaveAttribute('type', 'text')

    // STEP 5 — Click again
    await eyeToggle.click()

    // STEP 6 — Verify masked again
    await expect(passwordInput).toHaveAttribute('type', 'password')
  }
}
