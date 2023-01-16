import { BasePage } from "../../../page-objects/Base/base.page";
import { OpenReportControls } from "./openReport.control";
import { CommonControls } from "../../utils/common.control";
import { Element } from "webdriverio";


/**
 * sub page containing specific selectors and methods for a specific page
 */
export class OpenReportPage extends BasePage {

    private openReportControl: OpenReportControls;
    private commonControl: CommonControls;

    constructor() {
        super();
        this.openReportControl = new OpenReportControls();
        this.commonControl = new CommonControls();
    }

    public async searchReports(SearchText: string) {
        await super.waitTillElementClickable(this.openReportControl.SearchResultsTableRow + '[' + (1) + ']');
        await super.waitUntilElementExists(this.openReportControl.FindReportsField);
        await super.clickElement(this.openReportControl.FindReportsField);
        await super.enterText(this.openReportControl.SearchTextbox, SearchText);
    }

    public async getUniqueIdFromSearchResults(expectedUniqueID: string) {
        await super.waitTillElementClickable(this.openReportControl.SearchResultsTableRow + this.openReportControl.tableContentPartialXPath + '"' + expectedUniqueID + '")]');
        const rowsElement: Element<"async">[] = await super.findElements(this.openReportControl.SearchResultsTableRow);
        for (let i = 0; i <= await rowsElement.length; i++) {
            if (i == rowsElement.length) {
                i = 0;
                await super.clickElement(this.openReportControl.nextPage);
                await super.waitUntilTextDisplayed(this.openReportControl.SearchResultsTableRow + '[' + (1) + ']' + this.openReportControl.SearchResultUniqueIdcolumn, expectedUniqueID)
            }
            else {
                await super.waitUntilTextDisplayed(this.openReportControl.SearchResultsTableRow + '[' + (1) + ']' + this.openReportControl.SearchResultUniqueIdcolumn, expectedUniqueID)
                let actualUniqueID = await super.getElementText(this.openReportControl.SearchResultsTableRow + '[' + (i + 1) + ']' + this.openReportControl.SearchResultUniqueIdcolumn);
                if (actualUniqueID === expectedUniqueID) {
                    return actualUniqueID;
                }
            }
        }
    }

    public async getTitleFromSearchResults(expectedTitle: string, expectedUniqueID: string) {
        let rowsElement = await super.findElements(this.openReportControl.SearchResultsTableRow);
        for (let i = 0; i <= rowsElement.length; i++) {
            if (i == rowsElement.length) {
                i = 0;
                await super.clickElement(this.openReportControl.nextPage);
                await super.waitUntilTextDisplayed(this.openReportControl.SearchResultsTableRow + '[' + (1) + ']' + this.openReportControl.SearchResultTitlecolumn, expectedTitle)
            }
            else {
                await super.waitUntilTextDisplayed(this.openReportControl.SearchResultsTableRow + '[' + (1) + ']' + this.openReportControl.SearchResultTitlecolumn, expectedTitle)
                let actualUniqueID = await super.getElementText(this.openReportControl.SearchResultsTableRow + '[' + (i + 1) + ']' + this.openReportControl.SearchResultUniqueIdcolumn);
                if (actualUniqueID === expectedUniqueID) {
                    let actualTitle = await super.getElementText(this.openReportControl.SearchResultsTableRow + '[' + (i + 1) + ']' + this.openReportControl.SearchResultTitlecolumn);
                    if (actualTitle === expectedTitle) {
                        return actualTitle;
                    }
                }
            }
        }
    }

    public async clickEdit() {
        await super.clickElement(this.openReportControl.editButton);
    }

    public async clickReadOnlyButton() {
        await super.clickElement(this.openReportControl.readOnlyButton);
    }

    public async selectReport(expectedTitle: string, expectedUniqueID: string) {
        let reportTitle = await this.getTitleFromSearchResults(expectedTitle, expectedUniqueID);
        await super.waitUntilElementExists(this.openReportControl.SearchResultsTableRow + this.openReportControl.tableContentPartialXPath + '"' + expectedUniqueID + '")]' + this.commonControl.navigateToParentPath + this.commonControl.navigateToParentPath + this.openReportControl.tableContentPartialXPath + '"' + reportTitle + '")]');
        await super.clickElement(this.openReportControl.SearchResultsTableRow + this.openReportControl.tableContentPartialXPath + '"' + expectedUniqueID + '")]' + this.commonControl.navigateToParentPath + this.commonControl.navigateToParentPath + this.openReportControl.tableContentPartialXPath + '"' + reportTitle + '")]');
    }
}