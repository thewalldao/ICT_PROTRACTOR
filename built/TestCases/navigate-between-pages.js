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
const protractor_1 = require("protractor");
const Constant_1 = require("../Utilities/Constant");
const User_1 = require("../Page_Objects/User");
const login_page_1 = require("../Page_Objects/login-page");
describe('Navigate Between Pages', function () {
    let user = new User_1.User(Constant_1.Login.ADMIN, Constant_1.Login.ADMINPASS);
    let loginPage = new login_page_1.LoginPage();
    let managePage;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http://192.168.171.141/');
        yield protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
    }));
    it('TC01 - Navigate Between Pages', () => __awaiter(this, void 0, void 0, function* () {
        managePage = yield loginPage.loginSuccesful(user);
        expect(yield managePage.hiUser(user)).toEqual(`Hi, ${Constant_1.Login.ADMIN}`, "Message is not like expect");
    }));
});
//# sourceMappingURL=navigate-between-pages.js.map