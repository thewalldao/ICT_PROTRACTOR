require("module-alias/register");
import { LoginPage } from "@page-objects/login-page";
import { RegisterPage } from "@page-objects/register-page";
import { User } from "@page-objects/User";
import { General } from "@Utilities/General";
import { browser } from "protractor";

describe('Register Test', function () {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        await browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    });
    it(General.printBox('TC001-09 - Verify that user cannot register account with blank password'), async () => {
        let username = General.makeUserName(7);
        let password = '';
        let email = General.randomEmail(10);
        let user: User = new User(username,password,password,email);
        let registerPage:RegisterPage = await loginPage.gotoRegisterPage();
        await registerPage.regiterAccountError(user);
        expect(await registerPage.elementOfPasswordFieldErrorDisplay()).toBe(true, "password box did not show error");
    })
})