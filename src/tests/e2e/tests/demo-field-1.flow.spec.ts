import { test, expect } from '@playwright/test';

test('Long run flow: fill & verify Text Box form (learning)', async ({ page }) => {
  // ===== STEP 1 =====
  await test.step('1. Open Text Box page', async () => {
    await page.goto('https://demoqa.com/text-box', {
      waitUntil: 'domcontentloaded',
    });

    await expect(
      page.getByRole('heading', { name: 'Text Box' })
    ).toBeVisible();
  });

  // ===== STEP 2 =====
  await test.step('2. Verify Full Name input exists', async () => {
    await expect(page.locator('#userName')).toBeVisible();
  });

  // ===== STEP 3 =====
  await test.step('3. Fill Full Name', async () => {
    await page.fill('#userName', 'Nguyen Van A');
    await expect(page.locator('#userName')).toHaveValue('Nguyen Van A');
  });

  // ===== STEP 4 =====
  await test.step('4. Fill Email', async () => {
    await page.fill('#userEmail', 'a.nguyen@example.com');
    await expect(page.locator('#userEmail')).toHaveValue(
      'a.nguyen@example.com'
    );
  });

  // ===== STEP 5 =====
  await test.step('5. Fill Current Address', async () => {
    await page.fill(
      '#currentAddress',
      '123 Nguyen Trai, District 1, HCMC'
    );
  });

  // ===== STEP 6 =====
  await test.step('6. Fill Permanent Address', async () => {
    await page.fill(
      '#permanentAddress',
      '456 Le Loi, District 1, HCMC'
    );
  });

  // ===== STEP 7 =====
  await test.step('7. Scroll to Submit button', async () => {
    await page.locator('#submit').scrollIntoViewIfNeeded();
    await expect(page.locator('#submit')).toBeVisible();
  });

  // ===== STEP 8 =====
  await test.step('8. Submit the form', async () => {
    await page.click('#submit');
  });

  // ===== STEP 9 =====
  await test.step('9. Verify output section appears', async () => {
    await expect(page.locator('#output')).toBeVisible();
  });

  // ===== STEP 10 =====
  await test.step('10. Verify Name in output', async () => {
    await expect(
      page.locator('#output #name')
    ).toContainText('Nguyen Van A');
  });

  // ===== STEP 11 =====
  await test.step('11. Verify Email in output', async () => {
    await expect(
      page.locator('#output #email')
    ).toContainText('a.nguyen@example.com');
  });

  // ===== STEP 12 =====
  await test.step('12. Verify Current Address in output', async () => {
    await expect(
      page.locator('#output #currentAddress')
    ).toContainText('Nguyen Trai');
  });

  // ===== STEP 13 =====
  await test.step('13. Verify Permanent Address in output', async () => {
    await expect(
      page.locator('#output #permanentAddress')
    ).toContainText('Le Loi');
  });

  // ===== STEP 14 =====
  await test.step('14. Take screenshot for evidence', async () => {
    await page.screenshot({
      path: 'test-results/text-box-longrun.png',
      fullPage: true,
    });
  });

  // ===== STEP 15 =====
  await test.step('15. Final assertion: output contains all data', async () => {
    const outputText = await page.locator('#output').innerText();
    expect(outputText).toContain('Nguyen Van A');
    expect(outputText).toContain('a.nguyen@example.com');
    expect(outputText).toContain('Nguyen Trai');
    expect(outputText).toContain('Le Loi');
  });
});
