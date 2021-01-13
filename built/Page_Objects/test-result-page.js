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
const General_1 = require("@Utilities/General");
const element_wrapper_1 = __importDefault(require("@Utilities/protractor-wrappers/element-wrapper"));
const protractor_1 = require("protractor");
const dashboard_1 = __importDefault(require("./dashboard"));
class TestResultsPage extends dashboard_1.default {
    constructor() {
        super(...arguments);
        this._ResultTestNameWithCluserAndBrowser = "//app-test-results-single//div[contains(@class,'justify-content-center')]//h3";
        this.elementTestNameSearching = new element_wrapper_1.default(protractor_1.by.xpath("//input[@id='suiteName']"));
        this.elementDateRangeSearching = new element_wrapper_1.default(protractor_1.by.xpath("//input[@id='dateRange']"));
        this.elementSearchButton = new element_wrapper_1.default(protractor_1.by.xpath("//button[@id='btnGo']"));
        this.elementTestBrowserInfo = new element_wrapper_1.default(protractor_1.by.xpath("//span[contains(text(),'Browser')]/../following-sibling::div"));
        this.elementTestCusterInfo = new element_wrapper_1.default(protractor_1.by.xpath("//span[contains(text(),'Cluster')]/../following-sibling::div"));
        this.elementTestNumberInfo = new element_wrapper_1.default(protractor_1.by.xpath("//span[contains(text(),'Test number')]/../following-sibling::div"));
        this.elementTestAgentInfo = new element_wrapper_1.default(protractor_1.by.xpath("//span[contains(text(),'Test Agent')]/../following-sibling::div"));
        this.elementTestDurationInfo = new element_wrapper_1.default(protractor_1.by.xpath("//span[contains(text(),'Duration')]/../following-sibling::div"));
        this.elementTestPassRateInfo = new element_wrapper_1.default(protractor_1.by.xpath("//span[contains(text(),'Pass Rate')]/../following-sibling::div"));
        this.elementTotalTestNumber = new element_wrapper_1.default(protractor_1.by.xpath("//div[.='Total']/preceding-sibling::div//div[@class='count']"));
        this.elementPassedTestNumber = new element_wrapper_1.default(protractor_1.by.xpath("//div[.='Passed']/preceding-sibling::div//div[@class='count']"));
        this.elementFailedTestNumber = new element_wrapper_1.default(protractor_1.by.xpath("//div[.='Failed']/preceding-sibling::div//div[@class='count']"));
        this.elementFailedByBugTestNumber = new element_wrapper_1.default(protractor_1.by.xpath("//div[.='Failed By Bug']/preceding-sibling::div//div[@class='count']"));
    }
    static getInstance() {
        this.testResultPage = new TestResultsPage();
        return this.testResultPage;
    }
    isLastestTestResultDisplay(testNameWithCluserAndBrowser = "") {
        return __awaiter(this, void 0, void 0, function* () {
            if (testNameWithCluserAndBrowser !== "") {
                return yield protractor_1.element(protractor_1.by.xpath("//app-test-results-single//div[contains(@class,'justify-content-center')]//h3[.='" + testNameWithCluserAndBrowser + "']")).isDisplayed();
            }
            else {
                return yield protractor_1.element(protractor_1.by.xpath(this._ResultTestNameWithCluserAndBrowser)).isDisplayed();
            }
        });
    }
    searchTest(testNameWithBrowserAndCluster, dateRange = "Latest") {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("searching test");
            yield this.elementTestNameSearching.sendKeys(testNameWithBrowserAndCluster);
            yield this.elementDateRangeSearching.sendKeys(dateRange);
            yield this.elementSearchButton.click();
            return this;
        });
    }
    checkTotalTestEqualPassMinusFail() {
        return __awaiter(this, void 0, void 0, function* () {
            let total = Number(yield this.elementTotalTestNumber.getText());
            let passedMinusFailed = Number(yield this.elementPassedTestNumber.getText()) + (Number(yield this.elementFailedTestNumber.getText()) + Number(yield this.elementFailedByBugTestNumber.getText()));
            if (total === passedMinusFailed) {
                return true;
            }
            else {
                console.log(`total: ${total} - passed minus failed: ${passedMinusFailed}`);
                return false;
            }
        });
    }
    checkPassRateCorrectly() {
        return __awaiter(this, void 0, void 0, function* () {
            let passRate = yield this.elementTestPassRateInfo.getText();
            let calculatePassRate = `${((Number(yield this.elementPassedTestNumber.getText()) * 100) / Number(yield this.elementTotalTestNumber.getText()))}%`;
            if (passRate === calculatePassRate) {
                return true;
            }
            else {
                console.log(`pass rate: ${passRate} - calculate passrate: ${calculatePassRate}`);
                return false;
            }
        });
    }
    checkTestResultDisplayCorrectly(testInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let error = [];
            if ((yield this.elementTestBrowserInfo.getText()) !== testInfo.getBrowser()) {
                error.push("Browser is not correct");
            }
            if ((yield this.elementTestCusterInfo.getText()) !== testInfo.getCluster()) {
                error.push("Cluter is not correct");
            }
            if (!(yield this.checkTotalTestEqualPassMinusFail())) {
                error.push("Total test is not equal Passed test minus Failed test");
            }
            if (!(yield this.checkPassRateCorrectly())) {
                error.push("Pass Rate is not correct");
            }
            if (!(yield this.elementTestDurationInfo.isDisplayed())) {
                error.push("Test Duration Info is not display");
            }
            if (!(yield this.elementTestAgentInfo.isDisplayed())) {
                error.push("Test Agent Info is not display");
            }
            if (!(yield this.elementTestNumberInfo.isDisplayed())) {
                error.push("Test Number Info is not display");
            }
            return error;
        });
    }
}
exports.default = TestResultsPage;
TestResultsPage.testResultPage = null;
//# sourceMappingURL=test-result-page.js.map