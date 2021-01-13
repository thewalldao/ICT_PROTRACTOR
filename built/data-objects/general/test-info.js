"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestInfo {
    constructor(browserName, custerName, testName) {
        this._browser = browserName;
        this._cluster = custerName;
        this._testName = testName;
    }
    getBrowser() {
        return this._browser;
    }
    getCluster() {
        return this._cluster;
    }
    getTestName() {
        return this._testName;
    }
}
exports.default = TestInfo;
//# sourceMappingURL=test-info.js.map