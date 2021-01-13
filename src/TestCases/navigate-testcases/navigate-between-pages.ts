import 'module-alias/register';
import { browser, by } from "protractor";
import { General } from "@Utilities/General";
import LoginPage from '@page-objects/login-page';
import User from '@page-objects/User';
import { InContactLink, Login } from '@Utilities/Constant';
import Dashboard from '@page-objects/dashboard';
import ManageTestPage from '@page-objects/manage-test-page';
import TestResultsPage from '@page-objects/test-result-page';
import BrowserWrapper from '@Utilities/protractor-wrappers/browser-wrapper';
import ElementWrapper from '@Utilities/protractor-wrappers/element-wrapper';
import ReportingPage from '@page-objects/reporting-page';
import UiPerformanceTestPage from '@page-objects/uiperformance-testcase-page';


describe('navigate between pages', function () {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await BrowserWrapper.waitForAngularEnabled(false)
        await BrowserWrapper.get(InContactLink.LOCAL)
        // await browser.waitForAngularEnabled(false);
        // await browser.get(InContactLink.LOCAL);
    });
    it(General.printBox('TC001-01 Verify that user can navigate between pages'), async () => {
        let username = Login.ADMIN;
        let password = Login.ADMINPASS;
        let user: User = new User(username, password);
        let loginPage = new LoginPage();

        let dashBoard = await loginPage.loginSuccesful(user);
        let manageTestPage = await dashBoard.gotoManageTestPage();
        // let elementWrapper = new ElementWrapper(by.xpath("//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]"))
        // await elementWrapper.waitForVisibilityOfCustom(10, 5)
        expect(await manageTestPage.getTitle()).toEqual("Manage Tests", "Message is not like expect");
        let testResultsPage = <TestResultsPage> await manageTestPage.gotoTestResultPage();
        expect(await testResultsPage.getTitle()).toEqual("Test Result", "Message is not like expect");
        let reportingPage = <ReportingPage> await testResultsPage.gotoReportingPage();
        expect(await reportingPage.getTitle()).toEqual("Reporting", "Message is not like expect");
        let UiPerformanceTestPage = <UiPerformanceTestPage> await reportingPage.gotoUiPerformancePage();
        expect(await UiPerformanceTestPage.getTitle()).toEqual("UI Performance Test", "Message is not like expect");
    });
})