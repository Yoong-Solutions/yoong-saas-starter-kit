// tests/fixtures/auth-fixture.ts
import { test as base } from '@playwright/test';
import { generateRandomData, TEST_CONFIG } from '../utils/test-data';

// Define the data type for the Fixture
type AuthFixtures = {
  registrationData: {
    email: string;
    fullName: string;
    pass: string;
  };
};

// Extend the test base of Playwright
export const test = base.extend<AuthFixtures>({
  registrationData: async ({}, use) => {
    const data = generateRandomData();
    
    // Provide data for the test case
    await use({
      email: data.email,
      fullName: data.fullName,
      pass: TEST_CONFIG.DEFAULT_PASSWORD,
    });
  },
});

export { expect } from '@playwright/test';