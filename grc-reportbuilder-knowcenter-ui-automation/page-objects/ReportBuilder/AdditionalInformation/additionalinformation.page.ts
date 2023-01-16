import { BasePage } from "../../base/base.page";
import { AdditionalInformationControls } from "./additionalinformation.control";
import { ReportSectionsPage } from "../ReportSection/reportsections.page";
import { NavigationToolbarPage } from "../NavigationBar/navigationtoolbar.page";
import { CommonControls } from "../../utils/common.control";

export class AdditionalInformationPage extends BasePage {

    private additionalInformationControls: AdditionalInformationControls;
    private reportSectionPage: ReportSectionsPage;
    private navigationToolbarPage: NavigationToolbarPage;
    private commonControls: CommonControls;

    constructor() {
        super();
        this.additionalInformationControls = new AdditionalInformationControls();
        this.reportSectionPage = new ReportSectionsPage();
        this.navigationToolbarPage = new NavigationToolbarPage();
        this.commonControls = new CommonControls();
    }

    public async addHayesContentDetails(uniqueID: string, value: string) {
        await super.clickElement(this.additionalInformationControls.addHayesReportField);
        await super.waitTillElementDisplayed(this.additionalInformationControls.reportUniqueIDField);
        await super.enterText(this.additionalInformationControls.reportUniqueIDField, uniqueID);
        await super.clickAndWaitUntillDropdownDisplayed(this.additionalInformationControls.relationTypeField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, value, this.commonControls.navigateToParentPath);
        await super.clickElement(this.additionalInformationControls.updateButton);
    }

    public async addAdditionalResourceInformation(resourceDetails: string) {
        await super.enterText(this.additionalInformationControls.additionalResourcesField, resourceDetails);
    }

    public async enterAdditionalInformationDetails(dataObject: object) {
        const testdata = Object(dataObject);
        await this.reportSectionPage.clickAdditionalInformationButton();
        await super.waitTillElementDisplayed(this.commonControls.sectionLabel);
        await this.addHayesContentDetails(testdata.HayesContent.ReportID, testdata.HayesContent.RelationType);
        await this.addAdditionalResourceInformation(testdata.AdditionalResources);
        await this.navigationToolbarPage.clickSaveButton();
    }
}