require("module-alias/register");
import LoginPage from "@page-objects/login-page";
import RegisterPage from "@page-objects/register-page";
import User from "@page-objects/User";
import { General } from "@Utilities/General";
import { browser } from "protractor";

describe('Register Test', function () {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        // await browser.manage().window().maximize();
        // browser.manage().timeouts().implicitlyWait(5000);
    });
    it(General.printBox('TC001-03 - Verify that user cannot register account without any upper character in password'), async () => {
        let username = General.makeUserName(7);
        let password = General.makeRandomChar(false,true,true,true) + General.randomNumberCharString(5);
        let email = General.randomEmail(10);
        let user: User = new User(username,password,password,email);
        let registerPage:RegisterPage = await loginPage.gotoRegisterPage();
        await registerPage.regiterAccountError(user);
        expect(await registerPage.passwordNotIncludeUpperCharErrorDisplay()).toEqual("contains at least one upper character", "error message is not match")
    })
})