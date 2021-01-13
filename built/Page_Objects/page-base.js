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
const logger_1 = require("@utilities/general/logger");
const browser_wrapper_1 = __importDefault(require("@utilities/protractor-wrappers/browser-wrapper"));
const error_wrapper_1 = require("@utilities/protractor-wrappers/error-wrapper");
class PageBase {
    setPageSize(width = null, height = null) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.setSize(width, height);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.setPageSize, err.message);
            }
        });
    }
    getPageSize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield browser_wrapper_1.default.getSize();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getPageSize, err.message);
            }
        });
    }
    getCurrentWindowHandle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield browser_wrapper_1.default.getNewWindowHandle();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getCurrentWindowHandle, err.message);
            }
        });
    }
    switchWindowByHandle(handle) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.switchWindowByHandle(handle);
                browser_wrapper_1.default.sleepInSecond(3);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchWindowByHandle, err.message);
            }
        });
    }
    waitInSecond(second) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.sleepInSecond(second);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.waitInSecond, err.message);
            }
        });
    }
    copySelectedText() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Copying selected text");
                let clipboardy = require('clipboardy');
                yield clipboardy.writeSync(yield this.getSelectedText());
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.copySelectedText, err.message);
            }
        });
    }
    getSelectedText() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Getting selected text");
                return yield browser_wrapper_1.default.getSelectedText();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getSelectedText, err.message);
            }
        });
    }
    openNewTab(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.openNewTab(url);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.openNewTab, err.message);
            }
        });
    }
    closeWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.close();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.closeWindow, err.message);
            }
        });
    }
    getTotalWindows() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield browser_wrapper_1.default.getTotalWindows();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getTotalWindows, err.message);
            }
        });
    }
    createDriverInstance() {
        try {
            browser_wrapper_1.default.createDriverInstance();
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.createDriverInstance, err.message);
        }
    }
    isSelectedTextHighlight(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let selectedText = yield browser_wrapper_1.default.getSelectedText();
                return selectedText == text;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.isSelectedTextHighlight, err.message);
            }
        });
    }
    switchDriverInstance(index) {
        try {
            browser_wrapper_1.default.switchDriverInstance(index);
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.switchDriverInstance, err.message);
        }
    }
    getClipboardContent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Getting clipboard content");
                let clipboardy = require('clipboardy');
                let clipboardContent = "";
                try {
                    clipboardContent = yield clipboardy.readSync();
                }
                catch (errClipboard) {
                    if (errClipboard.message == "The operation completed successfully.") {
                        yield clipboardy.writeSync("");
                    }
                }
                return clipboardContent;
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.getClipboardContent, err.message);
            }
        });
    }
    settingWaitForAngularEnabled(option) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.settingWaitForAngularEnabled(option);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.settingWaitForAngularEnabled, err.message);
            }
        });
    }
    navigateWeb(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.settingWaitForAngularEnabled(false);
                yield browser_wrapper_1.default.maximize();
                yield browser_wrapper_1.default.get(url);
                yield browser_wrapper_1.default.settingWaitForAngularEnabled(false);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.navigateWeb, err.message);
            }
        });
    }
    switchToDefaultContent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Switching to default content ");
                yield browser_wrapper_1.default.switchToDefaultContent();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.switchToDefaultContent, err.message);
            }
        });
    }
    closeAllBrowsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.closeAllBrowser();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.closeAllBrowsers, err.message);
            }
        });
    }
    quit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield browser_wrapper_1.default.quit();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.quit, err.message);
            }
        });
    }
    refreshPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Refresh page");
                yield browser_wrapper_1.default.refreshPage();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.refreshPage, err.message);
            }
        });
    }
    maximizePage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Maximize page");
                yield browser_wrapper_1.default.maximize();
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.maximizePage, err.message);
            }
        });
    }
    setClipboardContent(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Setting clipboard content");
                let clipboardy = require('clipboardy');
                try {
                    yield clipboardy.writeSync(text);
                }
                catch (errClipboard) {
                    if (errClipboard.message == "The operation completed successfully.") {
                        yield clipboardy.writeSync("");
                    }
                }
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.setClipboardContent, err.message);
            }
        });
    }
    closeExcessBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield logger_1.Logger.write(logger_1.FunctionType.UI, "Closing excess browsers");
                yield browser_wrapper_1.default.closeAllBrowser();
                yield browser_wrapper_1.default.switchDriverInstance(1);
            }
            catch (err) {
                throw new error_wrapper_1.errorwrapper.CustomError(this.closeExcessBrowser, err.message);
            }
        });
    }
}
exports.default = PageBase;
//# sourceMappingURL=page-base.js.map