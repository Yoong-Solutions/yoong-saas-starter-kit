import { Page, expect } from '@playwright/test'

export class SignupNegativeFlow {

  static async submitEmptyForm(page: Page) {

    // Open page
    await page.goto('/auth/join')

    // Click submit without filling
    await page.getByRole('button', { name: /create account/i }).click()

    // Validate required field errors
    await expect(page.getByText(/name is a required field/i)).toBeVisible()
    await expect(page.getByText(/team is a required field/i)).toBeVisible()
    await expect(page.getByText(/email is a required field/i)).toBeVisible()
    await expect(page.getByText(/password is a required field/i)).toBeVisible()

  }

}
