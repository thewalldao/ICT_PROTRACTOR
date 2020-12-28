


import { Config } from 'protractor';

export let config: Config = {


    specs: [
        'E:/TUANDAO/PROJECT/SimpleProtractorTest/built/TestCases/navigate-between-pages.js'
    ],


    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    SELENIUM_PROMISE_MANAGER: false,
};