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
const Constant_1 = require("@utilities/Constant");
describe('Login Test', function () {
    let loginPage = new login_page_1.LoginPage();
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http://192.168.171.141/');
        yield protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
    }));
    it(general_1.General.printBox('TC001-01 Verify that user cannot login into Dashboard with blank username'), () => __awaiter(this, void 0, void 0, function* () {
        let username = Constant_1.Login.ADMIN;
        let password = "";
        let user = new User_1.User(username, password);
        let loginPage = new login_page_1.LoginPage();
        yield loginPage.loginError(user);
        expect(yield loginPage.getErrorFeedBack()).toEqual("Please enter password.", "error feedback is not match");
    }));
});
//# sourceMappingURL=DB_LOGIN_001_02.js.map