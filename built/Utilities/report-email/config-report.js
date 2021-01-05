"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigReport = void 0;
const project_path_1 = __importDefault(require("@test-data/general/project-path"));
const jasmine_reporters_1 = __importDefault(require("jasmine-reporters"));
const utility_1 = require("@Utilities/general/utility");
class ConfigReport {
    static createXMLReport() {
        jasmine.getEnv().addReporter(new jasmine_reporters_1.default.JUnitXmlReporter({
            consolidateAll: true,
            savePath: `${project_path_1.default.conf}/test/reports`,
            filePrefix: 'xmlresults'
        }));
    }
    static reportSetupConfig() {
        ConfigReport.specNumber++;
        ConfigReport.checkErrorPic = true;
        if (ConfigReport.specNumber < 1) {
            var mkdirp = require('mkdirp');
            mkdirp(`${project_path_1.default.conf}/test/reports/screenshots`, function (err) {
            });
        }
    }
    static getBugErrorMessage(testCaseI, errorMess = "") {
        let configFile = `src/test-data/bug-data/bug-data.json`;
        let jsonPath = utility_1.Utility.getPath(configFile);
        let data = require(jsonPath);
        for (let dataBug of data) {
            let data = dataBug.Data;
            for (let b = 0; b < data.length; b++) {
                let testCaseIDs = data[b].TestcaseID;
                let testcaseErrors = data[b].TestcaseError;
                for (let a = 0; a < testCaseIDs.length; a++) {
                    if (testCaseIDs[a] == testCaseI) {
                        if (errorMess != "") {
                            if (testCaseIDs[a] == "IC-65937") {
                                console.log("Log: IC-65937");
                            }
                            for (let c = 0; c < testcaseErrors.length; c++) {
                                if (errorMess.indexOf(testcaseErrors[c]) > -1) {
                                    if (testCaseIDs[a] == "IC-65937") {
                                        console.log(`Log: IC-65937 Bug: ${dataBug}`);
                                    }
                                    return `Failed by Bug: ${dataBug.BugIdJira} - ${dataBug.BugDescription}`;
                                }
                            }
                        }
                    }
                }
            }
        }
        return "";
    }
}
exports.ConfigReport = ConfigReport;
ConfigReport.pushResultToXray = false;
ConfigReport.specNumber = -1;
ConfigReport.checkErrorPic = true;
ConfigReport.listTestCaseResult = [];
ConfigReport.listJenkinsTestCase = [];
ConfigReport.listTestCaseID = [];
ConfigReport.listReportStatus = [];
ConfigReport.listNotAssociatedTestCase = [];
ConfigReport.listAssociatedTestCase = [];
//# sourceMappingURL=config-report.js.map