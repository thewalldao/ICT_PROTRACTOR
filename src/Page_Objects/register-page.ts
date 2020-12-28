import { by, element } from "protractor";
import { User } from "./User";

export class RegisterPage{
    private _usernameField: string = "//input[@id='Username']";
    private _emailField: string = "//input[@id='Email']";
    private _passwordField: string = "//input[@id='Password']";
    private _comfirmPasswordField: string = "//input[@id='ConfirmPass']";
    private _submitButton: string = "//input[@id='//button[@id='btnSaveUser']";

    private _passwordFieldError: string = "//input[contains(@class,'ng-invalid')][@id='Password']";
    private _comfirmPasswordFieldError: string = "//input[contains(@class,'ng-invalid')][@id='ConfirmPass']";
    private _usernameFieldError: string = "//input[contains(@class,'is-invalid')][@id='Username']";
    private _emailFieldError: string = "//input[contains(@class,'is-invalid')][@id='Email']";

    private _matErrorIconNotLowerChar:string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='contains at least one lower character']"
    private _matErrorIconNotUpperChar:string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='contains at least one upper character']"
    private _matErrorIconNotDigitChar:string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='contains at least one digit character']"
    private _matErrorIconNotSpecialChar:string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='contains at least one special character']"
    private _matErrorIconLessThanEightChar:string = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='ccontains at least 8 characters']"

    private _matIconHaveInputLowerChar:string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='contains at least one lower character']"
    private _matIconHaveInpuUpperChar:string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='contains at least one upper character']"
    private _matIconHaveInpuDigitChar:string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='contains at least one digit character']"
    private _matIconHaveInpuSpecialChar:string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='contains at least one special character']"
    private _matIconMoreThanEightChar:string = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='ccontains at least 8 characters']"

    private _matErrorMessageInvalidPas:string  = "//mat-error[@id='mat-error-16']";
    private _matErrorMessageRequieComfirmPas:string  = "//mat-error[@id='mat-error-19']";
    private _matErrorMessagePasswordNotSame:string  = "//mat-error[@id='mat-error-17']";
    private _popupToastErrorMessage: string = "//div[@aria-live='polite'][@class='toast-message ng-star-inserted']";

    public async regiterAccountError(user:User) : Promise<RegisterPage> {
        await element(by.xpath(this._usernameField)).sendKeys(user.getUsername());
        await element(by.xpath(this._emailField)).sendKeys(user.getEmail());
        await element(by.xpath(this._passwordField)).sendKeys(user.getPassWord());
        await element(by.xpath(this._comfirmPasswordField)).sendKeys(user.getPassWordComfirm());

        return this;
    }
 

    
    
}