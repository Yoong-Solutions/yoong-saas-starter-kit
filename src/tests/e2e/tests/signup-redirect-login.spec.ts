import { test } from '@playwright/test'
import { SignupRedirectLoginFlow } from '../flows/signup-redirect-login.flow'

test.describe('Signup — Redirect to Login', () => {
  test('User can navigate to Login from Signup page', async ({ page }) => {
    const flow = new SignupRedirectLoginFlow(page)

    await flow.redirectToLoginFlow()
  })
})
