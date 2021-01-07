import { DashboardPage, InContactLink, Middle_Link } from "@Utilities/Constant";
import { General } from "@Utilities/General";
import { browser, by, element, ElementFinder, protractor, until } from "protractor";
import User from "./User";



export default class Dashboard {
    private _manageTestsPage: string = "//li[@id='manageTest']";
    private _testResultPage: string = "//li[@id='testResults']";
    private _reportingPage: string = "//li[@id='reporting']";
    private _uiPerformanceTestPage: string = "//li[@id='uiPerformanceTest']";
    private _administratorPage: string = "//li[@id='administration']";
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

    public gotoManageTestPage(): any {
        General.printDescribe("go to manage test page");
        browser.navigate().to(this.dasboardlink+DashboardPage.MANAGER_TEST_PAGE)
        let ManageTestPage = require("./manage-test-page").default;
        return new ManageTestPage();
    }

    public gotoTestResultPage(): any {
        General.printDescribe("go to test result page");
        browser.navigate().to(this.dasboardlink+DashboardPage.TEST_RESULTS_PAGE)
        let TestResultsPage = require("./test-result-page").default;
        return new TestResultsPage()
    }

    public gotoReportingPage(): any {
        General.printDescribe("go to reporting page");
        browser.navigate().to(this.dasboardlink+DashboardPage.REPORTING_PAGE)
        let ReportingPage = require("./reporting-page").default;
        return new ReportingPage()
    }


    public gotoUiPerformancePage(): any {
        General.printDescribe("go to Ui performance page");
        browser.navigate().to(this.dasboardlink+DashboardPage.PERFORMANCE_UI_TEST_PAGE)
        let UiPerformanceTestPage = require("./uiperformance-testcase-page").default;
        return new UiPerformanceTestPage()
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


