import { browser, by, element } from "protractor";
import { Login } from "../Utilities/Constant";
import { User } from "../Page_Objects/User";
import { LoginPage } from "../Page_Objects/login-page";
import { ManageTestPage } from "../Page_Objects/manage-test-page";

describe('Navigate Between Pages', function() {
    let user = new User(Login.ADMIN,Login.ADMINPASS);
    let loginPage = new LoginPage();
    let managePage : ManageTestPage;

    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        await browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
      });
    it('TC01 - Navigate Between Pages',async () => {
        // managePage = await loginPage.loginSuccesful(user);        
        // expect(await managePage.hiUser(user)).toEqual(`Hi, ${Login.ADMIN}`, "Message is not like expect")
        // expect(await managePage.titleIsDisplay()).toBe(true,"Manage Test Page is not Display");
        
        // let testResults  = await managePage.gotoTestResultPage();
        // expect(managePage.titleIsDisplay()).toBe(true,"Manage Test Page is not Display");
        // let reportingPage = await testResults.gotoReportingPage();
        // expect(managePage.titleIsDisplay()).toBe(true,"Manage Test Page is not Display");
        // let uiperformanceTestPage = await reportingPage.gotoUiPerformancePage();
        // expect(managePage.titleIsDisplay()).toBe(true,"Manage Test Page is not Display");
    });
})