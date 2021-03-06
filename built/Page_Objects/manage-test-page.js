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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const General_1 = require("@Utilities/General");
const protractor_1 = require("protractor");
const dashboard_1 = __importDefault(require("./dashboard"));
class ManageTestPage extends dashboard_1.default {
    constructor() {
        super();
        this.elementHelpButton = protractor_1.element(protractor_1.by.xpath("//button[@id='btnGuideline']"));
        this.elementSyncTestButton = protractor_1.element(protractor_1.by.xpath("//button[@id='btnSyncTestsModal']"));
        this.elementTestGroups = protractor_1.element(protractor_1.by.xpath("//a[@href='#testgroups']"));
        this.elementGuideLineNextButton = protractor_1.element(protractor_1.by.xpath("//div[@class='enjoyhint_next_btn']"));
        this.elementGuideLineSkipButton = protractor_1.element(protractor_1.by.xpath("//div[@class='enjoyhint_skip_btn']"));
        this.elementSyncTestText = protractor_1.element(protractor_1.by.xpath("//button[@id='btnSyncTestsModal']//span"));
        this.elementEditTabText = protractor_1.element(protractor_1.by.xpath("//button[@id='btnEditTab']//span"));
    }
    clickHelpButton() {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("click help button");
            try {
                yield protractor_1.browser.wait(this.PE.visibilityOf(this.elementHelpButton)), 10000, "Help Button is not display";
                yield this.elementHelpButton.click();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getInstance() {
        this.manageTestPage = new ManageTestPage();
        return this.manageTestPage;
    }
}
exports.default = ManageTestPage;
ManageTestPage.manageTestPage = null;
//# sourceMappingURL=manage-test-page.js.map