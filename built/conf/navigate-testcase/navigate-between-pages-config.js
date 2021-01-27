"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const project_path_1 = __importDefault(require("../../test-data/general/project-path"));
exports.config = {
    specs: [
        project_path_1.default.testCases + '/navigate-testcases/navigate-between-pages.js'
    ],
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            useAutomationExtension: false,
        }
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    SELENIUM_PROMISE_MANAGER: false,
};
//# sourceMappingURL=navigate-between-pages-config.js.map