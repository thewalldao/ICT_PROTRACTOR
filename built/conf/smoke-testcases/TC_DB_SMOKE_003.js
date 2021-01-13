"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const project_path_1 = __importDefault(require("../../test-data/general/project-path"));
exports.config = {
    specs: [
        project_path_1.default.testCases + '/smoke-testcases/TC_DB_SMOKE_003.js'
    ],
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    SELENIUM_PROMISE_MANAGER: false,
};
//# sourceMappingURL=TC_DB_SMOKE_003.js.map