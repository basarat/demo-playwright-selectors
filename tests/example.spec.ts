import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test('selectors', async ({ page }) => {
  /** CSS Selector */
  await page.locator('button.primary').click();

  /** Explicit CSS Selector */
  await page.locator('css=button.primary').click();

  /** Text Selector */
  await page.locator('text=submit').click();

  /** Chain Selectors */
  await page.locator('button >> text=Submit').click();

  /** nth */
  await page.locator('button >> nth=0').click();

  /** data-test */
  await page.locator('data-test=submit').click();
});
