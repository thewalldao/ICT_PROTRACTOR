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
exports.LGReporter = exports.TestSuiteResultInfo = exports.LGReportTestCaseTempResult = exports.TestCaseResultInfo = exports.EnvironmentTest = exports.ItemType = void 0;
const lg_hook_1 = require("@Utilities/new-report/lg-hook");
const error_wrapper_1 = require("@Utilities/protractor-wrappers/error-wrapper");
const protractor_1 = require("protractor");
var ItemType;
(function (ItemType) {
    ItemType["suite"] = "suite";
    ItemType["spec"] = "spec";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
class EnvironmentTest {
    constructor() {
        this.browserVersion = "";
        this.platform = "";
        this.browserName = "";
    }
    setValue() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let capsPromise = yield protractor_1.browser.getCapabilities();
                this.browserVersion = capsPromise.get("browserVersion");
                this.browserName = capsPromise.get("browserName");
                this.platform = capsPromise.get("platformName");
            }
            catch (err) {
            }
            return this;
        });
    }
}
exports.EnvironmentTest = EnvironmentTest;
class TestCaseResultInfo {
    constructor(result) {
        this.id = "";
        this.fullName = "";
        this.testCaseID = "";
        this.testCaseSummary = "";
        this.failedExpectation = "";
        this.passedExpectation = [];
        this.pendingReason = "";
        this.status = "";
        this.startTime = "";
        this.endTime = "";
        this.errorPictureName = "";
        this.id = result.id;
        this.fullName = result.fullName;
        this.testCaseID = this.getTestCaseID(result.description);
        this.testCaseSummary = this.getTestCaseSummary(result.description);
        this.pendingReason = result.pendingReason;
        this.status = result.status;
        this.failedExpectation = this.getError(result.failedExpectations);
        this.passedExpectation = this.getPassedExpectations(result.passedExpectations);
        this.startTime = LGReportTestCaseTempResult.timeSpecStartXray;
        this.endTime = LGReportTestCaseTempResult.timeSpecEndXray;
        this.errorPictureName = LGReportTestCaseTempResult.errorPictureName;
    }
    getTestCaseID(testCaseDescription) {
        let testCaseDescriptionArray = testCaseDescription.split(" ");
        return testCaseDescriptionArray[0].trim();
    }
    getTestCaseSummary(testCaseDescription) {
        let testCaseDescriptionArray = testCaseDescription.split(" ");
        return testCaseDescription.substring(testCaseDescriptionArray[0].trim().length + 2).trim();
    }
    getError(failedExpectations) {
        return failedExpectations.length > 0 ? failedExpectations[0].message : "";
    }
    getPassedExpectations(passedExpectations) {
        let listPassedExpectations = [];
        for (let x = 0; x < passedExpectations.length; x++) {
            listPassedExpectations.push(passedExpectations[x].message);
        }
        return listPassedExpectations;
    }
}
exports.TestCaseResultInfo = TestCaseResultInfo;
class LGReportTestCaseTempResult {
    static setTimeSuiteStart() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeSuiteStartXray = this.getTimeForJira();
        });
    }
    static setTimeSpecStart() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeSpecStartXray = this.getTimeForJira();
        });
    }
    static setTimeSuiteFinish() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeSuiteEndXray = this.getTimeForJira();
        });
    }
    static setTimeSpecFinish() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.timeSpecEndXray = this.getTimeForJira();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.setTimeSpecFinish, err.message);
            }
        });
    }
    static setTimeStart() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.timeRun == 0) {
                this.timeRun = (new Date()).getTime();
            }
        });
    }
    static setTimeEnd() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeFinish = (new Date()).getTime();
        });
    }
    static getTimeForJira() {
        try {
            let toDay = new Date();
            let offset = -toDay.getTimezoneOffset();
            toDay.setHours(toDay.getHours() - offset / 60);
            let tzo = -toDay.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
                var norm = Math.floor(Math.abs(num));
                return (norm < 10 ? '0' : '') + norm;
            };
            return toDay.getFullYear() + '-' + pad(toDay.getMonth() + 1) + '-' + pad(toDay.getDate()) + 'T' + pad(toDay.getHours()) + ':' + pad(toDay.getMinutes()) + ':' + pad(toDay.getSeconds()) + dif + pad(tzo / 60) + ':' + pad(tzo % 60);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getTimeForJira, err.message);
        }
    }
}
exports.LGReportTestCaseTempResult = LGReportTestCaseTempResult;
LGReportTestCaseTempResult.timeSuiteStartXray = "";
LGReportTestCaseTempResult.timeSuiteEndXray = "";
LGReportTestCaseTempResult.timeSpecStartXray = "";
LGReportTestCaseTempResult.timeSpecEndXray = "";
LGReportTestCaseTempResult.timeRun = 0;
LGReportTestCaseTempResult.timeFinish = 0;
LGReportTestCaseTempResult.errorPictureName = "";
class TestSuiteResultInfo {
    constructor(result) {
        this.id = "";
        this.fullName = "";
        this.failedExpectation = [];
        this.status = "";
        this.startTime = "";
        this.endTime = "";
        this.testCasesInSuite = [];
        this.id = result.id;
        this.fullName = result.fullName;
        this.status = result.status;
        this.failedExpectation = result.failedExpectations;
        this.startTime = LGReportTestCaseTempResult.timeSuiteStartXray;
        this.endTime = LGReportTestCaseTempResult.timeSuiteEndXray;
    }
}
exports.TestSuiteResultInfo = TestSuiteResultInfo;
class LGReporter {
    constructor() {
        this.allTestCase = [];
        this.allSuite = [];
        this.startTime = new Date();
        this.endTime = new Date();
    }
    specDone(result) {
        let testCase = new TestCaseResultInfo(result);
        this.allTestCase.push(testCase);
    }
    suiteDone(result) {
        let suite = new TestSuiteResultInfo(result);
        suite.testCasesInSuite = this.allTestCase;
        lg_hook_1.LGReportConfig.allSuite.push(suite);
        this.allTestCase = [];
    }
    jasmineDone() {
    }
}
exports.LGReporter = LGReporter;
//# sourceMappingURL=lg-reporter.js.map