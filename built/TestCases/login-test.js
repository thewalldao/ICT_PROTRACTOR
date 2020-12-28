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
const user_1 = require("../Page_Objects/user");
const protractor_1 = require("protractor");
const login_page_1 = require("../Page_Objects/login-page");
const Constant_1 = require("../Utilities/Constant");
describe('Login Test', function () {
    let user = new user_1.User(Constant_1.Login.ADMIN, Constant_1.Login.ADMINPASS);
    let longinPage = new login_page_1.LoginPage();
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://192.168.171.141/');
    }));
    it('TC1 User Login successfull', () => __awaiter(this, void 0, void 0, function* () {
        let managePage = yield longinPage.loginSuccesful(user);
        yield managePage.hiUser(user);
    }));
});
//# sourceMappingURL=login-test.js.map