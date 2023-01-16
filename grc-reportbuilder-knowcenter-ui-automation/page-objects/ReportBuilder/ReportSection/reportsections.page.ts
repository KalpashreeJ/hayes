import { BasePage } from "../../base/base.page";
import { ReportSectionsControls } from "./reportsections.control";

export class ReportSectionsPage extends BasePage {


    private reportSectionControls: ReportSectionsControls;

    constructor() {
        super();
        this.reportSectionControls = new ReportSectionsControls();
    }

    public async clickMetadataButton() {
        await super.waitUntilElementExists(this.reportSectionControls.metadataLink);
        await super.clickElement(this.reportSectionControls.metadataLink);
    }

    public async clickProductInformationButton() {
        await super.waitUntilElementExists(this.reportSectionControls.productInformationLink);
        await super.clickElement(this.reportSectionControls.productInformationLink);
    }

    public async clickProductTableButton() {
        await super.waitUntilElementExists(this.reportSectionControls.productTableLink);
        await super.clickElement(this.reportSectionControls.productTableLink);
    }

    public async clickClinicalEvidenceButton() {
        await super.waitUntilElementExists(this.reportSectionControls.clinicalEvidenceLink);
        await super.clickElement(this.reportSectionControls.clinicalEvidenceLink);
    }

    public async clickAdditionalInformationButton() {
        await super.waitUntilElementExists(this.reportSectionControls.additionalInformationLink);
        await super.clickElement(this.reportSectionControls.additionalInformationLink);
    }

    public async clickAbstractsButton() {
        await super.waitUntilElementExists(this.reportSectionControls.abstractsLink);
        await super.clickElement(this.reportSectionControls.abstractsLink);
    }

    public async clickCommentsButton() {
        await super.waitUntilElementExists(this.reportSectionControls.commentsLink);
        await super.clickElement(this.reportSectionControls.commentsLink);
    }

    public async clickReleaseButton() {
        await super.waitUntilElementExists(this.reportSectionControls.metadataLink);
        await super.clickElement(this.reportSectionControls.releaseLink);
    }
}
