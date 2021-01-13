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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const General_1 = require("../Utilities/General");
const dashboard_1 = __importDefault(require("./dashboard"));
const register_page_1 = __importDefault(require("./register-page"));
class LoginPage extends dashboard_1.default {
    constructor() {
        super();
        this._usernameFiled = "//input[@id='Username'][@class='form-control']";
        this._passwordField = "//input[@id='Password'][@class='form-control']";
        this._loginButton = "//button[@id='logIn'][@class='btn btn-primary btn-block']";
        this._register = "//div[@class='row']/button[@type='button']";
        this._errorFeedback = "//div[@class='feedback']//li";
    }
    elementOfRegiter() {
        return protractor_1.element(protractor_1.by.xpath(this._register));
    }
    loginButtonElement() {
        return protractor_1.element(protractor_1.by.xpath(this._loginButton));
    }
    loginSuccesful(user) {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("Login");
            yield protractor_1.element(protractor_1.by.xpath(this._usernameFiled)).sendKeys(user.getUsername());
            yield protractor_1.element(protractor_1.by.xpath(this._passwordField)).sendKeys(user.getPassWord());
            yield protractor_1.element(protractor_1.by.xpath(this._loginButton)).click();
            return yield new dashboard_1.default();
        });
    }
    gotoRegisterPage() {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("go to register page");
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(this.elementOfRegiter()), 10000, "element take to long to response");
                yield protractor_1.element(protractor_1.by.xpath(this._register)).click();
                return new register_page_1.default();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    loginError(user) {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("Login");
            yield protractor_1.element(protractor_1.by.xpath(this._usernameFiled)).sendKeys(user.getUsername());
            yield protractor_1.element(protractor_1.by.xpath(this._passwordField)).sendKeys(user.getPassWord());
            yield protractor_1.element(protractor_1.by.xpath(this._loginButton)).click();
            return this;
        });
    }
    getErrorFeedBack() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.PE.visibilityOf(protractor_1.element(protractor_1.by.xpath("//div[@class='feedback']//li"))), 100000, "element take to long to response");
            return protractor_1.element(protractor_1.by.xpath("//div[@class='feedback']//li")).getText();
        });
    }
    checkElementWrapperNotEmptyText(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = [];
            let i = 0;
            for (let arg of args) {
                (yield arg.getText()).length === 0 && errors.push(arg.getBy());
            }
            return errors;
        });
    }
}
exports.default = LoginPage;
//# sourceMappingURL=login-page.js.map