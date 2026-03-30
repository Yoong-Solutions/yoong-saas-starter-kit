// tests/utils/test-data.ts

export const TEST_CONFIG = {
  PREFIX: 'auto_test', // Prefix to identify the test account
  DOMAIN: '@yoong.xyz',
  DEFAULT_PASSWORD: 'Password123!',
};

export const generateRandomData = () => {
  const timestamp = Date.now();
  return {
    email: `${TEST_CONFIG.PREFIX}_${timestamp}${TEST_CONFIG.DOMAIN}`,
    fullName: `Auto User ${timestamp}`,
  };
};