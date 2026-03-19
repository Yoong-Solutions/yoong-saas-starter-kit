import { test } from '@playwright/test'
import { SignupEmailExistsFlow } from '../flows/signup-email-exists.flow'

test('Signup - Email Already Registered', async ({ page }) => {

  const user = {
    name: 'Automation User',
    team: 'QA Team',
    email: 'existing_user@mail.com', // MUST exist in system
    password: 'Test@123456'
  }

  await SignupEmailExistsFlow.submitExistingEmail(page, user)

})
