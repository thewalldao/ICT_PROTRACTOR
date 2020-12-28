import { LoginPage } from "../../Page_Objects/login-page";
import { RegisterPage } from "../../Page_Objects/register-page";
import { User } from "../../Page_Objects/User";
import { browser } from "protractor";
import { General } from "../../Utilities/general";

describe('Register Test', function () {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        await browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    });
    it(General.printBox('TC001-06 - Verify that user cannot register account without any special character in password'), async () => {
        let username = General.makeUserName(7);
        let password = General.makeRandomChar(true,true,true,false) + General.randomNumberCharString(5);
        let email = General.randomEmail(10);
        let user: User = new User(username,password,password,email);
        let registerPage:RegisterPage = await loginPage.gotoRegisterPage();
        await registerPage.regiterAccountError(user);
        expect(await registerPage.passwordNotIncludeSpecialCharErrorDisplay()).toEqual("contains at least one special character", "error message is not match")
    })
})