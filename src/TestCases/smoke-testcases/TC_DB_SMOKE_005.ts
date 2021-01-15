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
        let browserName1 = BrowserName.CHROME;
        let custerName1 = ClusterID.TO31;
        let testName1 = "CXone Sanity"
        let browserName2 = BrowserName.CHROME;
        let custerName2 = ClusterID.TO32;
        let testName2 = "CXone Sanity"
        let testNameWithBrowserAndCluster1 = `${testName1} - ${custerName1} - ${browserName1}`
        let testNameWithBrowserAndCluster2 = `${testName2} - ${custerName2} - ${browserName2}`

        let loginPage = new LoginPage();

        let dashBoard = await loginPage.loginSuccesful(user);
        let reportingPage = await dashBoard.gotoReportingPage();
        await reportingPage.waitingForLoadingDisapear(40,10)
        await reportingPage.selectTestToReport(testNameWithBrowserAndCluster1,custerName1,false,1);
        await reportingPage.selectTestToReport(testNameWithBrowserAndCluster2,custerName2,false,2);
        let checkError1 : string[] = await reportingPage.checkReportDisplayCorrectly(browserName1,custerName1,1);
        let checkError2 : string[] = await reportingPage.checkReportDisplayCorrectly(browserName2,custerName2,2);
        
        if (checkError1.length !== 0){
            checkError1.forEach(element => {
                console.log(element)
            });
            throw new Error("Reporting 1 displayed not correctly")
        }

        if (checkError2.length !== 0){
            checkError2.forEach(element => {
                console.log(element)
            });
            throw new Error("Reporting 2 displayed not correctly")
        }

    });
})
