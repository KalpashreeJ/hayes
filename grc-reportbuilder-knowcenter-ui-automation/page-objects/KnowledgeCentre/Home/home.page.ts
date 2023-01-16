import { BasePage } from "../../Base/base.page";
import { TIME_OUT } from "../../Base/time-out.enum";
import { HomeControls } from "./home.control";
let index;
/**
 * sub page containing specific selectors and methods for a specific page
 */
export class HomePages extends BasePage {

    private homeControl: HomeControls;
    constructor() {
        super();
        this.homeControl = new HomeControls();
    }
    public async getHomePageTitle() {
        let logoTitle;
        logoTitle = await super.getBrowserTitle();
        return logoTitle;
    }
    public async searchReport(searchText: string) {
        await super.enterText(this.homeControl.searchTextArea, searchText, TIME_OUT.xxxl);
        await super.clickElement(this.homeControl.searchButton);
    }
    public async getReportTitleFromSearchList(expectedReportTitle) {
        let actualReportTitle;
        await super.waitTillElementClickable(this.homeControl.relevanceButton);
        let searchElements = await super.findElements(this.homeControl.ReportTitleFromSearchList);
        for (let i = 0; i <= searchElements.length; i++) {
            if (i == searchElements.length) {
                i = 0;
                await super.clickElement(this.homeControl.nextButton);
                searchElements = await super.findElements(this.homeControl.ReportTitleFromSearchList);
            }
            else {
                actualReportTitle = await searchElements[i].getText();
                if (actualReportTitle === expectedReportTitle) {
                    index = i;
                    return actualReportTitle;
                }
            }
        }
    }

    public async getUrl(applicationTitle: string) {
        await super.switchToTabByTitle(applicationTitle);
        var url = await browser.getUrl();
        return url;
    }

    public async getReportTitle() {
        var reportTitle = await super.getElementText(this.homeControl.reportTitle);
        return reportTitle;
    }

    public async clickOnLogoLink() {
        await super.clickElement(this.homeControl.logoLink);
    }
    public async clickOnLogout() {
        await super.clickElement(this.homeControl.userMenuDropdown);
        await super.clickElement(this.homeControl.logoutButton);
    }

    public async getSummaryFromSearchresults(expectedReportTitle) {
        await this.getReportTitleFromSearchList(expectedReportTitle);
        await super.clickElement(this.homeControl.SearchResultsTableRow + '[' + (index + 1) + ']' + this.homeControl.arrowButton);
        let actualSummary = await super.getElementText(this.homeControl.summaryText);
        return actualSummary;
    }
}