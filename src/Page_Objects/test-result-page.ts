import TestInfo from "@data-objects/general/test-info";
import { General } from "@Utilities/General";
import ElementWrapper from "@Utilities/protractor-wrappers/element-wrapper";
import { by, element } from "protractor";
import Dashboard from "./dashboard";

export default class TestResultsPage extends Dashboard {
    private static testResultPage: TestResultsPage = null;
    private _ResultTestNameWithCluserAndBrowser: string = "//app-test-results-single//div[contains(@class,'justify-content-center')]//h3";
    private elementTestNameSearching: ElementWrapper = new ElementWrapper(by.xpath("//input[@id='suiteName']"));
    private elementDateRangeSearching: ElementWrapper = new ElementWrapper(by.xpath("//input[@id='dateRange']"));
    private elementSearchButton: ElementWrapper = new ElementWrapper(by.xpath("//button[@id='btnGo']"));
    private elementTestBrowserInfo: ElementWrapper = new ElementWrapper(by.xpath("//span[contains(text(),'Browser')]/../following-sibling::div"));
    private elementTestCusterInfo: ElementWrapper = new ElementWrapper(by.xpath("//span[contains(text(),'Cluster')]/../following-sibling::div"))
    private elementTestNumberInfo: ElementWrapper = new ElementWrapper(by.xpath("//span[contains(text(),'Test number')]/../following-sibling::div"))
    private elementTestAgentInfo: ElementWrapper = new ElementWrapper(by.xpath("//span[contains(text(),'Test Agent')]/../following-sibling::div"))
    private elementTestDurationInfo: ElementWrapper = new ElementWrapper(by.xpath("//span[contains(text(),'Duration')]/../following-sibling::div"))
    private elementTestPassRateInfo: ElementWrapper = new ElementWrapper(by.xpath("//span[contains(text(),'Pass Rate')]/../following-sibling::div"))
    private elementTotalTestNumber: ElementWrapper = new ElementWrapper(by.xpath("//div[.='Total']/preceding-sibling::div//div[@class='count']"))
    private elementPassedTestNumber: ElementWrapper = new ElementWrapper(by.xpath("//div[.='Passed']/preceding-sibling::div//div[@class='count']"))
    private elementFailedTestNumber: ElementWrapper = new ElementWrapper(by.xpath("//div[.='Failed']/preceding-sibling::div//div[@class='count']"))
    private elementFailedByBugTestNumber: ElementWrapper = new ElementWrapper(by.xpath("//div[.='Failed By Bug']/preceding-sibling::div//div[@class='count']"))

    public static getInstance(): TestResultsPage {
        this.testResultPage = new TestResultsPage()
        return this.testResultPage
    }

    public async isLastestTestResultDisplay(testNameWithCluserAndBrowser: string = ""): Promise<boolean> {
        // await General.isElementVisibleOf(this._ResultTestName, 10 , "");
        if (testNameWithCluserAndBrowser !== "") {
            return await element(by.xpath("//app-test-results-single//div[contains(@class,'justify-content-center')]//h3[.='" + testNameWithCluserAndBrowser + "']")).isDisplayed();

        } else {
            return await element(by.xpath(this._ResultTestNameWithCluserAndBrowser)).isDisplayed();
        }
    }

    public async searchTest(testNameWithBrowserAndCluster: string, dateRange:string = "Latest"): Promise<TestResultsPage> {
        General.printDescribe("searching test")
        await this.elementTestNameSearching.sendKeys(testNameWithBrowserAndCluster);
        await this.elementDateRangeSearching.sendKeys(dateRange);
        await this.elementSearchButton.click();
        return this;
    }

    private async checkTotalTestEqualPassMinusFail() : Promise<boolean> {
        let total: number = Number(await this.elementTotalTestNumber.getText());
        let passedMinusFailed : number = Number(await this.elementPassedTestNumber.getText()) + (Number(await this.elementFailedTestNumber.getText()) + Number(await this.elementFailedByBugTestNumber.getText()));
        if (total === passedMinusFailed){
            return true;
        }else{
            console.log(`total: ${total} - passed minus failed: ${passedMinusFailed}`);
            return false;
        }
    }

    private async checkPassRateCorrectly() : Promise<boolean> {
        let passRate: string = await this.elementTestPassRateInfo.getText();
        let calculatePassRate:string = `${((Number(await this.elementPassedTestNumber.getText()) * 100)/ Number(await this.elementTotalTestNumber.getText()))}%`;
        if (passRate === calculatePassRate){
            return true;
        }else{
            console.log(`pass rate: ${passRate} - calculate passrate: ${calculatePassRate}`);
            return false;
        }
    }

    public async checkTestResultDisplayCorrectly(testInfo: TestInfo) {
        let error = [];
        if (await this.elementTestBrowserInfo.getText() !== testInfo.getBrowser()){
            error.push("Browser is not correct");
        }
        if (await this.elementTestCusterInfo.getText() !== testInfo.getCluster()){
            error.push("Cluter is not correct");
        }
        if (!(await this.checkTotalTestEqualPassMinusFail())){
            error.push("Total test is not equal Passed test minus Failed test");
        }
        if (!(await this.checkPassRateCorrectly())){
            error.push("Pass Rate is not correct");
        }
        if (!(await this.elementTestDurationInfo.isDisplayed())){
            error.push("Test Duration Info is not display");
        }
        if (!(await this.elementTestAgentInfo.isDisplayed())){
            error.push("Test Agent Info is not display");
        }
        if (!(await this.elementTestNumberInfo.isDisplayed())){
            error.push("Test Number Info is not display");
        }
        return error;
    }



}