import { General } from "@Utilities/general";
import { browser, by, element, ElementFinder, protractor, until } from "protractor";
import { User } from "./User";



export class Dashboard {
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

    public async gotoManageTestPage(): Promise<Dashboard> {
        General.printDescribe("go to manage test page");
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._manageTestsPage))), 10000,"manage test tab is not display")
            await element(by.xpath(this._manageTestsPage)).click();
            return this
        } catch (error) {
            console.log(error);
        }

    }

    public async gotoTestResultPage(): Promise<Dashboard> {
        General.printDescribe("go to test result page");
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._testResultPage))), 10000,"test result tab is not display")
            await element(by.xpath(this._testResultPage)).click();
            return this
        } catch (error) {
            console.log(error);
        }
    }

    public async gotoReportingPage(): Promise<Dashboard> {
        General.printDescribe("go to reporting page");
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._reportingPage))), 10000,"reporting tab is not display")
            await element(by.xpath(this._reportingPage)).click();
            return this
        } catch (error) {
            console.log(error);
        }
    }

    public async gotoUiPerformancePage(): Promise<Dashboard> {
        General.printDescribe("go to Ui performance page");
        try {
            await browser.wait(this.PE.visibilityOf(element(by.xpath(this._uiPerformanceTestPage))), 10000,"performance page tab is not display")
            await element(by.xpath(this._uiPerformanceTestPage)).click();
            return this
        } catch (error) {
            console.log(error);
        }
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

    protected async elementIsHighLight(ele: ElementFinder): Promise<boolean> {
        try {
            return this.elementIsClickable(ele);
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
        await browser.wait(this.PE.presenceOf(this.elementOfTitle()), 100000, 'Element taking too long to appear');
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


