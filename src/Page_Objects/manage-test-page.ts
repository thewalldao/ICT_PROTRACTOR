import { General } from "@Utilities/General";
import BrowserWrapper from "@Utilities/protractor-wrappers/browser-wrapper";
import ElementWrapper from "@Utilities/protractor-wrappers/element-wrapper";
import { errorwrapper } from "@Utilities/protractor-wrappers/error-wrapper";
import { Browser, browser, by, element, ElementFinder } from "protractor";
import { protractor } from "protractor";
import Dashboard from "./dashboard";
import TestResultsPage from "./test-result-page";
import User from "./User";

export default class ManageTestPage extends Dashboard {
    private static manageTestPage: ManageTestPage = null;
    private elementHelpButton: ElementFinder = element(by.xpath("//button[@id='btnGuideline']"));
    private elementSyncTestButton: ElementFinder = element(by.xpath("//button[@id='btnSyncTestsModal']"));
    private elementTestGroups: ElementFinder = element(by.xpath("//a[@href='#testgroups']"));
    private elementGuideLineNextButton: ElementFinder = element(by.xpath("//div[@class='enjoyhint_next_btn']"));
    private elementGuideLineSkipButton: ElementFinder = element(by.xpath("//div[@class='enjoyhint_skip_btn']"));
    private elementLastestResultTestFirstRow: ElementWrapper = new ElementWrapper(element(by.xpath("(//i[@class='material-icons'][text()='trending_up'])[1]")))

    // public elementSyncTestText: ElementFinder = element(by.xpath("//button[@id='btnSyncTestsModal']//span"))
    // public elementEditTabText: ElementFinder = element(by.xpath("//button[@id='btnEditTab']//span"))



    constructor() {
        super()
    }

    public async clickHelpButton(): Promise<void> {
        General.printDescribe("click help button")
        try {
            await browser.wait(this.PE.visibilityOf(this.elementHelpButton)), 10000, "Help Button is not display"
            await this.elementHelpButton.click();
        } catch (error) {
            console.log(error);
        }
    }

    public static getInstance(): ManageTestPage {
        this.manageTestPage = new ManageTestPage()
        return this.manageTestPage
    }

    public async clickLastestResultActionOfTestAndGotoTestResultPage(test: string = ""):Promise<TestResultsPage> {
        General.printDescribe("click lastest result action");
        try {
            if (test !== "") {
                let ele_lastestResult: ElementWrapper = new ElementWrapper(element(by.xpath("//tbody//td[5]//span[text()='" + test + "']/../..//i[text()='trending_up']")));
                (await ele_lastestResult.waitForVisibilityOfCustom(10,5,"lastest result action")).click()
                // await ele_lastestResult.click()
                // let newWinHandle = await BrowserWrapper.getNewWindowHandle()
                // await BrowserWrapper.switchWindowByHandle(newWinHandle)
                await BrowserWrapper.switchWindowByTitle("Single Test Result")
                // await BrowserWrapper.sleepInSecond(2);
                return new TestResultsPage();
            } else {
                await this.elementLastestResultTestFirstRow.waitForVisibilityOfCustom(10,5,"lastest result action")
                await this.elementLastestResultTestFirstRow.click();
                // let newWinHandle = await BrowserWrapper.getNewWindowHandle()
                await BrowserWrapper.switchWindowByTitle("Single Test Result")
                // await BrowserWrapper.sleepInSecond(2);
                return new TestResultsPage();
            }
        }catch(err){
            throw new errorwrapper.CustomError(this.clickLastestResultActionOfTestAndGotoTestResultPage, err.message);
        }
    }

}