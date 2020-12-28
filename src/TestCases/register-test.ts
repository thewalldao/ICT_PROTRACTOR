
import { LoginPage } from "Page_Objects/login-page";
import { User } from "Page_Objects/User";
import { browser } from "protractor";
import { General } from "Utilities/general";

describe('Register Test', function() {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        await browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
      });
    it('Verify that user cannot register account with special character in username',async () => {
        let user: User   = new User("@"+General.(10), );
        await loginPage.gotoRegisterPage();



    })
})