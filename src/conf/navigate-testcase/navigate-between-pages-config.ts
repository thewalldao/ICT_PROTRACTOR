// require('module-alias/register');
import ProjectPath from '../../test-data/general/project-path';

import { Config } from 'protractor';

export let config: Config = {

    specs: [
        ProjectPath.testCases + '/navigate-testcases/navigate-between-pages.js'
    ],


    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            'excludeSwitches': ['enable-automation'],
        }
        // chromeOptions: {
        //     //     'args': ["--headless", "--disable-gpu", "--window-size=800,600"]
        //     'excludeSwitches': ['enable-automation'],
        //     // useAutomationExtension: false,
        //     perfLoggingPrefs: {
        //         // traceCategories: 'browser,devtools.timeline,devtools,performance',
        //         enableNetwork: true,
        //     },
        // }
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    SELENIUM_PROMISE_MANAGER: false,
};
