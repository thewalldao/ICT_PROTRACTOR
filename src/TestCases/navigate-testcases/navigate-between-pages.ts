import 'module-alias/register';
import { browser } from "protractor";
import { General } from "@Utilities/General";
import LoginPage from '@page-objects/login-page';
import User from '@page-objects/User';
import { InContactLink, Login } from '@Utilities/Constant';
import Dashboard from '@page-objects/dashboard';
import ManageTestPage from '@page-objects/manage-test-page';
import TestResultsPage from '@page-objects/test-result-page';


describe('navigate between pages', function () {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get(InContactLink.LOCAL);
        // await browser.manage().window().maximize();
        // browser.manage().timeouts().implicitlyWait(5000);
    });
    it(General.printBox('TC001-01 Verify that user can navigate between pages'), async () => {
        let username = Login.ADMIN;
        let password = Login.ADMINPASS;
        let user: User = new User(username, password);
        let loginPage = new LoginPage();

        let dashBoard = await loginPage.loginSuccesful(user);
        let manageTestPage =  <ManageTestPage>dashBoard.gotoManageTestPage();
        expect(await manageTestPage.getTitle()).toEqual("Manage Tests", "Message is not like expect");
        let testResultsPage =  <TestResultsPage>manageTestPage.gotoTestResultPage();
        expect(await testResultsPage.getTitle()).toEqual("Test Result", "Message is not like expect");
        let reportingPage =  <TestResultsPage>testResultsPage.gotoReportingPage();
        expect(await reportingPage.getTitle()).toEqual("Reporting", "Message is not like expect");
        let UiPerformanceTestPage =  <TestResultsPage>reportingPage.gotoUiPerformancePage();
        expect(await UiPerformanceTestPage.getTitle()).toEqual("UI Performance Test", "Message is not like expect");
    });
})