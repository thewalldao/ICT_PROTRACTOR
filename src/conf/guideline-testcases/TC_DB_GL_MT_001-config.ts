
import ProjectPath from '../../test-data/general/project-path';
import { Config } from 'protractor';

export let config: Config = {


    specs: [
        ProjectPath.testCases + '/guideline-testcases/TC_DB_GL_MT_001.js'
    ],


    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    SELENIUM_PROMISE_MANAGER: false,
};