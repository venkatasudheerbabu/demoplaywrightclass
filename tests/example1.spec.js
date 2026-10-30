
import { test, expect } from '@playwright/test';

test('E-commerce End to End Test', async ({ page }) => {
  
  await page.goto('https://saucedemo.com');


  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

 
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

 
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  
  await page.locator('[data-test="firstName"]').fill('Ravi');
  await page.locator('[data-test="lastName"]').fill('Kumar');
  await page.locator('[data-test="postalCode"]').fill('500001');
  await page.locator('[data-test="continue"]').click();

 
  await page.locator('[data-test="finish"]').click();

 
  const successMessage = page.locator('[data-test="complete-header"]');
  await expect(successMessage).toHaveText('Thank you for your order!');
});