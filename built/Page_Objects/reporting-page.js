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
const error_wrapper_1 = require("@Utilities/protractor-wrappers/error-wrapper");
const protractor_1 = require("protractor");
const dashboard_1 = __importDefault(require("./dashboard"));
class ReportingPage extends dashboard_1.default {
    constructor() {
        super(...arguments);
        this.divOverlay = new element_wrapper_1.default(protractor_1.by.xpath("//div[contains(@id,'cdk-overlay')]"));
    }
    static getInstance() {
        this.reportingPage = new ReportingPage();
        return this.reportingPage;
    }
    inputTestNameWithClusterAndBrowser(testName, number = "last()") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let txtTestName = new element_wrapper_1.default(protractor_1.by.xpath((`(//input[@id='txtTestName'])[${number}]`)));
                yield txtTestName.sendKeys(testName);
            }
            catch (error) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.inputTestNameWithClusterAndBrowser, error.message);
            }
        });
    }
    inputCluster(cluserName, number = "last()") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let txtCluster = new element_wrapper_1.default(protractor_1.by.xpath((`(//input[@id='txtCluster'])[${number}]`)));
                yield txtCluster.sendKeys(cluserName);
            }
            catch (error) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.inputCluster, error.message);
            }
        });
    }
    addNewTest(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let btnAddNewTest = new element_wrapper_1.default(protractor_1.by.xpath(`(//button[@class = 'btn btn-success btn-small-icon add-test-selection'])[${number}]`));
        });
    }
    selectExeTime(number = "last()", clickTimeout = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let mat_selectExeTime = new element_wrapper_1.default(protractor_1.by.xpath((`(//mat-select[@id = 'ddlDate'])[${number}]`)));
                yield mat_selectExeTime.click(clickTimeout);
                yield this.divOverlay.waitUntilDisappear(20);
                yield this.selectMatOption(number, clickTimeout);
            }
            catch (error) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.selectExeTime, error.message);
            }
        });
    }
    selectMatOption(number = 1, clickTimeout = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let mat_selectMatOption = new element_wrapper_1.default(protractor_1.by.xpath((`(//span[@class='mat-option-text'])[${number}]`)));
                yield mat_selectMatOption.click(clickTimeout);
            }
            catch (error) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.selectExeTime, error.message);
            }
        });
    }
    selectTestToReport(testNameWithClusterAndBrowser, clusterName, addNewTest = true, number = "last()") {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("select test to report");
            yield this.inputTestNameWithClusterAndBrowser(testNameWithClusterAndBrowser, number);
            yield this.inputCluster(clusterName, number);
            yield this.selectExeTime(number, 1);
            if (addNewTest) {
                yield this.addNewTest(number);
            }
        });
    }
    passTestStatistic(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let passTestStatistic = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic']//span[@class='text-passed'])[${number}]`));
            let passtest = yield passTestStatistic.getText();
            let passtestNum = Number((passtest.split(" "))[0]);
            return passtestNum;
        });
    }
    failTestStatistic(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let failTestStatistic = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic']//span[@class='text-failed'])[${number}]`));
            let failtest = yield failTestStatistic.getText();
            let failtestNum = Number((failtest.split(" "))[0]);
            return failtestNum;
        });
    }
    failTestByBugStatistic(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let failTestByBugStatistic = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic']//span[@class='text-failed-by-bug'])[${number}]`));
            let failtestbybug = yield failTestByBugStatistic.getText();
            let failtestbybugNum = Number((failtestbybug.split(" "))[0]);
            return failtestbybugNum;
        });
    }
    testNumberInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfTestNumber = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[1]`));
            return yield elementOfTestNumber.getText();
        });
    }
    testAgentInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfTestAgent = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[2]`));
            return yield elementOfTestAgent.getText();
        });
    }
    clusterInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfCluster = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[3]`));
            return yield elementOfCluster.getText();
        });
    }
    browserInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfbrowser = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[4]`));
            return yield elementOfbrowser.getText();
        });
    }
    gbuTenantInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfGbuTenant = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[5]`));
            return yield elementOfGbuTenant.getText();
        });
    }
    testPlanInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfTestPlan = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[6]`));
            return yield elementOfTestPlan.getText();
        });
    }
    testSetInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfTestSet = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[7]`));
            return yield elementOfTestSet.getText();
        });
    }
    testExecuseInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfTestExecuse = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[8]`));
            return yield elementOfTestExecuse.getText();
        });
    }
    passRateInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfPassRate = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[9]`));
            return yield elementOfPassRate.getText();
        });
    }
    durationInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfDuration = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[10]`));
            return yield elementOfDuration.getText();
        });
    }
    startTimeInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfStartTime = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[11]`));
            return yield elementOfStartTime.getText();
        });
    }
    endTimeInfo(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementOfEndime = new element_wrapper_1.default(protractor_1.by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[12]`));
            return yield elementOfEndime.getText();
        });
    }
    checkPassRateCorrectly(number) {
        return __awaiter(this, void 0, void 0, function* () {
            let totalTest = Number(yield this.passTestStatistic(number)) + Number(yield this.failTestByBugStatistic(number)) + Number(yield this.failTestStatistic(number));
            let calculatePassRate = (Number(yield this.passTestStatistic(number)) * 100) / totalTest;
            if ((yield this.passRateInfo(number)) === `${calculatePassRate}%`) {
                return true;
            }
            else {
                console.log(`pass rate: ${yield this.passRateInfo(number)} - calculate passrate: ${calculatePassRate}`);
                return false;
            }
        });
    }
    checkReportDisplayCorrectly(browser, cluster, number) {
        return __awaiter(this, void 0, void 0, function* () {
            let error = [];
            try {
                if ((yield this.gbuTenantInfo(number)) === "") {
                    error.push(`Test${number} - Gbu\\Tenant info is not correct`);
                }
                if (!(yield this.checkPassRateCorrectly(number))) {
                    error.push(`Test${number} - pass rate info is not correct`);
                }
                if ((yield this.testNumberInfo(number)) === "") {
                    error.push(`Test${number} - test number info is not correct`);
                }
                if ((yield this.testAgentInfo(number)) === "") {
                    error.push(`Test${number} - test agent info is not correct`);
                }
                if ((yield this.clusterInfo(number)) !== cluster) {
                    error.push(`Test${number} - cluster info is not correct`);
                }
                if ((yield this.browserInfo(number)) !== browser) {
                    error.push(`Test${number} - browser info is not correct`);
                }
                if ((yield this.testPlanInfo(number)) === "") {
                    error.push(`Test${number} - test plan info is not correct`);
                }
                if ((yield this.testSetInfo(number)) === "") {
                    error.push(`Test${number} - test set info is not correct`);
                }
                if ((yield this.testExecuseInfo(number)) === "") {
                    error.push(`Test${number} - test execuse info is not correct`);
                }
                if ((yield this.durationInfo(number)) === "") {
                    error.push(`Test${number} - duration info is not correct`);
                }
                if ((yield this.startTimeInfo(number)) === "") {
                    error.push(`Test${number} - start time info is not correct`);
                }
                if ((yield this.endTimeInfo(number)) === "") {
                    error.push(`Test${number} - end time info is not correct`);
                }
                return error;
            }
            catch (error) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.checkReportDisplayCorrectly, error.message);
            }
        });
    }
}
exports.default = ReportingPage;
ReportingPage.reportingPage = null;
//# sourceMappingURL=reporting-page.js.map