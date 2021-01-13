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
const Constant_2 = require("@Utilities/Constant");
const cluster_1 = require("@data-objects/general/cluster");
const test_info_1 = __importDefault(require("@data-objects/general/test-info"));
const testbase_1 = require("@testcases/testbase");
describe('navigate between pages', function () {
    testbase_1.testBase();
    it(General_1.General.printBox('Verify that user is navigated to "Test results" page and latest test result displayed'), () => __awaiter(this, void 0, void 0, function* () {
        let username = Constant_1.Login.ADMIN;
        let password = Constant_1.Login.ADMINPASS;
        let user = new User_1.default(username, password);
        let browserName = Constant_2.BrowserName.CHROME;
        let custerName = cluster_1.ClusterID.TO31;
        let testName = "CXone Sanity";
        let testNameWithBrowserAndCluster = `${testName} - ${custerName} - ${browserName}`;
        let dateRange = "Latest";
        let testInfo = new test_info_1.default(browserName, custerName, testName);
        let loginPage = new login_page_1.default();
        let dashBoard = yield loginPage.loginSuccesful(user);
        let testResultPage = yield dashBoard.gotoTestResultPage();
        yield testResultPage.waitingForElementTitleVisible(20, 10);
        yield testResultPage.checkElementWrapperNotEmptyText();
        yield testResultPage.waitingForLoadingDisapear(40, 5);
        yield testResultPage.searchTest(testNameWithBrowserAndCluster);
        yield testResultPage.waitingForLoadingDisapear(40, 5);
        expect(yield testResultPage.isLastestTestResultDisplay(testNameWithBrowserAndCluster)).toBe(true, "test result is not display");
        let errorList = yield testResultPage.checkTestResultDisplayCorrectly(testInfo);
        if (errorList.length !== 0) {
            errorList.forEach(element => {
                console.log(element);
            });
            throw new Error("Test result displayed not correctly");
        }
    }));
});
//# sourceMappingURL=TC_DB_SMOKE_004.js.map