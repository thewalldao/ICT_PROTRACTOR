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
require("module-alias/register");
const login_page_1 = __importDefault(require("@page-objects/login-page"));
const User_1 = __importDefault(require("@page-objects/User"));
const General_1 = require("@Utilities/General");
const protractor_1 = require("protractor");
describe('Register Test', function () {
    let loginPage = new login_page_1.default();
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http://192.168.171.141/');
        let window = yield protractor_1.browser.getWindowHandle();
        yield protractor_1.browser.driver.switchTo().window(window);
    }));
    it(General_1.General.printBox('TC001-05 - Verify that user cannot register account length less than 8 characters'), () => __awaiter(this, void 0, void 0, function* () {
        let username = General_1.General.makeUserName(7);
        let password = General_1.General.makeRandomChar(true, true, true, true) + General_1.General.randomLowerCharString(3);
        let email = General_1.General.randomEmail(10);
        let user = new User_1.default(username, password, password, email);
        let registerPage = yield loginPage.gotoRegisterPage();
        yield registerPage.regiterAccountError(user);
        expect(yield registerPage.passwordLessThanEightCharErrorDisplay()).toEqual("contains at least 8 characters", "error message is not match");
    }));
});
//# sourceMappingURL=register-TC001-05.js.map