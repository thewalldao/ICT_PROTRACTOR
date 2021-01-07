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
        let window = await browser.getWindowHandle();
        await browser.driver.switchTo().window(window);

        // await browser.manage().window().maximize();
        // browser.manage().timeouts().implicitlyWait(5000);
    });
    it(General.printBox('TC001-05 - Verify that user cannot register account length less than 8 characters'), async () => {
        let username = General.makeUserName(7);
        let password = General.makeRandomChar(true,true,true,true) + General.randomLowerCharString(3);
        let email = General.randomEmail(10);
        let user: User = new User(username,password,password,email);
        let registerPage:RegisterPage = await loginPage.gotoRegisterPage();
        await registerPage.regiterAccountError(user);
        expect(await registerPage.passwordLessThanEightCharErrorDisplay()).toEqual("contains at least 8 characters", "error message is not match")
    })
})