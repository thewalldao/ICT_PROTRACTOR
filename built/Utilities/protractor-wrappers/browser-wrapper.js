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
const platform_1 = require("@data-objects/general/platform");
const project_path_1 = __importDefault(require("@test-data/general/project-path"));
const logger_1 = require("@Utilities/general/logger");
const stop_watch_1 = __importDefault(require("@Utilities/general/stop-watch"));
const error_wrapper_1 = require("@Utilities/protractor-wrappers/error-wrapper");
const protractor_1 = require("protractor");
const protractor_hotkeys_1 = __importDefault(require("protractor-hotkeys"));
const element_wrapper_1 = __importDefault(require("./element-wrapper"));
let protractor = require("protractor");
class BrowserWrapper {
    static switchDriverInstance(index) {
        try {
            let numberBrowsers = BrowserWrapper._browserArray.length;
            if (index > numberBrowsers + 1)
                throw Error(`There are only ${numberBrowsers} driver browser(s), please create new one.`);
            else
                BrowserWrapper._currentBrowser = BrowserWrapper._browserArray[index - 1];
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.switchDriverInstance, err.message);
        }
    }
    static closeAllBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let numberBrowsers = BrowserWrapper._browserArray.length;
                if (numberBrowsers > 1) {
                    for (let i = 2; i <= numberBrowsers; i++) {
                        this.switchDriverInstance(i);
                        yield BrowserWrapper.quit();
                    }
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.closeAllBrowser, err.message);
            }
        });
    }
    static createDriverInstance() {
        try {
            if (BrowserWrapper._browserArray.length != 0)
                BrowserWrapper._browserArray.push(BrowserWrapper._browserArray[0].forkNewDriverInstance());
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.createDriverInstance, err.message);
        }
    }
    static getDriverInstance() {
        try {
            if (BrowserWrapper._browserArray.length == 0) {
                BrowserWrapper._currentBrowser = protractor.browser;
                BrowserWrapper._browserArray.push(BrowserWrapper._currentBrowser);
                return BrowserWrapper._currentBrowser;
            }
            else {
                return BrowserWrapper._currentBrowser;
            }
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getDriverInstance, err.message);
        }
    }
    static getAllWindowHandles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield BrowserWrapper.getDriverInstance().getAllWindowHandles();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getAllWindowHandles, err.message);
            }
        });
    }
    static switchWindow(index) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let currentBrowser = BrowserWrapper.getDriverInstance();
                let allWindowHandles = yield currentBrowser.getAllWindowHandles();
                yield currentBrowser.switchTo().window(allWindowHandles[index]);
                yield this.switchToDefaultContent();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchWindow, err.message);
            }
        });
    }
    static getTotalWindows() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield BrowserWrapper.getDriverInstance().getAllWindowHandles()).length;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getTotalWindows, err.message);
            }
        });
    }
    static getNewWindowHandle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allWindowHandles = yield this.getAllWindowHandles();
                return allWindowHandles[allWindowHandles.length - 1];
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getNewWindowHandle, err.message);
            }
        });
    }
    static switchWindowByHandle(handle) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BrowserWrapper.getDriverInstance().switchTo().window(handle);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchWindowByHandle, err.message);
            }
        });
    }
    static switchWindowByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let TestRunInfo = require(`@data-objects/general/test-run-info`).default;
                let stopTime = 0;
                let stopWatch = new stop_watch_1.default();
                let allHandles = yield this.getAllWindowHandles();
                stopWatch.startClock();
                for (let handle of allHandles) {
                    yield this.switchWindowByHandle(handle);
                    let titleHandle = yield BrowserWrapper.getDriverInstance().getTitle();
                    while (titleHandle == "" && stopTime <= TestRunInfo.middleTimeout) {
                        titleHandle = yield BrowserWrapper.getDriverInstance().getTitle();
                        yield this.sleepInSecond(1);
                        stopTime = stopWatch.getElapsedTimeInSecond();
                    }
                    if (titleHandle == title) {
                        break;
                    }
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchWindowByTitle, err.message);
            }
        });
    }
    static isWindowHandleDisplayed(windowHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allWindowHandles = yield this.getAllWindowHandles();
                let state = false;
                for (let i = 0; i < allWindowHandles.length; i++) {
                    if (windowHandle == allWindowHandles[i]) {
                        state = true;
                    }
                }
                return state;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.isWindowHandleDisplayed, err.message);
            }
        });
    }
    static openNewTab(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let windowHandle;
                let allWindowHandles = yield this.getAllWindowHandles();
                yield this.executeScript("window.open();");
                yield BrowserWrapper.waitForNumberOfWindows(allWindowHandles.length + 1);
                let newWindowHandles = yield this.getAllWindowHandles();
                windowHandle = (allWindowHandles.filter(x => !newWindowHandles.toString().includes(x)).concat(newWindowHandles.filter(x => !allWindowHandles.toString().includes(x)))).toString();
                yield this.switchWindowByHandle(windowHandle);
                yield this.get(url);
                return windowHandle;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.openNewTab, err.message);
            }
        });
    }
    static setPageLoadTimeout(timeoutInSecond) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let TestRunInfo = require(`@data-objects/general/test-run-info`).default;
                if (timeoutInSecond == null)
                    timeoutInSecond = TestRunInfo.pageTimeout;
                yield BrowserWrapper.getDriverInstance().manage().timeouts().pageLoadTimeout(timeoutInSecond * 1000);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.setPageLoadTimeout, err.message);
            }
        });
    }
    static switchToDefaultContent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BrowserWrapper.getDriverInstance().switchTo().defaultContent();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchToDefaultContent, err.message);
            }
        });
    }
    static maximize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, `Maximizing window`);
                yield BrowserWrapper.getDriverInstance().manage().window().maximize();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.maximize, err.message);
            }
        });
    }
    static get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, `Navigating to ${url}`);
                let currentBrowser = yield BrowserWrapper.getDriverInstance();
                yield currentBrowser.waitForAngularEnabled(false);
                yield currentBrowser.get(url);
                yield currentBrowser.waitForAngularEnabled(false);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.get, err.message);
            }
        });
    }
    static waitForNumberOfWindows(expectedNumberOfWindows, timeOut) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let TestRunInfo = require(`@data-objects/general/test-run-info`).default;
                let crWindows = yield this.getTotalWindows();
                let step = 1;
                if (timeOut == null)
                    timeOut = TestRunInfo.pageTimeout;
                while (expectedNumberOfWindows != crWindows) {
                    yield this.sleepInSecond(step);
                    timeOut = timeOut - step;
                    crWindows = yield this.getTotalWindows();
                    if (timeOut < 0) {
                        throw new error_wrapper_1.errorwrapper.TimeoutError();
                    }
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitForNumberOfWindows, err.message);
            }
        });
    }
    static quit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BrowserWrapper.getDriverInstance().quit();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.quit, err.message);
            }
        });
    }
    static restart(waitForAngularEnabled = false) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, `Restarting browser`);
                let currentBrowser = BrowserWrapper.getDriverInstance();
                yield currentBrowser.restart();
                BrowserWrapper._browserArray.length = 0;
                currentBrowser = BrowserWrapper.getDriverInstance();
                yield currentBrowser.waitForAngularEnabled(waitForAngularEnabled);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.restart, err.message);
            }
        });
    }
    static restartAllBrowsers(waitForAngularEnabled = false) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, `Restarting browser`);
                let numberBrowsers = BrowserWrapper._browserArray.length;
                let currentBrowser;
                if (numberBrowsers != 1) {
                    for (let i = 1; i <= numberBrowsers; i++) {
                        BrowserWrapper._currentBrowser = BrowserWrapper._browserArray[i - 1];
                        currentBrowser = BrowserWrapper.getDriverInstance();
                        yield currentBrowser.restart();
                        currentBrowser = BrowserWrapper.getDriverInstance();
                        yield currentBrowser.waitForAngularEnabled(waitForAngularEnabled);
                    }
                }
                currentBrowser = BrowserWrapper.getDriverInstance();
                yield currentBrowser.restart();
                BrowserWrapper._browserArray.length = 0;
                currentBrowser = BrowserWrapper.getDriverInstance();
                yield currentBrowser.waitForAngularEnabled(waitForAngularEnabled);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.restartAllBrowsers, err.message);
            }
        });
    }
    static getCapabilities() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield BrowserWrapper.getDriverInstance().getCapabilities();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getCapabilities, err.message);
            }
        });
    }
    static executeScript(script, ...var_args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield BrowserWrapper.getDriverInstance().executeScript(script, var_args);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.executeScript, err.message);
            }
        });
    }
    static switchToFrame(index) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BrowserWrapper.getDriverInstance().switchTo().frame(index);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchToFrame, err.message);
            }
        });
    }
    static switchToFrameById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let webElement = BrowserWrapper.getDriverInstance().findElement(protractor_1.By.id('id'));
                yield BrowserWrapper.getDriverInstance().switchTo().frame(webElement);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchToFrameById, err.message);
            }
        });
    }
    static waitForAlertDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BrowserWrapper.getDriverInstance().wait(protractor.ExpectedConditions.alertIsPresent());
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitForAlertDisplay, err.message);
            }
        });
    }
    static isAlertDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return protractor.ExpectedConditions.alertIsPresent();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.isAlertDisplay, err.message);
            }
        });
    }
    static acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BrowserWrapper.getDriverInstance().switchTo().alert().accept();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.acceptAlert, err.message);
            }
        });
    }
    static close() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BrowserWrapper.getDriverInstance().close();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.close, err.message);
            }
        });
    }
    static scrollToTop() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.executeScript("window.scrollTo(0, 0);");
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.scrollToTop, err.message);
            }
        });
    }
    static sleepInSecond(second) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BrowserWrapper.getDriverInstance().sleep(second * 1000);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.sleepInSecond, err.message);
            }
        });
    }
    static pressKey(button) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let TestRunInfo = require(`@data-objects/general/test-run-info`).default;
                if (TestRunInfo.browser == platform_1.Browser.IE || TestRunInfo.browser == platform_1.Browser.EDGE) {
                    yield this.executeScript("document.activeElement.blur();");
                    yield this.sleepInSecond(2);
                }
                yield protractor_hotkeys_1.default.trigger(button);
                if (TestRunInfo.browser == platform_1.Browser.IE || TestRunInfo.browser == platform_1.Browser.EDGE) {
                    yield this.sleepInSecond(2);
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.pressKey, err.message);
            }
        });
    }
    static wait(condition, opt_timeout, opt_message) {
        try {
            return BrowserWrapper.getDriverInstance().wait(condition, opt_timeout, opt_message);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.wait, err.message);
        }
    }
    static getElements(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let arr = yield BrowserWrapper.getDriverInstance().element.all(locator);
                let arrWrapper = new Array();
                for (let i = 0; i < arr.length; i++) {
                    arrWrapper.push(new element_wrapper_1.default(arr[i]));
                }
                return arrWrapper;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getElements, err.message);
            }
        });
    }
    static getActions() {
        try {
            return BrowserWrapper.getDriverInstance().actions();
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.getActions, err.message);
        }
    }
    static settingWaitForAngularEnabled(waitForAngularEnabled) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Setting wait for angular enabled");
                let currentBrowser = yield BrowserWrapper.getDriverInstance();
                yield currentBrowser.waitForAngularEnabled(waitForAngularEnabled);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.settingWaitForAngularEnabled, err.message);
            }
        });
    }
    static setSize(width = null, height = null) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let currentBrowser = BrowserWrapper.getDriverInstance();
                let crSize = yield this.getSize();
                let cr_width = crSize.width;
                let cr_height = crSize.height;
                let max_steps = 20;
                height = (height == null) ? cr_height : height;
                width = (width == null) ? cr_width : width;
                let a_width_step = Math.abs((cr_width - width) / max_steps);
                let a_height_step = Math.abs((cr_height - height) / max_steps);
                a_width_step = (cr_width < width) ? a_width_step : (-1 * a_width_step);
                a_height_step = (cr_height < height) ? a_height_step : (-1 * a_height_step);
                while (max_steps > 0) {
                    cr_width += a_width_step;
                    cr_height += a_height_step;
                    yield currentBrowser.driver.manage().window().setSize(cr_width, cr_height);
                    max_steps--;
                }
                yield currentBrowser.driver.manage().window().setSize(width, height);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.setSize, err.message);
            }
        });
    }
    static refreshPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let currentBrowser = BrowserWrapper.getDriverInstance();
                yield this.executeScript("location.reload();");
                yield currentBrowser.switchTo().alert().then((alert) => __awaiter(this, void 0, void 0, function* () {
                    yield this.acceptAlert();
                }), () => { });
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.refreshPage, err.message);
            }
        });
    }
    static getSize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield BrowserWrapper.getDriverInstance().driver.manage().window().getSize();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getSize, err.message);
            }
        });
    }
    static waitForAngularEnabled(enabled) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let currentBrowser = yield BrowserWrapper.getDriverInstance();
                yield currentBrowser.waitForAngularEnabled(enabled);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitForAngularEnabled, err.message);
            }
        });
    }
    static getSelectedText() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.executeScript("return window.getSelection().toString()");
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getSelectedText, err.message);
            }
        });
    }
    static setSessionStorage(authToken, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let isCentral = yield this.executeScript("return window.IsCentral");
                let authBaseUrl = yield this.executeScript("return window.AuthBaseUrl");
                let niceBaseUrl = yield this.executeScript("return window.niceBaseUrl");
                let incontactBaseUrl = yield this.executeScript("return window.incontactBaseUrl");
                yield this.executeScript(`sessionStorage.setItem('max_authToken','${authToken}')`);
                yield this.executeScript(`sessionStorage.setItem('max_isCentral','"${isCentral}"')`);
                yield this.executeScript(`sessionStorage.setItem('max_refreshToken','${refreshToken}')`);
                yield this.executeScript(`sessionStorage.setItem('max_urls','{"authBaseUrl":"${authBaseUrl}","niceBaseUrl":"${niceBaseUrl}","incontactBaseUrl":"${incontactBaseUrl}"}')`);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.setSessionStorage, err.message);
            }
        });
    }
    static clearSessionStorage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.executeScript(`sessionStorage.clear();`);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.clearSessionStorage, err.message);
            }
        });
    }
    static waitForNewTabIsOpening() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let windowHandle;
                let allWindowHandles = yield this.getAllWindowHandles();
                yield BrowserWrapper.waitForNumberOfWindows(allWindowHandles.length + 1);
                let newWindowHandles = yield this.getAllWindowHandles();
                windowHandle = (allWindowHandles.filter(x => !newWindowHandles.toString().includes(x)).concat(newWindowHandles.filter(x => !allWindowHandles.toString().includes(x)))).toString();
                yield this.switchWindowByHandle(windowHandle);
                return windowHandle;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitForNewTabIsOpening, err.message);
            }
        });
    }
    static takeScreenShot(nameOfPic) {
        try {
            let fs = require('fs-extra');
            if (!fs.existsSync(`${project_path_1.default.conf}/test/reports/screenshots/` + nameOfPic + '.png')) {
                BrowserWrapper.getDriverInstance().takeScreenshot().then(function (png) {
                    if (png == null || png == undefined) {
                        png = "";
                    }
                    let fs = require('fs-extra');
                    let stream = fs.createWriteStream(`${project_path_1.default.conf}/test/reports/screenshots/` + nameOfPic + '.png');
                    stream.write(Buffer.from(png, 'base64'));
                    stream.end();
                });
            }
        }
        catch (err) {
            console.log(`Error when take screen shot with error: ${err}`);
        }
    }
    static mouseMove(opt_offset) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let currentBrowser = yield BrowserWrapper.getDriverInstance();
                yield currentBrowser.actions().mouseMove(opt_offset).perform();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitForAngularEnabled, err.message);
            }
        });
    }
}
exports.default = BrowserWrapper;
BrowserWrapper._browserArray = new Array();
//# sourceMappingURL=browser-wrapper.js.map