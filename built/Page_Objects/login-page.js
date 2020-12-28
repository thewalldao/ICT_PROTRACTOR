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
const manage_test_page_1 = require("./manage-test-page");
const register_page_1 = require("./register-page");
class LoginPage {
    constructor() {
        this._usernameFiled = "//input[@id='Username'][@class='form-control']";
        this._passwordField = "//input[@id='Password'][@class='form-control']";
        this._loginButton = "//button[@id='logIn'][@class='btn btn-primary btn-block']";
        this._register = "//div[@class='row'][@_ngcontent-gom-c7]/button[@type='button']";
    }
    loginButtonElement() {
        return protractor_1.element(protractor_1.by.xpath(this._loginButton));
    }
    loginSuccesful(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(this._usernameFiled)).sendKeys(user.getUsername());
            yield protractor_1.element(protractor_1.by.xpath(this._passwordField)).sendKeys(user.getPassWord());
            yield protractor_1.element(protractor_1.by.xpath(this._loginButton)).click();
            return yield new manage_test_page_1.ManageTestPage();
        });
    }
    gotoRegisterPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(this._register)).click();
            return new register_page_1.RegisterPage();
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=login-page.js.map