"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_1 = __importDefault(require("./dashboard"));
class TestResultsPage extends dashboard_1.default {
    static getInstance() {
        this.testResultPage = new TestResultsPage();
        return this.testResultPage;
    }
}
exports.default = TestResultsPage;
TestResultsPage.testResultPage = null;
//# sourceMappingURL=test-result-page.js.map