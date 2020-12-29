import { browser, by, element, ElementFinder, protractor } from "protractor";
import { General } from "../Utilities/general";
import { ManageTestPage } from "./manage-test-page";
import { RegisterPage } from "./register-page";
import { User } from "./user";



export class LoginPage {

    constructor() {
    }

    private _usernameFiled: string = "//input[@id='Username'][@class='form-control']";
    private _passwordField: string = "//input[@id='Password'][@class='form-control']";
    private _loginButton: string = "//button[@id='logIn'][@class='btn btn-primary btn-block']";
    private _register: string = "//div[@class='row']/button[@type='button']";
    private _errorFeedback: string = "//div[@class='feedback']//li"
    private PE = protractor.ExpectedConditions;

    protected elementOfRegiter(){
        return element(by.xpath(this._register));
    } 

    public loginButtonElement() {
        return element(by.xpath(this._loginButton));
    }

    public async loginSuccesful(user: User): Promise<ManageTestPage> {
        General.printDescribe("Login")
        await element(by.xpath(this._usernameFiled)).sendKeys(user.getUsername());
        await element(by.xpath(this._passwordField)).sendKeys(user.getPassWord());
        await element(by.xpath(this._loginButton)).click();

        return await new ManageTestPage();
    }

    public async gotoRegisterPage(): Promise<RegisterPage> {
        General.printDescribe("go to register page")
        try {
            // await browser.sleep(20000)
            await browser.wait(this.PE.visibilityOf(this.elementOfRegiter()), 10000, "element take to long to response") 
            await element(by.xpath(this._register)).click();
            return new RegisterPage()
        }
        catch(error){
            console.log(error);
        } 
    }
    public async loginError(user:User): Promise<LoginPage>{
        General.printDescribe("Login")
        await element(by.xpath(this._usernameFiled)).sendKeys(user.getUsername());
        await element(by.xpath(this._passwordField)).sendKeys(user.getPassWord());
        await element(by.xpath(this._loginButton)).click();

        return this;
    }

    public async getErrorFeedBack():Promise<string>{
        await browser.wait(this.PE.visibilityOf(element(by.xpath("//div[@class='feedback']//li"))), 100000, "element take to long to response");
        return element(by.xpath("//div[@class='feedback']//li")).getText()
    }

}

