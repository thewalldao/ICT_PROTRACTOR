import { Button } from '@data-objects/general/general';
import { Browser } from '@data-objects/general/platform';
import ProjectPath from '@test-data/general/project-path';
import { FunctionType, Logger } from '@Utilities/general/logger';
// import StopWatch from '@utilities/general/stop-watch';
import { errorwrapper } from '@Utilities/protractor-wrappers/error-wrapper';
import { ActionSequence, By, Capabilities, Locator, ProtractorBrowser } from 'protractor';
import hotkeys from "protractor-hotkeys";
import { Condition, ILocation, ISize, promise, WebDriver, WebElementPromise } from 'selenium-webdriver';
import ElementWrapper from './element-wrapper';
let protractor = require("protractor");
export default class BrowserWrapper {

    private static _currentBrowser: ProtractorBrowser;
    private static readonly _browserArray: ProtractorBrowser[] = new Array();

    /**
     * Switch between Drivers Instance
     * @static
     * @param {number} index of Browser Driver
     * @memberof BrowserWrapper
     */
    public static switchDriverInstance(index: number): void {
        try {
            let numberBrowsers: number = BrowserWrapper._browserArray.length;
            if (index > numberBrowsers + 1)
                throw Error(`There are only ${numberBrowsers} driver browser(s), please create new one.`);
            else
                BrowserWrapper._currentBrowser = BrowserWrapper._browserArray[index - 1];
        } catch (err) {
            throw new errorwrapper.CustomError(this.switchDriverInstance, err.message);
        }
    }
}