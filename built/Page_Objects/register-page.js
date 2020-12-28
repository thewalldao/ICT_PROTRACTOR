"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPage = void 0;
const protractor_1 = require("protractor");
class RegisterPage {
    constructor() {
        this._usernameField = "//input[@id='Username']";
        this._emailField = "//input[@id='Email']";
        this._passwordField = "//input[@id='Password']";
        this._comfirmPasswordField = "//input[@id='ConfirmPass']";
        this._submitButton = "//input[@id='//button[@id='btnSaveUser']";
        this._passwordFieldError = "//input[contains(@class,'ng-invalid')][@id='Password']";
        this._comfirmPasswordFieldError = "//input[contains(@class,'ng-invalid')][@id='ConfirmPass']";
        this._usernameFieldError = "//input[contains(@class,'is-invalid')][@id='Username']";
        this._emailFieldError = "//input[contains(@class,'is-invalid')][@id='Email']";
        this._matErrorIconNotLowerChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='contains at least one lower character']";
        this._matErrorIconNotUpperChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='contains at least one upper character']";
        this._matErrorIconNotDigitChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='contains at least one digit character']";
        this._matErrorIconNotSpecialChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='contains at least one special character']";
        this._matErrorIconLessThanEightChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[.='ccontains at least 8 characters']";
        this._matIconHaveInputLowerChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='contains at least one lower character']";
        this._matIconHaveInpuUpperChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='contains at least one upper character']";
        this._matIconHaveInpuDigitChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='contains at least one digit character']";
        this._matIconHaveInpuSpecialChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='contains at least one special character']";
        this._matIconMoreThanEightChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[.='ccontains at least 8 characters']";
        this._matErrorMessageInvalidPas = "//mat-error[@id='mat-error-16']";
        this._matErrorMessageRequieComfirmPas = "//mat-error[@id='mat-error-19']";
        this._matErrorMessagePasswordNotSame = "//mat-error[@id='mat-error-17']";
        this._popupToastErrorMessage = "//div[@aria-live='polite'][@class='toast-message ng-star-inserted']";
    }
    regiterAccountError(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(this._usernameField)).sendKeys(user.getUsername());
            yield protractor_1.element(protractor_1.by.xpath(this._emailField)).sendKeys(user.getEmail());
            yield protractor_1.element(protractor_1.by.xpath(this._passwordField)).sendKeys(user.getPassWord());
            yield protractor_1.element(protractor_1.by.xpath(this._comfirmPasswordField)).sendKeys(user.getPassWordComfirm());
            yield protractor_1.element(protractor_1.by.xpath(this._submitButton)).click();
            return this;
        });
    }
}
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=register-page.js.map