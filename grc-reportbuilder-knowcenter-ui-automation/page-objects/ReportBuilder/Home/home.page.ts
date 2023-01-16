import { BasePage } from "../../base/base.page";
import { HomePageControls } from "./home.control";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class HomePage extends BasePage {

    private homePageControls: HomePageControls;

    constructor() {
        super();
        this.homePageControls = new HomePageControls();
    }

    public async getHomePageLogo() {
        let logoText;
        logoText = await super.getElementText(this.homePageControls.logoText);
        return logoText;
    }

    public async clickArticleLink() {
        await super.clickElement(this.homePageControls.articleLink);
    }

    public async clickCreateLink() {
        await super.clickAndWaitUntillDropdownDisplayed(this.homePageControls.articleLink, this.homePageControls.createLink)
        await super.clickElement(this.homePageControls.createLink);
    }

    public async clickOpenLink() {
        await super.clickAndWaitUntillDropdownDisplayed(this.homePageControls.articleLink, this.homePageControls.openLink)
        await super.clickElement(this.homePageControls.openLink);
    }

    public async clickOnLogout() {
        await super.clickElement(this.homePageControls.logoutButton);
    }

    public async isLogoutButtonExists() {
        return super.isElementExists(this.homePageControls.logoutButton);
    }
}
