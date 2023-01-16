import { BasePage } from "../../base/base.page";
import { AbstractsControls } from "./abstracts.control";
import { ReportSectionsPage } from "../ReportSection/reportsections.page";
import { NavigationToolbarPage } from "../NavigationBar/navigationtoolbar.page";

export class AbstractsPage extends BasePage {

    private abstractsControls: AbstractsControls;
    private reportSectionPage: ReportSectionsPage;
    private navigationToolbarPage: NavigationToolbarPage;

    constructor() {
        super();
        this.abstractsControls = new AbstractsControls();
        this.reportSectionPage = new ReportSectionsPage();
        this.navigationToolbarPage = new NavigationToolbarPage();
    }

    public async enterAbstractsInformation(dataObject: object) {
        const testdata = Object(dataObject);
        await this.reportSectionPage.clickAbstractsButton();
        await super.enterText(this.abstractsControls.abstractsField, testdata.Abstracts);
        await super.clickElement(this.abstractsControls.abstractsField);
        await this.navigationToolbarPage.clickSaveButton();
    }
}