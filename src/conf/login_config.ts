

import ProjectPath from '@test-data/general/project-path';
import { Config } from 'protractor';

export let config: Config = {


    specs: [
        'E:/TUANDAO/PROJECT/INCONTACT_PROTRATOR/incontact_protractor/built/testcases/login-test.js'
    ],


    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    SELENIUM_PROMISE_MANAGER: false,
};