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
const protractor_1 = require("protractor");
class Dashboard {
    constructor() {
        this._manageTestsPage = "//li[@id='manageTest']";
        this._testResultPage = "//li[@id='testResults']";
        this._reportingPage = "//li[@id='reporting']";
        this._uiPerformanceTestPage = "//li[@id='uiPerformanceTest']";
        this._administratorPage = "//li[@id='administration']";
        this._userProfile = "//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span";
        this._title = "//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]";
        this._loadingpage = "//div[@class='loader']";
        this._helloUser = "//li[@class='nav-item dropdown nav-item-highlight'] //a[@id='navbardrop']";
        this.PE = protractor_1.protractor.ExpectedConditions;
    }
    elementOfTitle() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]"));
    }
    loadingElement() {
        return protractor_1.element(protractor_1.by.xpath(this._loadingpage));
    }
    elememtOfHelloUser() {
        return protractor_1.element(protractor_1.by.xpath(this._helloUser));
    }
    gotoManageTestPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(this._manageTestsPage)).click();
        });
    }
    gotoTestResultPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(this._testResultPage)).click();
        });
    }
    gotoReportingPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(this._reportingPage)).click();
        });
    }
    gotoUiPerformancePage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.xpath(this._uiPerformanceTestPage)).click();
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