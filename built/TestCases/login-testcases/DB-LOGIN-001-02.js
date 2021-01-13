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
const protractor_1 = require("protractor");
const General_1 = require("@Utilities/General");
const Constant_1 = require("@Utilities/Constant");
const login_page_1 = __importDefault(require("@page-objects/login-page"));
const User_1 = __importDefault(require("@page-objects/User"));
describe('Login Test', function () {
    let loginPage = new login_page_1.default();
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http://192.168.171.141/');
    }));
    it(General_1.General.printBox('TC001-01 Verify that user cannot login into Dashboard with blank password'), () => __awaiter(this, void 0, void 0, function* () {
        let username = Constant_1.Login.ADMIN;
        let password = "";
        let user = new User_1.default(username, password);
        let loginPage = new login_page_1.default();
        yield loginPage.loginError(user);
        expect(yield loginPage.getErrorFeedBack()).toEqual("Please enter password.", "error feedback is not match");
    }));
});
//# sourceMappingURL=DB-LOGIN-001-02.js.map