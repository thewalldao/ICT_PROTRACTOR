import { General } from "@Utilities/General";
import { browser, by, element, ElementFinder } from "protractor";
import { protractor } from "protractor";
import { Dashboard } from "./dashboard";
import { User } from "./User";

export class ManageTestPage extends Dashboard {
    private elementHelpButton: ElementFinder = element(by.xpath("//button[@id='btnGuideline']"));
    private elementSyncTestButton: ElementFinder = element(by.xpath("//button[@id='btnSyncTestsModal']"));
    private elementTestGroups: ElementFinder = element(by.xpath("//a[@href='#testgroups']"));
    private elementGuideLineNextButton: ElementFinder = element(by.xpath("//div[@class='enjoyhint_next_btn']"));
    private elementGuideLineSkipButton: ElementFinder = element(by.xpath("//div[@class='enjoyhint_skip_btn']"));
    public elementSyncTestText: ElementFinder = element(by.xpath("//button[@id='btnSyncTestsModal']//span"))
    public elementEditTabText: ElementFinder = element(by.xpath("//button[@id='btnEditTab']//span"))

 
    public async clickHelpButton(): Promise<void> {
        General.printDescribe("click help button")
        try {
            await browser.wait(this.PE.visibilityOf(this.elementHelpButton)), 10000, "Help Button is not display"
            await this.elementHelpButton.click();
        } catch (error) {
            console.log(error);
        }
    }
}