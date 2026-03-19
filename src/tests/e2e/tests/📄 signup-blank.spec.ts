import { test } from '@playwright/test'
import { SignupNegativeFlow } from '../flows/📄 signup-blank.flow'

test('Signup - Empty Fields Validation', async ({ page }) => {

  await SignupNegativeFlow.submitEmptyForm(page)

})
