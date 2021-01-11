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
const general_1 = require("@data-objects/general/general");
const platform_1 = require("@data-objects/general/platform");
const test_run_info_1 = __importDefault(require("@data-objects/general/test-run-info"));
const stop_watch_1 = __importDefault(require("@Utilities/general/stop-watch"));
const browser_wrapper_1 = __importDefault(require("@Utilities/protractor-wrappers/browser-wrapper"));
const error_wrapper_1 = require("@Utilities/protractor-wrappers/error-wrapper");
const protractor_1 = require("protractor");
const selenium_webdriver_1 = require("selenium-webdriver");
const utility_1 = require("@Utilities/general/utility");
const General_1 = require("@Utilities/General");
class ElementWrapper {
    constructor(obj) {
        this._elementTimeout = test_run_info_1.default.elementTimeout;
        if (obj.constructor.name === "ElementFinder") {
            let eleFinder = obj;
            this._by = eleFinder.locator();
            this._element = eleFinder;
        }
        else {
            let loc = obj;
            this._by = loc;
            this._element = browser_wrapper_1.default.getDriverInstance().element(this._by);
        }
    }
    wait(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser_wrapper_1.default.wait(protractor_1.ExpectedConditions.elementToBeClickable(this._element), timeoutInSecond * 1000).then(() => { }, (error) => { });
            return this;
        });
    }
    waitForPresenceOf(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser_wrapper_1.default.wait(protractor_1.ExpectedConditions.presenceOf(this._element), timeoutInSecond * 1000).then(() => { }, (error) => { });
            return this;
        });
    }
    waitForVisibilityOf(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser_wrapper_1.default.wait(protractor_1.ExpectedConditions.visibilityOf(this._element), timeoutInSecond * 1000).then(() => { }, (error) => { });
            return this;
        });
    }
    waitForVisibilityOfCustom(timeoutInSecond = this._elementTimeout, expectTimeInSecond, elementName = "") {
        return __awaiter(this, void 0, void 0, function* () {
            General_1.General.printDescribe("wait for element visible");
            try {
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                let isElementDisplayed = yield this.isDisplayed(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                while (stopWatch.getTimeLeftInSecond(timeoutInSecond) > 0 && !isElementDisplayed) {
                    if (stopWatch.getElapsedTimeInSecond() === expectTimeInSecond) {
                        General_1.General.printDescribe(`${stopWatch.getElapsedTimeInSecond()}s is passed but element has not been found`);
                    }
                }
                if (isElementDisplayed) {
                    if (elementName !== "") {
                        General_1.General.printDescribe(`element of ${elementName} is found at ${stopWatch.getElapsedTimeInSecond()}s`);
                    }
                    else {
                        General_1.General.printDescribe(`element is found at ${stopWatch.getElapsedTimeInSecond()}s`);
                    }
                }
                else {
                    throw new Error(`Element of ${elementName} can not be found`);
                }
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitForVisibilityOfCustom, err.message);
            }
        });
    }
    click(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            if (timeoutInSecond < 0) {
                throw new error_wrapper_1.errorwrapper.NoSuchElementError(this._by);
            }
            let stopWatch = new stop_watch_1.default();
            stopWatch.startClock();
            yield this.wait(stopWatch.getTimeLeftInSecond(timeoutInSecond));
            yield this._element.click().then(() => __awaiter(this, void 0, void 0, function* () { }), (err) => __awaiter(this, void 0, void 0, function* () {
                let _error = err;
                if (_error.message.includes("Other element would receive the click") || _error.message.includes("element is not attached to the page document")) {
                    yield this.click(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                }
                else {
                    throw _error;
                }
            }));
            return this;
        });
    }
    doubleClick(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (timeoutInSecond < 0) {
                    throw new error_wrapper_1.errorwrapper.NoSuchElementError(this._by);
                }
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                yield this.wait(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                yield browser_wrapper_1.default.getActions().doubleClick(this._element).perform().then(() => __awaiter(this, void 0, void 0, function* () { }), (error) => __awaiter(this, void 0, void 0, function* () {
                    let _error = error;
                    if (_error.message.includes("Other element would receive the click") || _error instanceof error.StaleElementReferenceError) {
                        yield this.doubleClick(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                    }
                    else {
                        throw _error;
                    }
                }));
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.doubleClick, err.message);
            }
        });
    }
    type(value, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (timeoutInSecond < 0) {
                    throw new error_wrapper_1.errorwrapper.TimeoutError();
                }
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                yield this.clear(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                yield browser_wrapper_1.default.getActions().mouseMove(this._element).perform();
                yield this._element.sendKeys(value).then(() => __awaiter(this, void 0, void 0, function* () {
                    let enteredValue = yield this.getControlValue();
                    if (enteredValue == null) {
                        enteredValue = yield this.getText();
                        if ((enteredValue != value)) {
                            return yield this.type(value, stopWatch.getTimeLeftInSecond(timeoutInSecond));
                        }
                    }
                    else {
                        if ((enteredValue != value)) {
                            return yield this.type(value, stopWatch.getTimeLeftInSecond(timeoutInSecond));
                        }
                    }
                }));
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.type, err.message);
            }
        });
    }
    uploadFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(this._elementTimeout);
                yield browser_wrapper_1.default.getActions().mouseMove(this._element).perform();
                yield this._element.sendKeys(filePath);
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.uploadFile, err.message);
            }
        });
    }
    pressButton(button) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(this._elementTimeout);
                yield browser_wrapper_1.default.getActions().mouseMove(this._element).perform();
                yield this._element.sendKeys(button);
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.pressButton, err.message);
            }
        });
    }
    clear(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (timeoutInSecond < 0) {
                    throw new error_wrapper_1.errorwrapper.TimeoutError();
                }
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                yield this.wait(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                yield this._element.clear().then(() => { }, (error) => __awaiter(this, void 0, void 0, function* () {
                    if (error.message.includes("Element is not currently interactable")) {
                        yield this.clear(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                    }
                    else {
                        throw error;
                    }
                }));
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.clear, err.message);
            }
        });
    }
    setCheckBox(state, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tagName = yield this._element.getAttribute("tagName");
                let isChecked;
                if (timeoutInSecond < 0) {
                    throw new error_wrapper_1.errorwrapper.TimeoutError();
                }
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                yield this.wait(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                if (tagName.toLowerCase() == "div") {
                    let childElement = yield this._element.element(protractor_1.by.xpath('(//input[not(@disabled)])[1]'));
                    isChecked = yield childElement.isSelected();
                }
                else if (tagName.toLowerCase() == "input") {
                    isChecked = yield this._element.isSelected();
                }
                if ((isChecked == false && state) || isChecked && state == false) {
                    yield this._element.click().then(() => __awaiter(this, void 0, void 0, function* () { }), (error) => __awaiter(this, void 0, void 0, function* () {
                        if (error.message.includes("Other element would receive the click")) {
                            yield this.setCheckBox(state, stopWatch.getTimeLeftInSecond(timeoutInSecond));
                        }
                        else {
                            throw error;
                        }
                    }));
                }
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.setCheckBox, err.message);
            }
        });
    }
    isDisplayed(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let isDisplayed;
                yield this.waitForVisibilityOf(timeoutInSecond);
                yield this._element.isDisplayed().then(() => {
                    isDisplayed = true;
                }, (error) => {
                    let _err = error;
                    if (_err.message.includes("No element found using locator") || _err.message.includes("Index out of bound")) {
                        isDisplayed = false;
                    }
                });
                return isDisplayed;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.isDisplayed, err.message);
            }
        });
    }
    isEnabled(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.waitForPresenceOf(timeoutInSecond);
                return yield this._element.isEnabled();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.isEnabled, err.message);
            }
        });
    }
    getAttribute(attributeName, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let sw = new stop_watch_1.default();
            sw.startClock();
            try {
                yield this.waitForPresenceOf(sw.getTimeLeftInSecond(timeoutInSecond));
                return yield this._element.getAttribute(attributeName);
            }
            catch (err) {
                if (err instanceof selenium_webdriver_1.error.StaleElementReferenceError) {
                    return yield this.getAttribute(attributeName, sw.getTimeLeftInSecond(timeoutInSecond));
                }
                else {
                    throw new error_wrapper_1.errorwrapper.CustomError(this.getAttribute, err.message);
                }
            }
        });
    }
    getCssValue(cssValue, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let sw = new stop_watch_1.default();
            sw.startClock();
            try {
                yield this.waitForPresenceOf(sw.getTimeLeftInSecond(timeoutInSecond * 2));
                return yield this._element.getCssValue(cssValue);
            }
            catch (err) {
                if (err instanceof selenium_webdriver_1.error.StaleElementReferenceError || err.message.includes("stale element reference: element is not attached to the page document")) {
                    return yield this.getCssValue(cssValue, sw.getTimeLeftInSecond(timeoutInSecond * 2));
                }
                else {
                    throw new error_wrapper_1.errorwrapper.CustomError(this.getCssValue, err.message);
                }
            }
        });
    }
    waitUntilDisappear(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.wait(protractor_1.ExpectedConditions.invisibilityOf(this._element), timeoutInSecond * 1000).then(() => { }, (error) => { });
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitUntilDisappear, err.message);
            }
        });
    }
    getText(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            let sw = new stop_watch_1.default();
            sw.startClock();
            try {
                yield this.waitForPresenceOf(sw.getTimeLeftInSecond(timeoutInSecond));
                return yield this._element.getText();
            }
            catch (err) {
                if (err instanceof selenium_webdriver_1.error.StaleElementReferenceError) {
                    return yield this.getText(sw.getTimeLeftInSecond(timeoutInSecond));
                }
                else {
                    throw new error_wrapper_1.errorwrapper.CustomError(this.getText, err.message);
                }
            }
        });
    }
    waitUntilPropertyChange(property, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                let previousValue;
                if (property == "text") {
                    previousValue = yield this.getText();
                }
                else {
                    previousValue = yield this.getAttribute(property);
                }
                let currentValue = previousValue;
                while (stopWatch.getTimeLeftInSecond(timeoutInSecond) > 0 && (previousValue == currentValue)) {
                    yield browser_wrapper_1.default.sleepInSecond(1);
                    if (property == "text") {
                        currentValue = yield this.getText();
                    }
                    else {
                        currentValue = yield this.getAttribute(property);
                    }
                }
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitUntilPropertyChange, err.message);
            }
        });
    }
    waitUntilPropertyNotChange(property, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sw = new stop_watch_1.default();
                sw.startClock();
                let previousValue = "previousValue";
                let currentValue = yield this.getAttribute(property);
                while (sw.getTimeLeftInSecond(timeoutInSecond) > 0 && (previousValue != currentValue)) {
                    previousValue = currentValue;
                    yield browser_wrapper_1.default.sleepInSecond(0.5);
                    currentValue = yield this.getAttribute(property);
                }
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitUntilPropertyNotChange, err.message);
            }
        });
    }
    waitUntilCssValueNotChange(cssValue, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sw = new stop_watch_1.default();
                sw.startClock();
                let previousValue = "previousValue";
                let currentValue = yield this.getCssValue(cssValue);
                while (sw.getTimeLeftInSecond(timeoutInSecond) > 0 && (previousValue != currentValue)) {
                    previousValue = currentValue;
                    yield browser_wrapper_1.default.sleepInSecond(0.5);
                    currentValue = yield this.getCssValue(cssValue);
                }
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitUntilCssValueNotChange, err.message);
            }
        });
    }
    waitForControlStable(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (test_run_info_1.default.browser != platform_1.Browser.IE) {
                    let sw = new stop_watch_1.default();
                    sw.startClock();
                    yield this.wait(sw.getTimeLeftInSecond(timeoutInSecond));
                    let eleID = yield this._element.getAttribute('id');
                    let eleClass = yield this._element.getAttribute('class');
                    let bottom, left, right, top, width, x, y;
                    if (eleID != null && eleID != undefined && eleID != "") {
                        while (sw.getTimeLeftInSecond(timeoutInSecond) > 0) {
                            try {
                                let elementBottom = yield browser_wrapper_1.default.executeScript(`return document.getElementById('${eleID}').getBoundingClientRect().bottom`);
                                let elementLeft = yield browser_wrapper_1.default.executeScript(`return document.getElementById('${eleID}').getBoundingClientRect().left`);
                                let elementRight = yield browser_wrapper_1.default.executeScript(`return document.getElementById('${eleID}').getBoundingClientRect().right`);
                                let elementTop = yield browser_wrapper_1.default.executeScript(`return document.getElementById('${eleID}').getBoundingClientRect().top`);
                                let elementWidth = yield browser_wrapper_1.default.executeScript(`return document.getElementById('${eleID}').getBoundingClientRect().width`);
                                let elementX = yield browser_wrapper_1.default.executeScript(`return document.getElementById('${eleID}').getBoundingClientRect().x`);
                                let elementY = yield browser_wrapper_1.default.executeScript(`return document.getElementById('${eleID}').getBoundingClientRect().y`);
                                if (elementBottom == bottom && elementLeft == left && elementRight == right && elementTop == top && elementWidth == width && elementX == x && elementY == y) {
                                    break;
                                }
                                else {
                                    bottom = elementBottom;
                                    left = elementLeft;
                                    right = elementRight;
                                    top = elementTop;
                                    width = elementWidth;
                                    x = elementX;
                                    y = elementY;
                                }
                            }
                            catch (e) {
                            }
                            yield browser_wrapper_1.default.sleepInSecond(0.05);
                        }
                    }
                    else if (eleClass != null && eleClass != undefined && eleClass != "") {
                        while (sw.getTimeLeftInSecond(timeoutInSecond) > 0) {
                            try {
                                let elementBottom = yield browser_wrapper_1.default.executeScript(`return document.getElementsByClassName('${eleClass}')[0].getBoundingClientRect().bottom`);
                                let elementLeft = yield browser_wrapper_1.default.executeScript(`return document.getElementsByClassName('${eleClass}')[0].getBoundingClientRect().left`);
                                let elementRight = yield browser_wrapper_1.default.executeScript(`return document.getElementsByClassName('${eleClass}')[0].getBoundingClientRect().right`);
                                let elementTop = yield browser_wrapper_1.default.executeScript(`return document.getElementsByClassName('${eleClass}')[0].getBoundingClientRect().top`);
                                let elementWidth = yield browser_wrapper_1.default.executeScript(`return document.getElementsByClassName('${eleClass}')[0].getBoundingClientRect().width`);
                                let elementX = yield browser_wrapper_1.default.executeScript(`return document.getElementsByClassName('${eleClass}')[0].getBoundingClientRect().x`);
                                let elementY = yield browser_wrapper_1.default.executeScript(`return document.getElementsByClassName('${eleClass}')[0].getBoundingClientRect().y`);
                                if (elementBottom == bottom && elementLeft == left && elementRight == right && elementTop == top && elementWidth == width && elementX == x && elementY == y) {
                                    break;
                                }
                                else {
                                    bottom = elementBottom;
                                    left = elementLeft;
                                    right = elementRight;
                                    top = elementTop;
                                    width = elementWidth;
                                    x = elementX;
                                    y = elementY;
                                }
                            }
                            catch (e) {
                            }
                            yield browser_wrapper_1.default.sleepInSecond(0.05);
                        }
                    }
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitForControlStable, err.message);
            }
        });
    }
    scrollTo(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                yield browser_wrapper_1.default.getActions().mouseMove(this._element).perform().then(() => { }, (error) => { throw error; });
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.scrollTo, err.message);
            }
        });
    }
    element(by, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (timeoutInSecond < 0) {
                    throw new error_wrapper_1.errorwrapper.NoSuchElementError(by);
                }
                let sw = new stop_watch_1.default();
                sw.startClock();
                yield this.wait(sw.getTimeLeftInSecond(timeoutInSecond));
                let child;
                try {
                    child = this._element.element(by);
                    yield child.isDisplayed();
                }
                catch (err) {
                    if (err instanceof selenium_webdriver_1.error.NoSuchElementError) {
                        yield browser_wrapper_1.default.sleepInSecond(0.5);
                        child = yield this.element(by, sw.getTimeLeftInSecond(timeoutInSecond));
                    }
                    else {
                        throw err;
                    }
                }
                return child;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.element, err.message);
            }
        });
    }
    isSelected(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                return yield this._element.isSelected();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.isSelected, err.message);
            }
        });
    }
    dragAndDrop(location, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                yield browser_wrapper_1.default.getActions().mouseMove(this._element).perform();
                yield browser_wrapper_1.default.getActions().mouseMove({ x: 15, y: 15 }).perform();
                yield browser_wrapper_1.default.getActions().mouseDown().mouseMove(location).perform();
                yield browser_wrapper_1.default.getActions().mouseUp().perform();
                yield this.waitForControlStable();
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.dragAndDrop, err.message);
            }
        });
    }
    getLocation(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                return yield this._element.getLocation();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getLocation, err.message);
            }
        });
    }
    waitUntilDisabled(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sw = new stop_watch_1.default();
                sw.startClock();
                let isElementEnabled = yield this.isEnabled(sw.getTimeLeftInSecond(timeoutInSecond));
                while (sw.getTimeLeftInSecond(timeoutInSecond) > 0 && isElementEnabled) {
                    yield browser_wrapper_1.default.sleepInSecond(0.5);
                    isElementEnabled = yield this.isEnabled(sw.getTimeLeftInSecond(timeoutInSecond));
                }
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitUntilDisabled, err.message);
            }
        });
    }
    getControlValue() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getAttribute("value");
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getControlValue, err.message);
            }
        });
    }
    getControlTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getAttribute("title");
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getControlTitle, err.message);
            }
        });
    }
    moveMouse(opt_offset, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (timeoutInSecond < 0) {
                    throw new error_wrapper_1.errorwrapper.NoSuchElementError(this._by);
                }
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                yield this.wait(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                yield browser_wrapper_1.default.getActions().mouseMove(this._element, opt_offset).perform().then(() => __awaiter(this, void 0, void 0, function* () { }), (error) => __awaiter(this, void 0, void 0, function* () {
                    let _error = error;
                    if (_error.message.includes("Element is not currently interactable") || _error.name == error_wrapper_1.errorwrapper.StaleElementReferenceError.name) {
                        yield this.moveMouse(opt_offset, stopWatch.getTimeLeftInSecond(timeoutInSecond));
                    }
                    else {
                        throw _error;
                    }
                }));
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.moveMouse, err.message);
            }
        });
    }
    moveMouseAndClick(opt_offset, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (timeoutInSecond < 0) {
                    throw new error_wrapper_1.errorwrapper.NoSuchElementError(this._by);
                }
                let stopWatch = new stop_watch_1.default();
                stopWatch.startClock();
                yield this.wait(stopWatch.getTimeLeftInSecond(timeoutInSecond));
                yield browser_wrapper_1.default.getActions().mouseMove(this._element, opt_offset).click().perform().then(() => __awaiter(this, void 0, void 0, function* () { }), (error) => __awaiter(this, void 0, void 0, function* () {
                    let _error = error;
                    if (_error.message.includes("Element is not currently interactable") || _error.name == error_wrapper_1.errorwrapper.StaleElementReferenceError.name) {
                        yield this.moveMouseAndClick(opt_offset, stopWatch.getTimeLeftInSecond(timeoutInSecond));
                    }
                    else {
                        throw _error;
                    }
                }));
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.moveMouseAndClick, err.message);
            }
        });
    }
    getControlValueById(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                let elementID = yield this._element.getAttribute("id");
                return yield browser_wrapper_1.default.executeScript(`return document.getElementById("${elementID}").value`);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getControlValueById, err.message);
            }
        });
    }
    getControlValueByName(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                let elementName = yield this._element.getAttribute("name");
                return yield browser_wrapper_1.default.executeScript(`return document.getElementsByName("${elementName}")[0].value`);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getControlValueByName, err.message);
            }
        });
    }
    getTextValueById(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                let elementId = yield this._element.getAttribute("id");
                return yield browser_wrapper_1.default.executeScript(`return document.getElementById("${elementId}").textContent`);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getTextValueById, err.message);
            }
        });
    }
    doubleClickByScript(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let className = yield this._element.getAttribute("class");
                yield browser_wrapper_1.default.executeScript(`var targLink = document.getElementsByClassName('${className}')[0]; var clickEvent = document.createEvent ('MouseEvents'); clickEvent.initEvent ('dblclick', true, true); targLink.dispatchEvent (clickEvent);`);
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.doubleClickByScript, err.message);
            }
        });
    }
    scrollToElement(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = yield this._element.getAttribute("id");
                yield browser_wrapper_1.default.executeScript(`document.getElementById('${id}').scrollIntoView(false);`);
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.scrollToElement, err.message);
            }
        });
    }
    scrollToElementByClass(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield utility_1.Utility.delay(test_run_info_1.default.shortTimeout);
                let className = yield this._element.getAttribute("class");
                yield browser_wrapper_1.default.executeScript(`document.getElementsByClassName('${className}')[0].scrollIntoView(false);`);
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.scrollToElementByClass, err.message);
            }
        });
    }
    getSize(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.waitForVisibilityOf(timeoutInSecond);
                return yield this._element.getSize();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getSize, err.message);
            }
        });
    }
    getChildCountByTagName(tagName, timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                return yield this._element.all(protractor_1.by.tagName(`${tagName}`)).count();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getChildCountByTagName, err.message);
            }
        });
    }
    sendKeys(value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.getActions().mouseMove(this._element).perform();
                yield this._element.sendKeys(value).then(() => __awaiter(this, void 0, void 0, function* () { }));
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.sendKeys, err.message);
            }
        });
    }
    selectTextByClassName(className) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.executeScript(`node = document.getElementsByClassName('${className}')[0]
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(node);
            selection.removeAllRanges();
            selection.addRange(range);`);
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.selectTextByClassName, err.message);
            }
        });
    }
    switchToFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let currentBrowser = browser_wrapper_1.default.getDriverInstance();
                let webElement = this._element.getWebElement();
                yield currentBrowser.switchTo().frame(webElement);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchToFrame, err.message);
            }
        });
    }
    getElementCoordinate(position, timeoutInSecond) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.waitForVisibilityOf(timeoutInSecond);
                let location = yield this._element.getLocation();
                let eSize = yield this._element.getSize();
                switch (position) {
                    case general_1.CoordinateType.LEFT:
                        return location.x;
                        ;
                    case general_1.CoordinateType.TOP:
                        return location.y;
                        ;
                    case general_1.CoordinateType.RIGHT:
                        return location.x + eSize.width;
                        ;
                    case general_1.CoordinateType.BOTTOM:
                        return location.y + eSize.height;
                        ;
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getElementCoordinate, err.message);
            }
        });
    }
    getElementTagName(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                return yield this._element.getTagName();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getElementTagName, err.message);
            }
        });
    }
    pressButtonForClosePopover(button) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(this._elementTimeout);
                yield browser_wrapper_1.default.getActions().click(this._element, button).perform();
                return this;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.pressButtonForClosePopover, err.message);
            }
        });
    }
    getControlValueByClassName(timeoutInSecond = this._elementTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.wait(timeoutInSecond);
                let elementName = yield this._element.getAttribute("class");
                return yield browser_wrapper_1.default.executeScript(`return document.getElementsByClassName("${elementName}")[0].value`);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getControlValueByClassName, err.message);
            }
        });
    }
}
exports.default = ElementWrapper;
//# sourceMappingURL=element-wrapper.js.map