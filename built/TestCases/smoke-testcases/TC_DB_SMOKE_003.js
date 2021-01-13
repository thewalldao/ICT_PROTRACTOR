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
const login_page_1 = __importDefault(require("@page-objects/login-page"));
const User_1 = __importDefault(require("@page-objects/User"));
const Constant_1 = require("@Utilities/Constant");
const browser_wrapper_1 = __importDefault(require("@Utilities/protractor-wrappers/browser-wrapper"));
describe('navigate between pages', function () {
    let loginPage = new login_page_1.default();
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield browser_wrapper_1.default.waitForAngularEnabled(false);
        yield browser_wrapper_1.default.get(Constant_1.InContactLink.LOCAL);
    }));
    it(General_1.General.printBox('Verify that user is navigated to "Test results" page and latest test result displayed'), () => __awaiter(this, void 0, void 0, function* () {
        let username = Constant_1.Login.ADMIN;
        let password = Constant_1.Login.ADMINPASS;
        let user = new User_1.default(username, password);
        let loginPage = new login_page_1.default();
        let dashBoard = yield loginPage.loginSuccesful(user);
        let manageTestPage = yield dashBoard.gotoManageTestPage();
        let testResultsPage = yield manageTestPage.clickLastestResultActionOfTestAndGotoTestResultPage();
        yield browser_wrapper_1.default.switchWindowByTitle("Single Test Result");
        yield testResultsPage.waitingForElementTitleVisible(20, 10);
        expect(yield testResultsPage.getTextElementWrapperTitle()).toEqual("Single Test Result", "Message is not like expect");
        expect(yield testResultsPage.isLastestTestResultDisplay()).toBe(true, "lastest test result is not display");
    }));
});
//# sourceMappingURL=TC_DB_SMOKE_003.js.map