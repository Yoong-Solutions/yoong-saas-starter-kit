import { test } from '@playwright/test'
import { SignupTeamLengthFlow } from '../flows/signup-team-length.flow'

test('Signup — Team Field Length Limit', async ({ page }) => {

  await page.goto('/auth/join')

  await SignupTeamLengthFlow.submitShortTeam(page, {
    name: 'Test User',
    team: 'A',
    email: 'test@mail.com',
    password: 'Password123!'
  })

})
