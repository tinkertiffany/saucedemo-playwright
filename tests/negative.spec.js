const { test, expect } = require('@playwright/test');

test('Invalid Login', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'wrongUser');
  await page.fill('#password', 'wrongPass');

  await page.click('#login-button');

  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();

});