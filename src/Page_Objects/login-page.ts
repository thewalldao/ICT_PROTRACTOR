import { by, element } from "protractor";
import { ManageTestPage } from "./manage-test-page";
import { RegisterPage } from "./register-page";
import { User } from "./user";



export class LoginPage {

    constructor() {
    }

    private _usernameFiled: string = "//input[@id='Username'][@class='form-control']";
    private _passwordField: string = "//input[@id='Password'][@class='form-control']";
    private _loginButton: string = "//button[@id='logIn'][@class='btn btn-primary btn-block']";
    private _register: string = "//div[@class='row'][@_ngcontent-gom-c7]/button[@type='button']";



    public loginButtonElement() {
        return element(by.xpath(this._loginButton));
    }

    public async loginSuccesful(user: User): Promise<ManageTestPage> {
        await element(by.xpath(this._usernameFiled)).sendKeys(user.getUsername());
        await element(by.xpath(this._passwordField)).sendKeys(user.getPassWord());
        await element(by.xpath(this._loginButton)).click();

        return await new ManageTestPage();
    }

    public async gotoRegisterPage(): Promise<RegisterPage> {
        await element(by.xpath(this._register)).click();
        return new RegisterPage()
    }

}

