"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@data-objects/general/config");
const utility_1 = require("@Utilities/general/utility");
const error_wrapper_1 = require("@Utilities/protractor-wrappers/error-wrapper");
const fs_1 = __importDefault(require("fs"));
const platform_1 = require("./platform");
class TestRunInfo {
    static setUpTestRunInfo(jsonPath) {
        try {
            let jsonString = fs_1.default.readFileSync(jsonPath, 'utf8');
            let configData = utility_1.JsonUtility.deserialize(JSON.parse(jsonString), config_1.ConfigInfo);
            TestRunInfo.browser = configData.browser;
            TestRunInfo.elementTimeout = configData.elementTimeout;
            TestRunInfo.timeout = 60;
            TestRunInfo.shortTimeout = TestRunInfo.timeout / 12;
            TestRunInfo.middleTimeout = TestRunInfo.timeout / 4;
            TestRunInfo.longTimeout = TestRunInfo.timeout / 2;
            TestRunInfo.pageTimeout = configData.pageTimeout;
            TestRunInfo.testTimeout = configData.testTimeout;
            TestRunInfo.conditionTimeout = configData.testTimeout / 2;
            if (configData.browser == platform_1.Browser.CHROME || configData.browser == platform_1.Browser.FIREFOX) {
                TestRunInfo.stateOfDirectConnect = true;
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.setUpTestRunInfo, err.message);
        }
    }
}
exports.default = TestRunInfo;
TestRunInfo.apiTestCasesID = [];
TestRunInfo.stateOfDirectConnect = false;
//# sourceMappingURL=test-run-info.js.map