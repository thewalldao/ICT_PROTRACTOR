import { InContactLink } from "@Utilities/Constant";
import BrowserWrapper from "@Utilities/protractor-wrappers/browser-wrapper";
import { browser } from "protractor";

export function testBase() {
    let originalTimeout
    beforeEach(async () => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        await BrowserWrapper.waitForAngularEnabled(false)
        await BrowserWrapper.get(InContactLink.LOCAL)
        await BrowserWrapper.maximize();
    });

    afterEach(async () => {
        // browser.sleep(100000)
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
};