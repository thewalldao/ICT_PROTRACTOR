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
const test_run_info_1 = __importDefault(require("@data-objects/general/test-run-info"));
const stop_watch_1 = __importDefault(require("@Utilities/general/stop-watch"));
const protractor_1 = require("protractor");
const selenium_webdriver_1 = require("selenium-webdriver");
const browser_wrapper_1 = __importDefault(require("./browser-wrapper"));
const element_wrapper_1 = __importDefault(require("./element-wrapper"));
const error_wrapper_1 = require("./error-wrapper");
class SelectElementWrapper {
    constructor(by) {
        this._elementTimeout = test_run_info_1.default.elementTimeout;
        this._by = by;
        this._element = new element_wrapper_1.default(this._by);
    }
    selectByID(id, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let sw = new stop_watch_1.default();
            sw.startClock();
            try {
                yield this._element.waitForControlStable();
                yield this._element.click(sw.getTimeLeftInSecond(timeoutInSecond));
                let e = yield this._element.element(protractor_1.by.xpath(`//*[@id='${id}']`), sw.getTimeLeftInSecond(timeoutInSecond));
                yield e.click();
            }
            catch (_err) {
                let err = _err;
                if (err.message.includes("element not visible") || err.message.includes("element not interactable")) {
                    yield this.selectByID(id, sw.getTimeLeftInSecond(timeoutInSecond));
                }
                else {
                    throw new error_wrapper_1.errorwrapper.CustomError(this.selectByID, err.message);
                }
            }
        });
    }
    selectOption(by, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let sw = new stop_watch_1.default();
            sw.startClock();
            try {
                yield this._element.waitForControlStable();
                yield this._element.click(sw.getTimeLeftInSecond(timeoutInSecond));
                let optionElement = yield this._element.element(by, sw.getTimeLeftInSecond(timeoutInSecond));
                yield optionElement.click();
                yield this._element.waitForControlStable();
            }
            catch (err) {
                if (err.message.includes("element not interactable")) {
                    yield this.selectOption(by, sw.getTimeLeftInSecond(timeoutInSecond));
                }
                else {
                    throw new error_wrapper_1.errorwrapper.CustomError(this.selectOption, err.message);
                }
            }
        });
    }
    selectOptionByText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tagName = yield this._element.getAttribute("tagName");
                let locator;
                let tagNameLowerCase = yield tagName.toLowerCase();
                if (tagNameLowerCase == "select") {
                    locator = protractor_1.by.xpath(`//option[text()="${text}"]`);
                }
                else if (tagNameLowerCase == "div") {
                    locator = protractor_1.by.xpath(`//div[@role='option']//span[contains(text(),'${text}')]`);
                }
                yield this.selectOption(locator);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.selectOptionByText, err.message);
            }
        });
    }
    selectOptionByTextWithIndex(text, index) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tagName = yield this._element.getAttribute("tagName");
                let locator;
                if (tagName.toLowerCase() == "select") {
                    locator = protractor_1.by.xpath(`(//option[text()='${text}'])[${index}]`);
                }
                else if (tagName.toLowerCase() == "div") {
                    locator = protractor_1.by.xpath(`(//div[@role='option']//span[text()='${text}'])[${index}]`);
                }
                yield this.selectOption(locator);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.selectOptionByTextWithIndex, err.message);
            }
        });
    }
    selectOptionByTextContains(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tagName = yield this._element.getAttribute("tagName");
                let locator;
                if (tagName.toLowerCase() == "select") {
                    locator = protractor_1.by.xpath(`//option[contains(text(),'${text}')]`);
                }
                else if (tagName.toLowerCase() == "div") {
                    locator = protractor_1.by.xpath(`//div[@role='option']//span[contains(text(),'${text}')]`);
                }
                yield this.selectOption(locator);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.selectOptionByTextContains, err.message);
            }
        });
    }
    selectOptionByIndex(index) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tagName = yield this._element.getAttribute("tagName");
                let locator;
                if (tagName.toLowerCase() == "select") {
                    let elementId = yield this._element.getAttribute("id");
                    if (elementId == null) {
                        let elementClass = yield this._element.getAttribute("className");
                        yield browser_wrapper_1.default.executeScript(`document.getElementsByClassName("${elementClass}").selectedIndex = ${index}`);
                    }
                    else
                        yield browser_wrapper_1.default.executeScript(`document.getElementById("${elementId}").selectedIndex = ${index}`);
                }
                else if (tagName.toLowerCase() == "div") {
                    locator = protractor_1.by.xpath(`//div[@role='option'][${index}]`);
                    yield this.selectOption(locator);
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.selectOptionByIndex, err.message);
            }
        });
    }
    wait(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._element.wait(timeoutInSecond);
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.wait, err.message);
            }
        });
    }
    isDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._element.isDisplayed();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.isDisplayed, err.message);
            }
        });
    }
    getSelectedItem(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._element.wait(timeoutInSecond);
                let id = yield this._element.getAttribute("id");
                return yield browser_wrapper_1.default.executeScript(`return document.getElementById('${id}').options[document.getElementById('${id}').selectedIndex].text`);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getSelectedItem, err.message);
            }
        });
    }
    getText(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let sw = new stop_watch_1.default();
            sw.startClock();
            try {
                yield this._element.waitForPresenceOf(sw.getTimeLeftInSecond(timeoutInSecond));
                return yield this._element.getText(timeoutInSecond);
            }
            catch (err) {
                if (err instanceof selenium_webdriver_1.error.StaleElementReferenceError) {
                    return yield this._element.getText(sw.getTimeLeftInSecond(timeoutInSecond));
                }
                else {
                    throw new error_wrapper_1.errorwrapper.CustomError(this.getText, err.message);
                }
            }
        });
    }
    scrollToElement(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = yield this._element.getAttribute("id");
                yield browser_wrapper_1.default.executeScript(`document.getElementById('${id}').scrollIntoView(false)`);
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.scrollToElement, err.message);
            }
        });
    }
}
exports.default = SelectElementWrapper;
//# sourceMappingURL=select-element-wrapper.js.map