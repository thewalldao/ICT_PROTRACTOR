import { DashboardPage, InContactLink, Middle_Link } from "@Utilities/Constant";
import { General } from "@Utilities/General";
import ElementWrapper from "@Utilities/protractor-wrappers/element-wrapper";
import { browser, by, element, ElementFinder, protractor, until } from "protractor";
import User from "./User";



export default class Dashboard {
    private elemanageTestsPage: ElementWrapper = new ElementWrapper(by.xpath("//li[@id='manageTest']"));
    private eletestResultPage: ElementWrapper =  new ElementWrapper(by.xpath("//li[@id='testResults']"));
    private elereportingPage: ElementWrapper =  new ElementWrapper(by.xpath("//li[@id='reporting']"));
    private eleuiPerformanceTestPage: ElementWrapper =  new ElementWrapper(by.xpath("//li[@id='uiPerformanceTest']"));
    private eleadministratorPage: string = "//li[@id='administration']";
    // private _userProfile: string = "//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span";
    private _title: string = "//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]";
    private _loadingpage: string = "//div[@class='loader']";
    private _helloUser: string = "//li[@class='nav-item dropdown nav-item-highlight'] //a[@id='navbardrop']";
    private _profileDropdown: string = "//li[@class='nav-item dropdown nav-item-highlight show'] //div[@class='dropdown-menu dropdown-menu-right show']";
    protected PE = protractor.ExpectedConditions;
    private dasboardlink: string = InContactLink.LOCAL + Middle_Link.MIDDLE_LINK;

    private elementOfTitle() {
        return element(by.xpath("//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]"));
    }

    private elementOfDropdown() {
        return element(this._profileDropdown);
    }

    protected loadingElement() {
        return element(by.xpath(this._loadingpage));
    }

    protected elememtOfHelloUser() {
        return element(by.xpath(this._helloUser));
    }

    public async gotoManageTestPage(): Promise<any> {
        General.printDescribe("go to manage test page");    
        await this.elemanageTestsPage.waitForVisibilityOfCustom(10,5, "Manage Test Page tab")
        await this.elemanageTestsPage.click();
        // browser.navigate().to(this.dasboardlink+DashboardPage.MANAGER_TEST_PAGE)
        let ManageTestPage = require("./manage-test-page").default;
        return ManageTestPage.getInstance();
    }

    public async gotoTestResultPage(): Promise<any> {
        General.printDescribe("go to test result page");
        await this.eletestResultPage.waitForVisibilityOfCustom(10,5, "Test Result Page tab")
        await this.eletestResultPage.click()
        // browser.navigate().to(this.dasboardlink+DashboardPage.TEST_RESULTS_PAGE)
        let TestResultsPage = require("./test-result-page").default;
        return TestResultsPage.getInstance();
    }

    public async gotoReportingPage(): Promise<any> {
        General.printDescribe("go to reporting page");
        await this.elereportingPage.waitForVisibilityOfCustom(10,5, "Reporting Page tab")
        await this.elereportingPage.click()
        // browser.navigate().to(this.dasboardlink+DashboardPage.REPORTING_PAGE)
        let ReportingPage = require("./reporting-page").default;
        return ReportingPage.getInstance();
    }


    public async gotoUiPerformancePage(): Promise<any> {
        General.printDescribe("go to Ui performance page");
        await this.eleuiPerformanceTestPage.waitForVisibilityOfCustom(10,5, "UI Performance Page Tab")
        await this.eleuiPerformanceTestPage.click()
        // browser.navigate().to(this.dasboardlink+DashboardPage.PERFORMANCE_UI_TEST_PAGE)
        let UiPerformanceTestPage = require("./uiperformance-testcase-page").default;
        return UiPerformanceTestPage.getInstance()
    }


    protected elementOfUserOption(str: string) {
        return element(by.xpath(`//li[@class='nav-item dropdown nav-item-highlight show'] //div[@class='dropdown-menu dropdown-menu-right show']//a[contains(.,'${str}')]`));
    }
    public async selectUserOption(str: string) {
        if (this.elementOfDropdown().isDisplayed()) {
            await this.elememtOfHelloUser().click();
            await this.elementOfUserOption(str).click();
        } else {
            await this.elementOfUserOption(str).click();
        }

    }


    protected async elementIsClickable(ele: ElementFinder): Promise<boolean> {
        try {
            return await browser.wait(this.PE.elementToBeClickable(ele), 20000, "This element can not clickable");
        } catch (error) {
            console.log(error);
        }
    }

    // public async titleIsDisplay(): Promise<boolean> {
    //     try {
    //         await browser.wait(this.PE.visibilityOf(this.elementOfTitle()), 10000, 'Element taking too long to appear')
    //         return this.elementOfTitle().isDisplayed();
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    // public async waitForTitleVisible(): Promise<Dashboard> {
    //     try {
    //         await browser.wait(until.elementIsVisible(this.elementOfTitle()), 10000);
    //         return this;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // public async waitForVisible1(): Promise<Dashboard> {
    //     try {

    //         browser.wait(this.PE.visibilityOf(this.elementOfTitle()), 10000, 'Element taking too long to appear');
    //         return this;
    //     } catch (error) {
    //         console.log(error);      
    //     }
    // }


    public async getTitle(): Promise<string> {
        await browser.wait(this.PE.visibilityOf(this.elementOfTitle()), 100000, 'Element taking too long to appear');
        return this.elementOfTitle().getText();
    }



    public async hiUser(user: User): Promise<string> {
        try {
            // await browser.sleep(20000)
            await browser.wait(this.PE.visibilityOf(this.elememtOfHelloUser()), 10000, "element take to long to response")

            return await this.elememtOfHelloUser().getText();

        }
        catch (error) {
            console.log(error);
        }
    }


}


