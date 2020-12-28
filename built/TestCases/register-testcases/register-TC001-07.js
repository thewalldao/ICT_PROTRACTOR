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
const login_page_1 = require("../../Page_Objects/login-page");
const User_1 = require("../../Page_Objects/User");
const protractor_1 = require("protractor");
const general_1 = require("../../Utilities/general");
describe('Register Test', function () {
    let loginPage = new login_page_1.LoginPage();
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http://192.168.171.141/');
        yield protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
    }));
    it(general_1.General.printBox('TC001-07 - Verify that user cannot register account with blank username'), () => __awaiter(this, void 0, void 0, function* () {
        let username = '';
        let password = general_1.General.makeRandomChar(true, true, true, true) + general_1.General.randomLowerCharString(5);
        let email = general_1.General.randomEmail(10);
        let user = new User_1.User(username, password, password, email);
        let registerPage = yield loginPage.gotoRegisterPage();
        yield registerPage.regiterAccountError(user);
        expect(yield registerPage.elementOfUsernameFieldErrorDisplay()).toBe(true, "username box did not show error");
    }));
});
//# sourceMappingURL=register-TC001-07.js.map