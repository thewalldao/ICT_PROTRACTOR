"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_1 = __importDefault(require("./dashboard"));
class UiPerformanceTestPage extends dashboard_1.default {
    static getInstance() {
        this.uiPerfromanceTestPage = new UiPerformanceTestPage();
        return this.uiPerfromanceTestPage;
    }
}
exports.default = UiPerformanceTestPage;
UiPerformanceTestPage.uiPerfromanceTestPage = null;
//# sourceMappingURL=uiperformance-testcase-page.js.map