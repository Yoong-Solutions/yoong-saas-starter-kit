import { expect, Page } from '@playwright/test'

export class SignupRedirectLoginFlow {
  constructor(private page: Page) {}

  async goToSignup() {
    await this.page.goto('/auth/join')
  }

  async clickSignInLink() {
    // Stable locator (text + role)
    await this.page.getByRole('link', { name: /sign in/i }).click()
  }

  async verifyRedirectToLogin() {
    // URL check (soft but useful)
    await expect(this.page).toHaveURL(/auth|login|signin/i)

    // ⭐ MAIN ASSERT — UI text
    await expect(
      this.page.getByText(/log in to your account/i)
    ).toBeVisible()
  }

  async redirectToLoginFlow() {
    await this.goToSignup()
    await this.clickSignInLink()
    await this.verifyRedirectToLogin()
  }
}
