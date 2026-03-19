import { test, expect } from '@playwright/test';

test('API chain: create → list → delete post', async ({ request }, testInfo) => {
  await test.step('Create post', async () => {
    const res = await request.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        data: {
          title: 'playwright',
          body: 'api test',
          userId: 1,
        },
      }
    );

    expect(res.status()).toBe(201);

    const body = await res.json();

    await testInfo.attach('Create response', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json',
    });

    testInfo.annotations.push({
      type: 'postId',
      description: String(body.id),
    });
  });

  await test.step('List posts', async () => {
    const res = await request.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    expect(res.status()).toBe(200);

    const list = await res.json();

    await testInfo.attach('List sample', {
      body: JSON.stringify(list.slice(0, 2), null, 2),
      contentType: 'application/json',
    });
  });
});
