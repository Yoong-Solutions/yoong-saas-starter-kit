import { test } from '@playwright/test'
import { SignupInvalidEmailFlow } from '../flows/signup-invalid-email.flow'

test('Signup — Invalid Email Format', async ({ page }) => {

  await page.goto('/auth/join')

  await SignupInvalidEmailFlow.submitInvalidEmail(page, {
    name: 'Test User',
    team: 'QA',
    email: 'abc',
    password: 'Password123!'
  })

})
