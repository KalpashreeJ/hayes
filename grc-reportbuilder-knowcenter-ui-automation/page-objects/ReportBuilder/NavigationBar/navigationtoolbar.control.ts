export class NavigationToolbarControls {

    constructor() {
    }

    get saveReportButton() {
        return "//button/span/mat-icon[contains(text(),'save')]";
    }

    get previousSectionButton() {
        return "//button/span/mat-icon[contains(text(),'skip_previous')]";
    }

    get nextSectionButton() {
        return "//button/span/mat-icon[contains(text(),'skip_next')]";
    }

    get closeReportButton() {
        return "//button/span/mat-icon[contains(text(),'close')]";
    }
}