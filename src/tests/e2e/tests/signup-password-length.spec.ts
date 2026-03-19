import { test } from '@playwright/test'
import { SignupPasswordLengthFlow } from '../flows/signup-password-length.flow'

test('Signup — Password Length Limit', async ({ page }) => {

  await page.goto('/auth/join')

  await SignupPasswordLengthFlow.submitShortPassword(page, {
    name: 'Test User',
    team: 'QA',
    email: 'testuser@mail.com',
    password: '1'
  })

})
