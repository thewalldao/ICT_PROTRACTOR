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
    });
    it(General.printBox('Verify that user is navigated to "Test results" page and latest test result displayed'), async () => {
        let username = Login.ADMIN;
        let password = Login.ADMINPASS;
        let user: User = new User(username, password);
        let loginPage = new LoginPage();

        let dashBoard = await loginPage.loginSuccesful(user);
        let manageTestPage = await dashBoard.gotoManageTestPage();
        let testResultsPage =  await manageTestPage.clickLastestResultActionOfTestAndGotoTestResultPage();
        await BrowserWrapper.switchWindowByTitle("Single Test Result");
        // expect(await manageTestPage.getTitle()).toEqual("Manage Tests", "Message is not like expect");
        await testResultsPage.waitingForElementTitleVisible(20,10);
        expect(await testResultsPage.getTextElementWrapperTitle()).toEqual("Single Test Result", "Message is not like expect");      
        expect(await testResultsPage.isLastestTestResultDisplay()).toBe(true, "lastest test result is not display")
    });
})
