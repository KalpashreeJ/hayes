export class OpenReportControls {

    constructor() {

    }

    get RecentlyViewedField() {
        return "//div/div[contains(text(),'Recently viewed')]";
    }

    get OpenedReportsField() {
        return "//div/div[contains(text(),'Opened Reports')]";
    }

    get FindReportsField() {
        return "//div/div[contains(text(),'Find Reports')]";
    }

    get SearchTextbox() {
        return "//input[@data-placeholder='find articles']";
    }

    get SearchResultsTableRow() {
        return "//div[@class='cdk-overlay-pane']//mat-table/mat-row";
    }

    get SearchResultUniqueIdcolumn() {
        return "/mat-cell[contains(@class,'cdk-column-uid')]/span"
    }

    get SearchResultTitlecolumn() {
        return "/mat-cell[contains(@class,'cdk-column-title')]/span"
    }

    get nextPage() {
        return "//button[@aria-label='Next page']";
    }

    get itemPerPageField() {
        return "//mat-select[@aria-label='Items per page:']";
    }

    get dropdownOption() {
        return "//div[@aria-label='Items per page:']/mat-option";
    }

    get readOnlyButton() {
        return "//button/span[text()=' Read Only ']";
    }

    get tableContentPartialXPath() {
        return "//span[contains(text(),"
    }

    get editButton() {
        return "//button/span[text()=' Edit ']";
    }
}