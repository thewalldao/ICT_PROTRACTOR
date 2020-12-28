import { browser, by, element, protractor, until } from "protractor";
import { User } from "./User";



export class Dashboard {
    private _manageTestsPage: string = "//li[@id='manageTest']";
    private _testResultPage: string = "//li[@id='testResults']";
    private _reportingPage: string = "//li[@id='reporting']";
    private _uiPerformanceTestPage: string = "//li[@id='uiPerformanceTest']";
    private _administratorPage: string = "//li[@id='administration']";
    private _userProfile: string = "//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span";
    private _title: string = "//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]";
    private _loadingpage: string = "//div[@class='loader']";
    private _helloUser = "//li[@class='nav-item dropdown nav-item-highlight'] //a[@id='navbardrop']";
    private PE = protractor.ExpectedConditions;

    public elementOfTitle() {
        return element(by.xpath("//div[@class='container-fluid bg-tmdblack shadow-sm page-header']//span[.]"));
    }

    protected loadingElement() {
        return element(by.xpath(this._loadingpage));
    }

    protected elememtOfHelloUser() {
        return element(by.xpath(this._helloUser));
    }
    
    public async gotoManageTestPage(): Promise<void> {
        await element(by.xpath(this._manageTestsPage)).click();
    }

    public async gotoTestResultPage(): Promise<any> {
        await element(by.xpath(this._testResultPage)).click();

    }

    public async gotoReportingPage(): Promise<void> {
        await element(by.xpath(this._reportingPage)).click();

    }

    public async gotoUiPerformancePage(): Promise<void> {
        await element(by.xpath(this._uiPerformanceTestPage)).click();
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
        catch(error){
            console.log(error);
        }
    }

    
}


