import { defineConfig } from '@playwright/test'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({

  testDir: './src/tests/e2e/tests',
  
  timeout: 30 * 1000,

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://saas.yoong.xyz',

    headless: process.env.PLAYWRIGHT_HEADLESS === 'true',

    viewport: { width: 1280, height: 720 },

    actionTimeout: 10 * 1000,

    launchOptions: {
      slowMo: 500
    }
  }

})
