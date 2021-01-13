import 'module-alias/register';
import { browser, by } from "protractor";
import { General } from "@Utilities/General";
import  LoginPage  from '@page-objects/login-page';
import  User  from '@page-objects/User';
import ElementWrapper from '@Utilities/protractor-wrappers/element-wrapper';


describe('Login Test', function () {
    let loginPage = new LoginPage();    
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('http://192.168.171.141/');
        // await browser.manage().window().maximize();
        // browser.manage().timeouts().implicitlyWait(5000);
    });
    it(General.printBox('TC001-01 Verify that user cannot login into Dashboard with blank username'), async () => {
        let _loginButton: ElementWrapper = new ElementWrapper(by.xpath("//button[@id='logIn'][@class='btn btn-primary btn-block']"));
        let _loginButton2: ElementWrapper = new ElementWrapper(by.xpath("//input[@id='Username'][@class='form-control']"));
        let username = "";
        let password = General.makeRandomChar(true,true,true,true) + General.randomLowerCharString(5);
        let user: User = new User(username,password);
        let loginPage = new LoginPage();
        let bb = [_loginButton,_loginButton,_loginButton,_loginButton,_loginButton,_loginButton,_loginButton,_loginButton2,_loginButton2]
        let errorIndex = await loginPage.checkElementWrapperNotEmptyText(...bb);
        let totalError:number = 0;
        errorIndex.forEach(element => {
            ++totalError;
        });
        console.log(totalError)
        // await loginPage.loginError(user);

        // expect(await loginPage.getErrorFeedBack()).toEqual("Please enter username.", "error feedback is not match")

    })
})
