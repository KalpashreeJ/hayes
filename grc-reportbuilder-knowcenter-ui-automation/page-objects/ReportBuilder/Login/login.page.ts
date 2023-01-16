import { BasePage } from "../../base/base.page";
import { LoginControls } from "./login.control";
import { userDataProvider } from "../../../configProviders/userDataProvider";


/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends BasePage {

    private appConfig: userDataProvider;
    private loginControls: LoginControls;

    constructor() {
        super();
        this.loginControls = new LoginControls();
    }

    public async login(user: string) {
        this.appConfig = new userDataProvider(user);
        await super.enterText(this.loginControls.userNameField, this.appConfig.userName);
        await super.enterText(this.loginControls.passwordField, this.appConfig.userPassword);
        await super.clickElement(this.loginControls.loginButton);
    }
}
