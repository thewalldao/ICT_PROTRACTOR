import { InContactLink } from "@Utilities/Constant";
import BrowserWrapper from "@Utilities/protractor-wrappers/browser-wrapper";

export function testBase() {
    let originalTimeout
    beforeEach(async () => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        await BrowserWrapper.waitForAngularEnabled(false)
        await BrowserWrapper.get(InContactLink.LOCAL)
    });

    afterEach(async () => {
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
};