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
const General_1 = require("@Utilities/General");
const Constant_1 = require("@Utilities/Constant");
const User_1 = __importDefault(require("@page-objects/User"));
const login_page_1 = __importDefault(require("@page-objects/login-page"));
const manage_test_page_1 = __importDefault(require("@page-objects/manage-test-page"));
const browser_wrapper_1 = __importDefault(require("@Utilities/protractor-wrappers/browser-wrapper"));
describe('guideline test', function () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield browser_wrapper_1.default.waitForAngularEnabled(false);
        yield browser_wrapper_1.default.get('http://192.168.171.141/');
    }));
    it(General_1.General.printBox('TC-01 - Verify that main flow of guideline on Manage Tests page displayed correctly'), () => __awaiter(this, void 0, void 0, function* () {
        let username = Constant_1.Login.ADMIN;
        let password = Constant_1.Login.ADMINPASS;
        let user = new User_1.default(username, password);
        let loginPage = new login_page_1.default();
        let dashBoard = yield loginPage.loginSuccesful(user);
        yield dashBoard.gotoManageTestPage();
        let manageTestPage = new manage_test_page_1.default();
        yield manageTestPage.clickHelpButton();
        console.log(yield manageTestPage.elementSyncTestText.getText());
        console.log(yield manageTestPage.elementEditTabText.getText());
    }));
});
//# sourceMappingURL=TC_DB_GL_MT_001.js.map