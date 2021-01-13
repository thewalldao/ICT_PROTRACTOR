import ProjectPath from "@test-data/general/project-path";
import { Utility } from "@Utilities/general/utility";
// import { LGMatchers } from "@utilities/matcher/LGMatchers";
import { EnvironmentTest, LGReporter, LGReportTestCaseTempResult, TestSuiteResultInfo } from "@Utilities/new-report/lg-reporter";
import * as fileSystem from 'fs';
import TestRunInfo from "@data-objects/general/test-run-info";
import { Browser } from "@data-objects/general/platform";

// export class LGReport {

//     private pidOfChromeDrives = [];

//     public async configHook(config?: LGReportConfig): Promise<void> {
//         beforeAll(async () => {
//             await LGReportTestCaseTempResult.setTimeStart();
//             jasmine.addMatchers(LGMatchers);
//             let mkdirp = require('mkdirp');
//             mkdirp(`${ProjectPath.conf}/test/reports/screenshots`, function (err) {
//             });
//         }, 30000);

//         beforeEach(async () => {
//             await LGReportTestCaseTempResult.setTimeSpecStart();
//             await LGReportTestCaseTempResult.setTimeSuiteStart();

//             if (LGReportTestCaseTempResult.errorPictureName != "") {
//                 await Utility.delay(5)
//                 LGReportTestCaseTempResult.errorPictureName = "";
//             }

//             if (TestRunInfo.browser == Browser.CHROME) {

//                 let tasklist = require('tasklist');
//                 let taskList = await tasklist();

//                 for (let value of taskList) {
//                     if (value.imageName == "chromedriver.exe") {
//                         if (!JSON.stringify(this.pidOfChromeDrives).includes(value.pid)) {
//                             this.pidOfChromeDrives.push(value)
//                         }
//                     }
//                 }

//                 if (this.pidOfChromeDrives.length > 1) {
//                     for (let i = 0; i < this.pidOfChromeDrives.length; i++) {
//                         Utility.executeShellCommand(`taskkill /F /PID ${this.pidOfChromeDrives[i].pid}`);
//                         this.pidOfChromeDrives.splice(i, 1)
//                     }
//                 }
//             }

//         }, 30000);

//         afterEach(async () => {
//             if (!fileSystem.existsSync(`${ProjectPath.conf}/test/reports/screenshots/` + LGReportTestCaseTempResult.errorPictureName + '.png')) {
//                 await Utility.delay(5)
//             }

//             await LGReportTestCaseTempResult.setTimeSpecFinish();
//             await LGReportTestCaseTempResult.setTimeSuiteFinish();
//             console.log("Resolve Promise");
//             Promise.resolve();
//         }, 30000);

//         afterAll(async () => {
//             await LGReportTestCaseTempResult.setTimeEnd();
//         }, 30000);

//         LGReportConfig.environment = await (new EnvironmentTest()).setValue();

//         const env: jasmine.Env = jasmine.getEnv();
//         let reporter = new LGReporter();
//         env.addReporter(reporter);
//     }
// }

export class LGReportConfig {
    public static environment: EnvironmentTest = null;
    public static allSuite: Array<TestSuiteResultInfo> = [];
}
