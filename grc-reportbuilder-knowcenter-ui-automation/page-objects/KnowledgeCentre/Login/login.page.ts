import { BasePage } from "../../Base/base.page";
import { HomeControls } from "../Home/home.control";
import { urlDataProvider } from "../../../configProviders/urlProvider";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPages extends BasePage {
    private homeControl: HomeControls;
    private appConfig: urlDataProvider;

    constructor() {
        super();
        this.homeControl = new HomeControls();
    }

    public async clickOnLoginButton() {
        await super.clickElement(this.homeControl.loginButton);
    }

    public async navigateToKnowledgeCentre(enviornment: string) {
        this.appConfig = new urlDataProvider(enviornment);
        await browser.newWindow(this.appConfig.url);
    }
}
