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
const general_1 = require("../Utilities/general");
class RegisterPage {
    constructor() {
        this._usernameField = "//input[@id='Username']";
        this._emailField = "//input[@id='Email']";
        this._passwordField = "//input[@id='Password']";
        this._comfirmPasswordField = "//input[@id='ConfirmPass']";
        this._submitButton = "//button[@id='btnSaveUser']";
        this.PE = protractor_1.protractor.ExpectedConditions;
        this._passwordFieldError = "//input[contains(@class,'ng-invalid')][@id='Password']";
        this._comfirmPasswordFieldError = "//input[contains(@class,'ng-invalid')][@id='ConfirmPass']";
        this._usernameFieldError = "//input[contains(@class,'is-invalid')][@id='Username']";
        this._emailFieldError = "//input[contains(@class,'is-invalid')][@id='Email']";
        this._matErrorNotLowerChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'lower')]";
        this._matErrorNotUpperChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'upper')]";
        this._matErrorNotDigitChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'digit')]";
        this._matErrorNotSpecialChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'special')]";
        this._matErrorLessThanEightChar = "//mat-icon[contains(@class,'negativeState')]//following-sibling::span[contains(text(),'8')]";
        this._matHaveInputLowerChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'lower')]";
        this._matHaveInpuUpperChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'upper')]";
        this._matHaveInpuDigitChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'digit')]";
        this._matHaveInpuSpecialChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'special')]";
        this._matMoreThanEightChar = "//mat-icon[contains(@class,'positiveState')]//following-sibling::span[contains(text(),'8')]";
        this._matErrorIconNotLowerChar = "//span[contains(text(),'lower')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]";
        this._matErrorIconNotUpperChar = "//span[contains(text(),'upper')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]";
        this._matErrorIconNotDigitChar = "//span[contains(text(),'digit')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]";
        this._matErrorIconNotSpecialChar = "//span[contains(text(),'special')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]";
        this._matErrorIconLessThanEightChar = "//span[contains(text(),'8')]/preceding-sibling::mat-icon[contains(@class,'negativeState')]";
        this._matIconHaveLowerChar = "//span[contains(text(),'lower')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]";
        this._matIconHaveUpperChar = "//span[contains(text(),'upper')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]";
        this._matIconHavevDigitChar = "//span[contains(text(),'digit')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]";
        this._matIconHaveSpecialChar = "//span[contains(text(),'special')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]";
        this._matIconHaveMoreThanEightChar = "//span[contains(text(),'8')]/preceding-sibling::mat-icon[contains(@class,'positiveState')]";
        this._matErrorMessageInvalidPas = "//input[@id='Password']/../../following-sibling::div//mat-error";
        this._matErrorMessageRequieComfirmPas = "//mat-error[@id='mat-error-19']";
        this._matErrorMessagePasswordNotSame = "//mat-error[@id='mat-error-17']";
        this._popupToastErrorMessage = "//div[@aria-live='polite'][@class='toast-message ng-star-inserted']";
    }
    elementOfUsernameFieldErrorDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._usernameFieldError))), 5000, "element take to long to response");
                return yield protractor_1.element(protractor_1.by.xpath(this._usernameFieldError)).isEnabled();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    elementOfPasswordFieldErrorDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotLowerChar))), 5000, "Error icon not include lower char not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotUpperChar))), 5000, "Error icon not include upper char not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotSpecialChar))), 5000, "Error icon not include special char not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotDigitChar))), 5000, "Error icon not include digit char not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconLessThanEightChar))), 5000, "Error icon at least 8 characters not display");
                let check = (protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotLowerChar)).isDisplayed &&
                    protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotUpperChar)).isDisplayed &&
                    protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotSpecialChar)).isDisplayed &&
                    protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotDigitChar)).isDisplayed &&
                    protractor_1.element(protractor_1.by.xpath(this._matErrorIconLessThanEightChar)).isDisplayed);
                if (check) {
                    return true;
                }
                return false;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    elementOfEmailFieldErrorDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._emailFieldError))), 5000, "element take to long to response");
                return yield protractor_1.element(protractor_1.by.xpath(this._emailFieldError)).isEnabled();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    passwordNotIncludeLowerCharErrorDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorNotLowerChar))), 5000, "contains at least one lower character message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorMessageInvalidPas))), 5000, "invalid password message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotLowerChar))), 5000, "Error icon not include lower char not display");
                return yield protractor_1.element(protractor_1.by.xpath(this._matErrorNotLowerChar)).getText();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    passwordNotIncludeUpperCharErrorDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorNotUpperChar))), 5000, "contains at least one upper character message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorMessageInvalidPas))), 5000, "invalid password message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotUpperChar))), 5000, "Error icon not include upper char not display");
                return yield protractor_1.element(protractor_1.by.xpath(this._matErrorNotUpperChar)).getText();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    passwordNotIncludeSpecialCharErrorDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorNotSpecialChar))), 10000, "contains at least one special character message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorMessageInvalidPas))), 5000, "invalid password message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotSpecialChar))), 5000, "Error icon not include special char not display");
                return yield protractor_1.element(protractor_1.by.xpath(this._matErrorNotSpecialChar)).getText();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    passwordNotIncludeDigitCharErrorDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorNotDigitChar))), 5000, "contains at least one digit character message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorMessageInvalidPas))), 5000, "invalid password message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconNotDigitChar))), 5000, "Error icon not include digit char not display");
                return yield protractor_1.element(protractor_1.by.xpath(this._matErrorNotDigitChar)).getText();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    passwordLessThanEightCharErrorDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorLessThanEightChar))), 5000, "contains at least 8 characters message not display");
                yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath(this._matErrorIconLessThanEightChar))), 5000, "Error icon at least 8 characters not display");
                return yield protractor_1.element(protractor_1.by.xpath(this._matErrorLessThanEightChar)).getText();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    regiterAccountError(user) {
        return __awaiter(this, void 0, void 0, function* () {
            general_1.General.printDescribe("register a error account");
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