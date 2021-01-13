import 'module-alias/register';
import { browser, by } from "protractor";
import { General } from "@Utilities/General";
import LoginPage from '@page-objects/login-page';
import User from '@page-objects/User';
import { InContactLink, Login } from '@Utilities/Constant';
import BrowserWrapper from '@Utilities/protractor-wrappers/browser-wrapper';
import {BrowserName} from '@Utilities/Constant'
import { ClusterID } from '@data-objects/general/cluster';
import TestInfo from '@data-objects/general/test-info';
import ElementWrapper from '@Utilities/protractor-wrappers/element-wrapper';
import { testBase } from '@testcases/testbase';


describe('navigate between pages', function () {
    testBase()
    it(General.printBox('Verify that user is navigated to "Test results" page and latest test result displayed'), async () => {
        let username = Login.ADMIN;
        let password = Login.ADMINPASS;
        let user: User = new User(username, password);
        let browserName = BrowserName.CHROME;
        let custerName = ClusterID.TO31;
        let testName = "CXone Sanity"
        let testNameWithBrowserAndCluster = `${testName} - ${custerName} - ${browserName}`
        let dateRange = "Latest"
        
        let testInfo = new TestInfo(browserName,custerName,testName);
        let loginPage = new LoginPage();

        let dashBoard = await loginPage.loginSuccesful(user);
        let testResultPage = await dashBoard.gotoTestResultPage();
        await testResultPage.waitingForElementTitleVisible(20,10);
        await testResultPage.checkElementWrapperNotEmptyText();
        await testResultPage.waitingForLoadingDisapear(40,5)
        await testResultPage.searchTest(testNameWithBrowserAndCluster);
        await testResultPage.waitingForLoadingDisapear(40,5)
        expect(await testResultPage.isLastestTestResultDisplay(testNameWithBrowserAndCluster)).toBe(true,"test result is not display")
        let errorList:ElementWrapper[] = await testResultPage.checkTestResultDisplayCorrectly(testInfo);
        if (errorList.length !== 0){
            errorList.forEach(element => {
                console.log(element)
            });
            throw new Error("Test result displayed not correctly")
        }

    });
})
