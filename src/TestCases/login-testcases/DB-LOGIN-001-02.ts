import { LoginPage } from "../../Page_Objects/login-page";
import { User } from "../../Page_Objects/User";
import { browser } from "protractor";
import { General } from "../../Utilities/general";
import { Login } from "../../utilities/Constant";


describe('Login Test', function () {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        // await browser.manage().window().maximize();
        // browser.manage().timeouts().implicitlyWait(5000);
    });
    it(General.printBox('TC001-01 Verify that user cannot login into Dashboard with blank password'), async () => {
        let username = Login.ADMIN;
        let password = "";
        let user: User = new User(username,password);
        let loginPage = new LoginPage();
        await loginPage.loginError(user);
        expect(await loginPage.getErrorFeedBack()).toEqual("Please enter password.", "error feedback is not match")

    })
})