import { test } from '@playwright/test'
import { SignupWhitespaceFlow } from '../flows/signup-whitespace.flow'

test('Signup — Whitespace Handling', async ({ page }) => {

  await page.goto('/auth/join')

  await SignupWhitespaceFlow.submitWhitespaceInput(page, {
    name: '   Test   User   ',
    team: '   ',
    email: 'test@mail.com',
    password: '   Password123   '
  })

})
