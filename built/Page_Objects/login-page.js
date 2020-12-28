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
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const general_1 = require("../Utilities/general");
const manage_test_page_1 = require("./manage-test-page");
const register_page_1 = require("./register-page");
class LoginPage {
    constructor() {
        this._usernameFiled = "//input[@id='Username'][@class='form-control']";
        this._passwordField = "//input[@id='Password'][@class='form-control']";
        this._loginButton = "//button[@id='logIn'][@class='btn btn-primary btn-block']";
        this._register = "//div[@class='row']/button[@type='button']";
        this.PE = protractor_1.protractor.ExpectedConditions;
    }
    elementOfRegiter() {
        return protractor_1.element(protractor_1.by.xpath(this._register));
    }
    loginButtonElement() {
        return protractor_1.element(protractor_1.by.xpath(this._loginButton));
    }
    loginSuccesful(user) {
        return __awaiter(this, void 0, void 0, function* () {
            general_1.General.printDescribe("Login");
            yield protractor_1.element(protractor_1.by.xpath(this._usernameFiled)).sendKeys(user.getUsername());
            yield protractor_1.element(protractor_1.by.xpath(this._passwordField)).sendKeys(user.getPassWord());
            yield protractor_1.element(protractor_1.by.xpath(this._loginButton)).click();
            return yield new manage_test_page_1.ManageTestPage();
        });
    }
    gotoRegisterPage() {
        return __awaiter(this, void 0, void 0, function* () {
            general_1.General.printDescribe("go to register page");
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(this.elementOfRegiter()), 10000, "element take to long to response");
                yield protractor_1.element(protractor_1.by.xpath(this._register)).click();
                return new register_page_1.RegisterPage();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=login-page.js.map