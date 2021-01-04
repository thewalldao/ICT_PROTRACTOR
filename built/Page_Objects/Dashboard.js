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
exports.Dashboard = void 0;
const general_1 = require("@Utilities/general");
const protractor_1 = require("protractor");
class Dashboard {
    constructor() {
        this._manageTestsPage = "//li[@id='manageTest']";
        this._testResultPage = "//li[@id='testResults']";
        this._reportingPage = "//li[@id='reporting']";
        this._uiPerformanceTestPage = "//li[@id='uiPerformanceTest']";
        this._administratorPage = "//li[@id='administration']";
        this._title = "//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]";
        this._loadingpage = "//div[@class='loader']";
        this._helloUser = "//li[@class='nav-item dropdown nav-item-highlight'] //a[@id='navbardrop']";
        this._profileDropdown = "//li[@class='nav-item dropdown nav-item-highlight show'] //div[@class='dropdown-menu dropdown-menu-right show']";
        this.PE = protractor_1.protractor.ExpectedConditions;
    }
    elementOfTitle() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]"));
    }
    elementOfDropdown() {
        return protractor_1.element(this._profileDropdown);
    }
    loadingElement() {
        return protractor_1.element(protractor_1.by.xpath(this._loadingpage));
    }
    elememtOfHelloUser() {
        return protractor_1.element(protractor_1.by.xpath(this._helloUser));
    }
    gotoManageTestPage() {
        return __awaiter(this, void 0, void 0, function* () {
            general_1.General.printDescribe("go to manage test page");
            general_1.General.isElementVisibleOf(this._testResultPage, 10000, "test result tab is not display");
            yield protractor_1.element(protractor_1.by.xpath(this._testResultPage)).click();
            return this;
        });
    }
    gotoTestResultPage() {
        return __awaiter(this, void 0, void 0, function* () {
            general_1.General.printDescribe("go to test result page");
            general_1.General.isElementVisibleOf(this._testResultPage, 10000, "test result tab is not display");
            yield protractor_1.element(protractor_1.by.xpath(this._testResultPage)).click();
            return this;
        });
    }
    gotoReportingPage() {
        return __awaiter(this, void 0, void 0, function* () {
            general_1.General.printDescribe("go to reporting page");
            general_1.General.isElementVisibleOf(this._reportingPage, 10000, "reporting tab is not display");
            yield protractor_1.element(protractor_1.by.xpath(this._reportingPage)).click();
            return this;
        });
    }
    gotoUiPerformancePage() {
        return __awaiter(this, void 0, void 0, function* () {
            general_1.General.printDescribe("go to Ui performance page");
            general_1.General.isElementVisibleOf(this._uiPerformanceTestPage, 10000, "performance page tab is not display");
            yield protractor_1.element(protractor_1.by.xpath(this._uiPerformanceTestPage)).click();
            return this;
        });
    }
    elementOfUserOption(str) {
        return protractor_1.element(protractor_1.by.xpath(`//li[@class='nav-item dropdown nav-item-highlight show'] //div[@class='dropdown-menu dropdown-menu-right show']//a[contains(.,'${str}')]`));
    }
    selectUserOption(str) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.elementOfDropdown().isDisplayed()) {
                yield this.elememtOfHelloUser().click();
                yield this.elementOfUserOption(str).click();
            }
            else {
                yield this.elementOfUserOption(str).click();
            }
        });
    }
    elementIsClickable(ele) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield protractor_1.browser.wait(this.PE.elementToBeClickable(ele), 20000, "This element can not clickable");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.PE.presenceOf(this.elementOfTitle()), 100000, 'Element taking too long to appear');
            return this.elementOfTitle().getText();
        });
    }
    hiUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(this.elememtOfHelloUser()), 10000, "element take to long to response");
                return yield this.elememtOfHelloUser().getText();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.js.map