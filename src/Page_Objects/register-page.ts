import { browser, by, element, protractor } from "protractor";
import { General } from "../Utilities/General";
import  User  from "./User";

export default class RegisterPage {
    private static registerpage :RegisterPage = null;
    private _usernameField: string = "//input[@id='Username']";
    private _emailField: string = "//input[@id='Email']";
    private _passwordField: string = "//input[@id='Password']";
    private _comfirmPasswordField: string = "//input[@id='ConfirmPass']";
    private _submitButton: string = "//button[@id='btnSaveUser']";
    private PE = protractor.ExpectedConditions;

    private _passwordFieldError: string = "//input[contains(@class,'ng-invalid')][@id='Password']";
    private _comfirmPasswordFieldError: string = "//input[contains(@class,'ng-invalid')][@id='ConfirmPass']";
    private _usernameFieldError: string = "//input[contains(@class,'is-invalid')][@id='Username']";
    private _emailFieldError: string = "//input[contains(@class,'is-invalid')][@id='Email']";

    private _matErrorNotLowerChar: string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'lower')]"
    private _matErrorNotUpperChar: string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'upper')]"
    private _matErrorNotDigitChar: string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'digit')]"
    private _matErrorNotSpecialChar: string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'special')]"
    private _matErrorLessThanEightChar: string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'8')]"

    private _matHaveInputLowerChar: string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'lower')]"
    private _matHaveInpuUpperChar: string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'upper')]"
    private _matHaveInpuDigitChar: string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'digit')]"
    private _matHaveInpuSpecialChar: string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'special')]"
    private _matMoreThanEightChar: string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'8')]"

    private _matErrorIconNotLowerChar: string = "//span[contains(text(),'lower')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]"
    private _matErrorIconNotUpperChar: string = "//span[contains(text(),'upper')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]"
    private _matErrorIconNotDigitChar: string = "//span[contains(text(),'digit')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]"
    private _matErrorIconNotSpecialChar: string = "//span[contains(text(),'special')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]"
    private _matErrorIconLessThanEightChar: string = "//span[contains(text(),'8')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]"

    private _matIconHaveLowerChar: string = "//span[contains(text(),'lower')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]"
    private _matIconHaveUpperChar: string = "//span[contains(text(),'upper')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]"
    private _matIconHavevDigitChar: string = "//span[contains(text(),'digit')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]"
    private _matIconHaveSpecialChar: string = "//span[contains(text(),'special')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]"
    private _matIconHaveMoreThanEightChar: string = "//span[contains(text(),'8')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]"

    private _matErrorMessageInvalidPas: string = "//input[@id='Password']/../../following-sibling::div//mat-error";
    private _matErrorMessageRequieComfirmPas: string = "//mat-error[@id='mat-error-19']";
    private _matErrorMessagePasswordNotSame: string = "//mat-error[@id='mat-error-17']";
    private _popupToastErrorMessage: string = "//div[@aria-live='polite'][@class='toast-message ng-star-inserted']";

    public async elementOfUsernameFieldErrorDisplay(): Promise<boolean> {
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._usernameFieldError))), 5000, "element take to long to response")
            return await element(by.xpath(this._usernameFieldError)).isEnabled();
        }
        catch (error) {
            console.log(error);
        }
    }

    public async elementOfPasswordFieldErrorDisplay(): Promise<boolean> {
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconNotLowerChar))), 10000, "Error icon not include lower char not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconNotUpperChar))), 10000, "Error icon not include upper char not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconNotSpecialChar))), 10000, "Error icon not include special char not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconNotDigitChar))), 10000, "Error icon not include digit char not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconLessThanEightChar))), 10000, "Error icon at least 8 characters not display");
    
            let check =  (element(by.xpath(this._matErrorIconNotLowerChar)).isDisplayed &&
                element(by.xpath(this._matErrorIconNotUpperChar)).isDisplayed &&
                element(by.xpath(this._matErrorIconNotSpecialChar)).isDisplayed &&
                element(by.xpath(this._matErrorIconNotDigitChar)).isDisplayed &&
                element(by.xpath(this._matErrorIconLessThanEightChar)).isDisplayed)
            if(check){
                return true;
            }
            return false;

        }
        catch (error) {
            console.log(error);
        }
    }

    public async elementOfEmailFieldErrorDisplay(): Promise<boolean> {
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._emailFieldError))), 10000, "element take to long to response")
            return await element(by.xpath(this._emailFieldError)).isEnabled();
        }
        catch (error) {
            console.log(error);
        }
    }

    public async passwordNotIncludeLowerCharErrorDisplay(): Promise<string> {
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorNotLowerChar))), 10000, "contains at least one lower character message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorMessageInvalidPas))), 10000, "invalid password message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconNotLowerChar))), 10000, "Error icon not include lower char not display");
            return await element(by.xpath(this._matErrorNotLowerChar)).getText();
        }
        catch (error) {
            console.log(error);
        }
    }


    public async passwordNotIncludeUpperCharErrorDisplay(): Promise<string> {
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorNotUpperChar))), 10000, "contains at least one upper character message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorMessageInvalidPas))), 10000, "invalid password message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconNotUpperChar))), 10000, "Error icon not include upper char not display");
            return await element(by.xpath(this._matErrorNotUpperChar)).getText();
        }
        catch (error) {
            console.log(error);
        }
    }

    public async passwordNotIncludeSpecialCharErrorDisplay(): Promise<string> {
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorNotSpecialChar))), 10000, "contains at least one special character message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorMessageInvalidPas))), 10000, "invalid password message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconNotSpecialChar))), 10000, "Error icon not include special char not display");
            return await element(by.xpath(this._matErrorNotSpecialChar)).getText();
        }
        catch (error) {
            console.log(error);
        }
    }

    public async passwordNotIncludeDigitCharErrorDisplay(): Promise<string> {
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorNotDigitChar))), 10000, "contains at least one digit character message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorMessageInvalidPas))), 10000, "invalid password message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconNotDigitChar))), 10000, "Error icon not include digit char not display");
            return await element(by.xpath(this._matErrorNotDigitChar)).getText();
        }
        catch (error) {
            console.log(error);
        }
    }

    public async passwordLessThanEightCharErrorDisplay(): Promise<string> {
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorLessThanEightChar))), 10000, "contains at least 8 characters message not display");
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._matErrorIconLessThanEightChar))), 10000, "Error icon at least 8 characters not display");
            return await element(by.xpath(this._matErrorLessThanEightChar)).getText();
        }
        catch (error) {
            console.log(error);
        }
    }



    public async regiterAccountError(user: User): Promise<RegisterPage> {
        General.printDescribe("register a error account");
        await element(by.xpath(this._usernameField)).sendKeys(user.getUsername());
        await element(by.xpath(this._emailField)).sendKeys(user.getEmail());
        await element(by.xpath(this._passwordField)).sendKeys(user.getPassWord());
        await element(by.xpath(this._comfirmPasswordField)).sendKeys(user.getPassWordComfirm());

        await element(by.xpath(this._submitButton)).click();

        return this;
    }

    public async errorToastPopupDisplay():Promise<string>{
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._popupToastErrorMessage))), 10000, "element take to long to response")
            return await element(by.xpath(this._popupToastErrorMessage)).getText();
        }
        catch (error) {
            console.log(error);
        }
    }

    public static getInstance(): RegisterPage{
        this.registerpage = new RegisterPage()
        return this.registerpage
    }
}