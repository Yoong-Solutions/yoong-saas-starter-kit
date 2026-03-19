import { test } from '@playwright/test'
import { PasswordVisibilityFlow } from '../flows/password-visibility.flow'

test('Password Visibility Toggle', async ({ page }) => {

  await page.goto('/auth/join')

  await PasswordVisibilityFlow.togglePasswordVisibility(
    page,
    'TestPassword123!'
  )

})
