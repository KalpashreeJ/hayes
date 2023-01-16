import { BasePage } from "../../base/base.page";
import { NavigationToolbarControls } from "./navigationtoolbar.control";

export class NavigationToolbarPage extends BasePage {

    private navigationToolbarControls: NavigationToolbarControls;

    constructor() {
        super();
        this.navigationToolbarControls = new NavigationToolbarControls();
    }

    public async clickSaveButton() {
        await super.clickElement(this.navigationToolbarControls.saveReportButton);
    }
}