import { General } from "@Utilities/General";
import ElementWrapper from "@Utilities/protractor-wrappers/element-wrapper";
import { errorwrapper } from "@Utilities/protractor-wrappers/error-wrapper";
import { browser, by } from "protractor";
import Dashboard from "./dashboard";

export default class ReportingPage extends Dashboard {
    private static reportingPage: ReportingPage = null;
    private divOverlay: ElementWrapper = new ElementWrapper(by.xpath("//div[contains(@id,'cdk-overlay')]"))


    public static getInstance(): ReportingPage {
        this.reportingPage = new ReportingPage()
        return this.reportingPage
    }

    private async inputTestNameWithClusterAndBrowser(testName: string, number: number | string = "last()"): Promise<any> {
        try {
            let txtTestName: ElementWrapper = new ElementWrapper(by.xpath((`(//input[@id='txtTestName'])[${number}]`)));
            await txtTestName.sendKeys(testName);
        } catch (error) {
            throw new errorwrapper.CustomError(this.inputTestNameWithClusterAndBrowser, error.message)
        }
    }

    private async inputCluster(cluserName: string, number: number | string = "last()"): Promise<any> {
        try {
            let txtCluster: ElementWrapper = new ElementWrapper(by.xpath((`(//input[@id='txtCluster'])[${number}]`)))
            await txtCluster.sendKeys(cluserName);
        } catch (error) {
            throw new errorwrapper.CustomError(this.inputCluster, error.message)
        }
    }

    private async addNewTest(number: number | string) {
        let btnAddNewTest: ElementWrapper = new ElementWrapper(by.xpath(`(//button[@class = 'btn btn-success btn-small-icon add-test-selection'])[${number}]`));
    }


    private async selectExeTime(number: number | string = "last()", clickTimeout: number = 1): Promise<any> {
        try {
            let mat_selectExeTime: ElementWrapper = new ElementWrapper(by.xpath((`(//mat-select[@id = 'ddlDate'])[${number}]`)))
            // let selectExeTimeLoad: ElementWrapper = new ElementWrapper(by.xpath("//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']"))

            await mat_selectExeTime.click(clickTimeout);
            await this.divOverlay.waitUntilDisappear(20);
            await this.selectMatOption(number, clickTimeout);
        } catch (error) {
            throw new errorwrapper.CustomError(this.selectExeTime, error.message)
        }
    }

    private async selectMatOption(number: string | number = 1, clickTimeout: number = 1) {
        try {
            let mat_selectMatOption: ElementWrapper = new ElementWrapper(by.xpath((`(//span[@class='mat-option-text'])[${number}]`)));
            await mat_selectMatOption.click(clickTimeout)
        } catch (error) {
            throw new errorwrapper.CustomError(this.selectExeTime, error.message)
        }
    }

    public async selectTestToReport(testNameWithClusterAndBrowser: string, clusterName: string, addNewTest: boolean = true, number: number | string = "last()"): Promise<any> {
        General.printDescribe("select test to report")
        await this.inputTestNameWithClusterAndBrowser(testNameWithClusterAndBrowser, number);
        await this.inputCluster(clusterName, number);
        await this.selectExeTime(number, 1);
        if (addNewTest) {
            await this.addNewTest(number)
        }
    }

    private async passTestStatistic(number: number | string): Promise<number> {
        let passTestStatistic: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic']//span[@class='text-passed'])[${number}]`));
        let passtest: string = await passTestStatistic.getText();
        let passtestNum: number = Number((passtest.split(" "))[0]);
        return passtestNum;
    }

    private async failTestStatistic(number: number | string): Promise<number> {
        let failTestStatistic: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic']//span[@class='text-failed'])[${number}]`));
        let failtest: string = await failTestStatistic.getText();
        let failtestNum: number = Number((failtest.split(" "))[0]);
        return failtestNum;
    }

    private async failTestByBugStatistic(number: number | string): Promise<number> {
        let failTestByBugStatistic: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic']//span[@class='text-failed-by-bug'])[${number}]`));
        let failtestbybug: string = await failTestByBugStatistic.getText();
        let failtestbybugNum: number = Number((failtestbybug.split(" "))[0]);
        return failtestbybugNum;
    }

    private async testNumberInfo(number: number | string) {
        let elementOfTestNumber: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[1]`));
        return await elementOfTestNumber.getText();
    }

    private async testAgentInfo(number: number | string) {
        let elementOfTestAgent: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[2]`));
        return await elementOfTestAgent.getText();
    }

    private async clusterInfo(number: number | string) {
        let elementOfCluster: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[3]`));
        return await elementOfCluster.getText();
    }

    private async browserInfo(number: number | string) {
        let elementOfbrowser: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[4]`));
        return await elementOfbrowser.getText();
    }

    private async gbuTenantInfo(number: number | string) {
        let elementOfGbuTenant: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[5]`));
        return await elementOfGbuTenant.getText();
    }

    private async testPlanInfo(number: number | string) {
        let elementOfTestPlan: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[6]`));
        return await elementOfTestPlan.getText();
    }

    private async testSetInfo(number: number | string) {
        let elementOfTestSet: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[7]`));
        return await elementOfTestSet.getText();
    }

    private async testExecuseInfo(number: number | string) {
        let elementOfTestExecuse: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[8]`));
        return await elementOfTestExecuse.getText();
    }

    private async passRateInfo(number: number | string) {
        let elementOfPassRate: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[9]`));
        return await elementOfPassRate.getText();
    }

    private async durationInfo(number: number | string) {
        let elementOfDuration: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[10]`));
        return await elementOfDuration.getText();
    }

    private async startTimeInfo(number: number | string) {
        let elementOfStartTime: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[11]`));
        return await elementOfStartTime.getText();
    }

    private async endTimeInfo(number: number | string) {
        let elementOfEndime: ElementWrapper = new ElementWrapper(by.xpath(`(//div[@class='cell statistic'])[${number}]/following-sibling::div[12]`));
        return await elementOfEndime.getText();
    }

    private async checkPassRateCorrectly(number: number | string): Promise<boolean> {
        let totalTest: number = Number(await this.passTestStatistic(number)) + Number(await this.failTestByBugStatistic(number)) + Number(await this.failTestStatistic(number))
        let calculatePassRate: number = (Number(await this.passTestStatistic(number)) * 100) / totalTest
        if (await this.passRateInfo(number) === `${calculatePassRate}%`) {
            return true;
        } else {
            console.log(`pass rate: ${await this.passRateInfo(number)} - calculate passrate: ${calculatePassRate}`);
            return false;
        }
    }

    public async checkReportDisplayCorrectly(browser: string, cluster: string, number: number | string): Promise<string[]> {
        let error: string[] = [];
        try {
            if (await this.gbuTenantInfo(number) === "") {
                error.push(`Test${number} - Gbu\\Tenant info is not correct`)
            }

            if (!(await this.checkPassRateCorrectly(number))) {
                error.push(`Test${number} - pass rate info is not correct`)
            }

            if (await this.testNumberInfo(number) === "") {
                error.push(`Test${number} - test number info is not correct`)
            }

            if (await this.testAgentInfo(number) === "") {
                error.push(`Test${number} - test agent info is not correct`)
            }

            if (await this.clusterInfo(number) !== cluster) {
                error.push(`Test${number} - cluster info is not correct`)
            }

            if (await this.browserInfo(number) !== browser) {
                error.push(`Test${number} - browser info is not correct`)
            }

            if (await this.testPlanInfo(number) === "") {
                error.push(`Test${number} - test plan info is not correct`)
            }

            if (await this.testSetInfo(number) === "") {
                error.push(`Test${number} - test set info is not correct`)
            }

            if (await this.testExecuseInfo(number) === "") {
                error.push(`Test${number} - test execuse info is not correct`)
            }

            if (await this.durationInfo(number) === "") {
                error.push(`Test${number} - duration info is not correct`)
            }

            if (await this.startTimeInfo(number) === "") {
                error.push(`Test${number} - start time info is not correct`)
            }

            if (await this.endTimeInfo(number) === "") {
                error.push(`Test${number} - end time info is not correct`)
            }
            return error;
        } catch (error) {
            throw new errorwrapper.CustomError(this.checkReportDisplayCorrectly, error.message)
        }
    }
}


