"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_1 = __importDefault(require("./dashboard"));
class ReportingPage extends dashboard_1.default {
    static getInstance() {
        this.reportingPage = new ReportingPage();
        return this.reportingPage;
    }
}
exports.default = ReportingPage;
ReportingPage.reportingPage = null;
//# sourceMappingURL=reporting-page.js.map