import { test, expect } from '@playwright/test';

test('Long run flow: add / edit / delete rows in Web Tables (learning)', async ({ page }) => {

  // ===== STEP 1 =====
  await test.step('1. Open Web Tables page', async () => {
    await page.goto('https://demoqa.com/webtables', {
      waitUntil: 'domcontentloaded',
    });

    await expect(
      page.getByRole('heading', { name: 'Web Tables' })
    ).toBeVisible();
  });

  // ===== STEP 2 =====
  await test.step('2. Add first user (John Doe)', async () => {
    await page.locator('#addNewRecordButton').click();

    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');
    await page.fill('#userEmail', 'john.doe@test.com');
    await page.fill('#age', '30');
    await page.fill('#salary', '5000');
    await page.fill('#department', 'IT');

    await page.click('#submit');
  });

  // ===== STEP 3 =====
  await test.step('3. Verify first user row (SCOPED)', async () => {
    const johnRow = page
      .locator('.rt-tr-group')
      .filter({ hasText: 'john.doe@test.com' });

    await expect(johnRow).toHaveCount(1);

    const cells = johnRow.locator('.rt-td');

    await expect(cells.nth(0)).toHaveText('John');
    await expect(cells.nth(1)).toHaveText('Doe');
    await expect(cells.nth(3)).toHaveText('john.doe@test.com');
  });

  // ===== STEP 4 =====
  await test.step('4. Add second user (Jane Smith)', async () => {
    await page.locator('#addNewRecordButton').click();

    await page.fill('#firstName', 'Jane');
    await page.fill('#lastName', 'Smith');
    await page.fill('#userEmail', 'jane.smith@test.com');
    await page.fill('#age', '28');
    await page.fill('#salary', '6000');
    await page.fill('#department', 'QA');

    await page.click('#submit');
  });

  // ===== STEP 5 =====
  await test.step('5. Verify second user row (SCOPED)', async () => {
    const janeRow = page
      .locator('.rt-tr-group')
      .filter({ hasText: 'jane.smith@test.com' });

    await expect(janeRow).toHaveCount(1);

    const cells = janeRow.locator('.rt-td');

    await expect(cells.nth(0)).toHaveText('Jane');
    await expect(cells.nth(1)).toHaveText('Smith');
  });

  // ===== STEP 6 =====
  await test.step('6. Edit first user salary & department', async () => {
    const johnRow = page
      .locator('.rt-tr-group')
      .filter({ hasText: 'john.doe@test.com' });

    await johnRow.locator('[title="Edit"]').click();

    await page.fill('#salary', '7000');
    await page.fill('#department', 'Engineering');

    await page.click('#submit');
  });

  // ===== STEP 7 =====
  await test.step('7. Verify edited data (SCOPED)', async () => {
    const johnRow = page
      .locator('.rt-tr-group')
      .filter({ hasText: 'john.doe@test.com' });

    const cells = johnRow.locator('.rt-td');

    await expect(cells.nth(4)).toHaveText('7000');
    await expect(cells.nth(5)).toHaveText('Engineering');
  });

  // ===== STEP 8 =====
  await test.step('8. Delete second user (Jane)', async () => {
    const janeRow = page
      .locator('.rt-tr-group')
      .filter({ hasText: 'jane.smith@test.com' });

    await janeRow.locator('[title="Delete"]').click();
  });

  // ===== STEP 9 =====
  await test.step('9. Verify second user removed', async () => {
    await expect(
      page.locator('.rt-tr-group').filter({ hasText: 'jane.smith@test.com' })
    ).toHaveCount(0);
  });
});
