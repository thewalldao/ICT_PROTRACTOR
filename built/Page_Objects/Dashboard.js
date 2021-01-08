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
const Constant_1 = require("@Utilities/Constant");
const General_1 = require("@Utilities/General");
const element_wrapper_1 = __importDefault(require("@Utilities/protractor-wrappers/element-wrapper"));
const protractor_1 = require("protractor");
class Dashboard {
    constructor() {
        this.elemanageTestsPage = new element_wrapper_1.default(protractor_1.by.xpath("//li[@id='manageTest']"));
        this.eletestResultPage = new element_wrapper_1.default(protractor_1.by.xpath("//li[@id='testResults']"));
        this.elereportingPage = new element_wrapper_1.default(protractor_1.by.xpath("//li[@id='reporting']"));
        this.eleuiPerformanceTestPage = new element_wrapper_1.default(protractor_1.by.xpath("//li[@id='uiPerformanceTest']"));
        this.eleadministratorPage = "//li[@id='administration']";
        this._title = "//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]";
        this._loadingpage = "//div[@class='loader']";
        this._helloUser = "//li[@class='nav-item dropdown nav-item-highlight'] //a[@id='navbardrop']";
        this._profileDropdown = "//li[@class='nav-item dropdown nav-item-highlight show'] //div[@class='dropdown-menu dropdown-menu-right show']";
        this.PE = protractor_1.protractor.ExpectedConditions;
        this.dasboardlink = Constant_1.InContactLink.LOCAL + Constant_1.Middle_Link.MIDDLE_LINK;
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
            General_1.General.printDescribe("go to manage test page");
            yield this.elemanageTestsPage.waitForVisibilityOfCustom(10, 5, "Manage Test Page tab");
            yield this.elemanageTestsPage.click();
            let ManageTestPage = require("./manage-test-page").default;
            return ManageTestPage.getInstance();
        });
    }
    gotoTestResultPage() {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("go to test result page");
            yield this.eletestResultPage.waitForVisibilityOfCustom(10, 5, "Test Result Page tab");
            yield this.eletestResultPage.click();
            let TestResultsPage = require("./test-result-page").default;
            return TestResultsPage.getInstance();
        });
    }
    gotoReportingPage() {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("go to reporting page");
            yield this.elereportingPage.waitForVisibilityOfCustom(10, 5, "Reporting Page tab");
            yield this.elereportingPage.click();
            let ReportingPage = require("./reporting-page").default;
            return ReportingPage.getInstance();
        });
    }
    gotoUiPerformancePage() {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("go to Ui performance page");
            yield this.eleuiPerformanceTestPage.waitForVisibilityOfCustom(10, 5, "UI Performance Page Tab");
            yield this.eleuiPerformanceTestPage.click();
            let UiPerformanceTestPage = require("./uiperformance-testcase-page").default;
            return UiPerformanceTestPage.getInstance();
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
            yield protractor_1.browser.wait(this.PE.visibilityOf(this.elementOfTitle()), 100000, 'Element taking too long to appear');
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
exports.default = Dashboard;
//# sourceMappingURL=dashboard.js.map