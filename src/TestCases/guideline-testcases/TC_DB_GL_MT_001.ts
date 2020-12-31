import 'module-alias/register';
import { browser } from "protractor";
import { General } from '@Utilities/general';
import { Login } from '@Utilities/Constant';
import { LoginPage } from '@page-objects/login-page';
import { User } from '@page-objects/User';
import { Dashboard } from '@page-objects/dashboard';
import { ManageTestPage } from '@page-objects/manage-test-page';


describe('guideline test', function () {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
    });
    it(General.printBox('TC-01 - Verify that main flow of guideline on Manage Tests page displayed correctly'), async () => {
        let username = Login.ADMIN;
        let password = Login.ADMINPASS;
        let user: User = new User(username,password);
        let loginPage = new LoginPage();
        //1. Log into Dashboard
        let dashBoard:Dashboard = await loginPage.loginSuccesful(user);

        //2. Go to Test Management page
        await dashBoard.gotoManageTestPage()
        let manageTestPage:ManageTestPage = new ManageTestPage()

        //3. Click Help button
        await manageTestPage.clickHelpButton();

        console.log(await manageTestPage.elementSyncTestText.getText());
        console.log(await manageTestPage.elementEditTabText.getText())

        //4. Verify that Sync tests button is highlighted
        // expect(await manageTestPage.syncTestButtonIsHighLight()).toBe(true, "Test Button is not HighLight")
    })
})