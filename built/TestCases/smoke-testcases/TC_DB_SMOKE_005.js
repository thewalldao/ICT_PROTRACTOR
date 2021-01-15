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
const testbase_1 = require("@testcases/testbase");
describe('navigate between pages', function () {
    testbase_1.testBase();
    it(General_1.General.printBox('Verify that user is navigated to "Test results" page and latest test result displayed'), () => __awaiter(this, void 0, void 0, function* () {
        let username = Constant_1.Login.ADMIN;
        let password = Constant_1.Login.ADMINPASS;
        let user = new User_1.default(username, password);
        let browserName1 = Constant_2.BrowserName.CHROME;
        let custerName1 = cluster_1.ClusterID.TO31;
        let testName1 = "CXone Sanity";
        let browserName2 = Constant_2.BrowserName.CHROME;
        let custerName2 = cluster_1.ClusterID.TO32;
        let testName2 = "CXone Sanity";
        let testNameWithBrowserAndCluster1 = `${testName1} - ${custerName1} - ${browserName1}`;
        let testNameWithBrowserAndCluster2 = `${testName2} - ${custerName2} - ${browserName2}`;
        let loginPage = new login_page_1.default();
        let dashBoard = yield loginPage.loginSuccesful(user);
        let reportingPage = yield dashBoard.gotoReportingPage();
        yield reportingPage.waitingForLoadingDisapear(40, 10);
        yield reportingPage.selectTestToReport(testNameWithBrowserAndCluster1, custerName1, false, 1);
        yield reportingPage.selectTestToReport(testNameWithBrowserAndCluster2, custerName2, false, 2);
        let checkError1 = yield reportingPage.checkReportDisplayCorrectly(browserName1, custerName1, 1);
        let checkError2 = yield reportingPage.checkReportDisplayCorrectly(browserName2, custerName2, 2);
        if (checkError1.length !== 0) {
            checkError1.forEach(element => {
                console.log(element);
            });
            throw new Error("Reporting 1 displayed not correctly");
        }
        if (checkError2.length !== 0) {
            checkError2.forEach(element => {
                console.log(element);
            });
            throw new Error("Reporting 2 displayed not correctly");
        }
    }));
});
//# sourceMappingURL=TC_DB_SMOKE_005.js.map