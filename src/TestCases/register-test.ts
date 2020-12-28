
import { LoginPage } from "Page_Objects/login-page";
import { RegisterPage } from "Page_Objects/register-page";
import { User } from "Page_Objects/User";
import { browser } from "protractor";
import { General } from "Utilities/general";

describe('Register Test', function () {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        await browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    });
    it('Verify that user cannot register account with special character in username', async () => {
        let username = General.randomSpecialString(1) + General.makeUserName(7);
        let password = General.makeRandomChar(true,true,true,true);
        let email = General.randomEmail(10);
        let user: User = new User(username,password,password,email);
        let registerPage:RegisterPage = await loginPage.gotoRegisterPage();
        await registerPage.regiterAccountError(user);



    })
})