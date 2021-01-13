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
    it(General_1.General.printBox('TC001-01 Verify that user can navigate between pages'), () => __awaiter(this, void 0, void 0, function* () {
        let username = Constant_1.Login.ADMIN;
        let password = Constant_1.Login.ADMINPASS;
        let user = new User_1.default(username, password);
        let loginPage = new login_page_1.default();
        let dashBoard = yield loginPage.loginSuccesful(user);
        let manageTestPage = yield dashBoard.gotoManageTestPage();
        expect(yield manageTestPage.getTitle()).toEqual("Manage Tests", "Message is not like expect");
        let testResultsPage = yield manageTestPage.gotoTestResultPage();
        expect(yield testResultsPage.getTitle()).toEqual("Test Result", "Message is not like expect");
        let reportingPage = yield testResultsPage.gotoReportingPage();
        expect(yield reportingPage.getTitle()).toEqual("Reporting", "Message is not like expect");
        let UiPerformanceTestPage = yield reportingPage.gotoUiPerformancePage();
        expect(yield UiPerformanceTestPage.getTitle()).toEqual("UI Performance Test", "Message is not like expect");
    }));
});
//# sourceMappingURL=navigate-between-pages.js.map