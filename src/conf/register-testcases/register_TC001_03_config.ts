
import { Config } from 'protractor';

export let config: Config = {


    specs: [
        'E:/TUANDAO/PROJECT/SimpleProtractorTest/built/TestCases/register-testcases/register-TC001-03.js'
    ],


    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    SELENIUM_PROMISE_MANAGER: false,
};