import { test, expect } from '@playwright/test';

test('E-commerce End to End Test', async ({ page }) => {
  // 1. వెబ్‌సైట్ ఓపెన్ చేయడం
  await page.goto('https://saucedemo.com');

  // 2. లాగిన్ అవ్వడం
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 3. ప్రొడక్ట్ యాడ్ చేయడం
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 4. కార్ట్ ఓపెన్ చేయడం
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // 5. ఇన్ఫర్మేషన్ ఫిల్ చేయడం
  await page.locator('[data-test="firstName"]').fill('Ravi');
  await page.locator('[data-test="lastName"]').fill('Kumar');
  await page.locator('[data-test="postalCode"]').fill('500001');
  await page.locator('[data-test="continue"]').click();

  // 6. ఆర్డర్ ఫినిష్ చేయడం
  await page.locator('[data-test="finish"]').click();

  // 7. సక్సెస్ మెసేజ్ వెరిఫై చేయడం
  const successMessage = page.locator('[data-test="complete-header"]');
  await expect(successMessage).toHaveText('Thank you for your order!');
});