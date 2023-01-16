import { BasePage } from "../../base/base.page";
import { ProductInformationControls } from "./productInformation.control";
import { ReportSectionsPage } from "../ReportSection/reportsections.page";
import { NavigationToolbarPage } from "../NavigationBar/navigationtoolbar.page";
export let expectedPublicSummary;
export let expectedPrivateSummary;

export class ProductInformationPage extends BasePage {


    private productInformationControls: ProductInformationControls;
    private reportSectionPage: ReportSectionsPage;
    private navigationToolbarPage: NavigationToolbarPage;

    constructor() {
        super();
        this.productInformationControls = new ProductInformationControls();
        this.reportSectionPage = new ReportSectionsPage();
        this.navigationToolbarPage = new NavigationToolbarPage();
    }

    public async enterPublicSummary(summary: string) {
        await super.enterText(this.productInformationControls.publicSummaryField, summary);
    }

    public async enterPrivateSummary(summary: string) {
        await super.enterText(this.productInformationControls.privateSummaryField, summary);
    }

    public async enterTechnologyDescription(techDesc: string) {
        await super.enterText(this.productInformationControls.technologyDescriptionField, techDesc);
    }

    public async enterClinicalEvidenceComentary(comentary: string) {
        await super.clickElement(this.productInformationControls.clinicalEvidenceCheckField);
        await super.enterText(this.productInformationControls.clinicalEvidenceComentaryField, comentary);
    }

    public async enterRegulatoryStatusComentary(comentary: string) {
        await super.clickElement(this.productInformationControls.regulatoryStatusCheckField);
        await super.enterText(this.productInformationControls.regulatoryStatusComentaryField, comentary);
    }

    public async entersafetyConcernsComentary(comentary: string) {
        await super.clickElement(this.productInformationControls.safetyConcernsCheckField);
        await super.enterText(this.productInformationControls.safetyConcernsComentaryField, comentary);
    }

    public async enterProductInformDetails(dataObject: object) {
        const testdata = Object(dataObject);
        expectedPublicSummary=testdata.Summary.PublicSummary;
        expectedPrivateSummary=testdata.Summary.PrivateSummary;
        await this.reportSectionPage.clickProductInformationButton();
        await this.enterPublicSummary(testdata.Summary.PublicSummary);
        await this.enterPrivateSummary(testdata.Summary.PrivateSummary);
        await this.enterTechnologyDescription(testdata.Summary.TechnologyDescription);
        await this.enterClinicalEvidenceComentary(testdata.ProductChecklist.ClinicalEvidenceComentary);
        await this.enterRegulatoryStatusComentary(testdata.ProductChecklist.RegulatoryStatusComentary);
        await this.entersafetyConcernsComentary(testdata.ProductChecklist.SafetyConcernsComentary);
        await this.navigationToolbarPage.clickSaveButton();
    }
}