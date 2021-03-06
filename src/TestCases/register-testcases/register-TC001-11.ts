import 'module-alias/register';
import { browser } from "protractor";
import { appendFile } from "fs";
import { General } from '@Utilities/General';
import { Register } from '@Utilities/Constant';
import LoginPage from "@page-objects/login-page";
import RegisterPage from "@page-objects/register-page";
import User from "@page-objects/User";



describe('Register Test', function () {
    let loginPage = new LoginPage();
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        // await browser.manage().window().maximize();
        // browser.manage().timeouts().implicitlyWait(5000);
    });
    it(General.printBox('TC001-11 Verify that user cannot register account with an actived email'), async () => {
        let username = General.makeUserName(7);
        let password = General.makeRandomChar(true,true,true,true) + General.randomLowerCharString(5);
        let email = Register.EMAIL;
        appendFile("../../data-objects/user.txt",`AUTO - ${username} - ${password}\n`,function (err) {
            if (err) throw err;
            console.log('Saved!');
          })

        let user: User = new User(username,password,password,email);
        let registerPage:RegisterPage = await loginPage.gotoRegisterPage();
        await registerPage.regiterAccountError(user);
        expect(await registerPage.errorToastPopupDisplay()).toEqual("Email already exists. Please use a different one.", "Toast Error not match");
    })
})