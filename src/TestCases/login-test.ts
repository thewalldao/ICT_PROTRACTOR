import { LoginPage } from "@page-objects/login-page";
import { ManageTestPage } from "@page-objects/manage-test-page";
import { User } from "@page-objects/User";
import { browser } from "protractor";
import { Login } from "Utilities/Constant";


describe('Login Test', function() {
    let user = new User(Login.ADMIN,Login.ADMINPASS);
    let loginPage = new LoginPage();

    beforeEach(async () => {
        await browser.get('http://192.168.171.141/');
      });
    it('TC1 User Login successfull',async () => {
        let managePage: ManageTestPage = await loginPage.loginSuccesful(user);
        await managePage.hiUser(user);
    });
})