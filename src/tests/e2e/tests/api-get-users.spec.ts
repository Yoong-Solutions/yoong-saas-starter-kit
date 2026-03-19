import { test, expect, request as playwrightRequest } from '@playwright/test';

test('API get users list', async () => {
  // Create clean API context (NO playwright config pollution)
  const apiContext = await playwrightRequest.newContext({
    extraHTTPHeaders: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'application/json',
    },
  });

  const response = await apiContext.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  expect(response.status()).toBe(200);

  const users = await response.json();
  expect(users.length).toBeGreaterThan(0);
  expect(users[0]).toHaveProperty('id');
  expect(users[0]).toHaveProperty('email');

  await apiContext.dispose();
});
