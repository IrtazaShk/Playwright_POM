import { expect, Page } from "playwright/test";
import { LoginPage } from "./login.page";

export async function assertElements(page: Page){
    const loginpage = new LoginPage(page);
    await expect (loginpage.CustomerLoginHeading).toBeVisible();
    await expect (loginpage.forgetPassword).toBeVisible();
}