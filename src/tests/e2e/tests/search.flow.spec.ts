import { test, expect } from '@playwright/test';

test('Search and navigate on Wikipedia', async ({ page }) => {
  // STEP 1: Open Wikipedia
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');

  // Verify homepage loaded
  await expect(page.locator('#searchInput')).toBeVisible();

  // STEP 2: Search keyword
  await page.fill('#searchInput', 'Playwright');
  await page.keyboard.press('Enter');

  // STEP 3: Verify search result page
  await expect(page).toHaveURL(/wiki\/Playwright/);

  // STEP 4: Verify article heading
  const heading = page.locator('#firstHeading');
  await expect(heading).toHaveText('Playwright');

  // STEP 5: Verify content exists
  await expect(page.locator('#mw-content-text')).toBeVisible();
});
