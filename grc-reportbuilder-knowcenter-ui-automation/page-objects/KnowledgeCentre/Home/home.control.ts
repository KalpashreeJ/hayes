export class HomeControls {

    constructor() {

    }
    get ReportTitleFromSearchList() {
        return "//search-results//div[@class='title']/a";
    }
    get searchTextArea() {
        return "//div[@class='welcomeDiv']//search-bar//input";
    }
    get searchButton() {
        return "//div[@class='welcomeDiv']//search-bar//button";
    }
    get loginButton() {
        return "//button[@class='btn btn-login']";
    }
    get homeTitle() {
        return "//title";
    }
    get reportTitle() {
        return "div.row.page-title div";
    }
    get relevanceButton() {
        return "//div/span[text()='RELEVANCE']";
    }
    get nextButton() {
        return "//button[@class='next']"
    }
    get logoLink() {
        return "//*[contains(@class,'logo')]/a";
    }
    get summaryText() {
        return "//*[@class='content']";
    }
    get userMenuDropdown() {
        return "div.userMenu button";
    }
    get logoutButton() {
        return "//a[text()='Logout']";
    }
    get SearchResultsTableRow() {
        return "//search-results//li";
    }
    get arrowButton() {
        return "//app-icon[@icon='keyboard_arrow_up']";
    }
}