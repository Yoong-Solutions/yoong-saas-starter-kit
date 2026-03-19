import { test } from '@playwright/test'
import { SignupFlow } from '../flows/signup.flow'

test('Successful Registration', async ({ page }) => {

  const user = {
    name: 'Automation User',
    team: 'QA Team',
    email: `auto_${Date.now()}@mail.com`,
    password: 'Test@123456'
  }

  await SignupFlow.successfulSignup(page, user)

})
