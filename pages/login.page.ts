import { test, expect, Page, Locator } from "@playwright/test";
export class LoginPage {
  readonly homesigninBtn: Locator;
  readonly password: Locator;
  readonly CustomerLoginHeading: Locator;
  readonly email: Locator;
  readonly forgetPassword: Locator;
  readonly signinBtn: Locator;

  constructor(page: Page) {
    this.homesigninBtn = page.getByRole('link', { name: 'Sign In' });
    this.CustomerLoginHeading = page.getByText('Customer Login');
    this.email = page.getByLabel('Email', { exact: true });
    this.password = page.getByLabel('Password');
    this.signinBtn = page.getByRole('button', { name: 'Sign In' });
    this.forgetPassword = page.getByRole('link', { name: 'Forgot Your Password?' })
  }
}