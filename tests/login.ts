import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { assertElements } from '../pages/login.calls';

test('sign in using correct credentials', async ({ page }) => {
  await page.goto('/');
  const loginpage = new LoginPage(page);
  await loginpage.homesigninBtn.click();
  await page.waitForLoadState('networkidle');
  await assertElements(page);
  await loginpage.email.fill('email');
  await loginpage.password.fill('XXXXXXXXXX');
  await loginpage.signinBtn.click();
});