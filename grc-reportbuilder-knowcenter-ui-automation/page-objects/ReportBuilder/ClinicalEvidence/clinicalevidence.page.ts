import { BasePage } from "../../base/base.page";
import { ClinicalEvidenceControls } from "./clinicalevidence.control";
import { ReportSectionsPage } from "../ReportSection/reportsections.page";
import { NavigationToolbarPage } from "../NavigationBar/navigationtoolbar.page";
import { CommonControls } from "../../utils/common.control";
import { DateTimeHelper } from "../../Base/dateTimeHelper";
import { KeyControls } from "../../utils/key.control";

export class ClinicalEvidencePage extends BasePage {

    private clinicalEvidenceControls: ClinicalEvidenceControls;
    private reportSectionPage: ReportSectionsPage;
    private navigationToolbarPage: NavigationToolbarPage;
    private commonControls: CommonControls;
    private dateTimeHelper: DateTimeHelper;
    private keyControls: KeyControls;

    constructor() {
        super();
        this.clinicalEvidenceControls = new ClinicalEvidenceControls();
        this.reportSectionPage = new ReportSectionsPage();
        this.navigationToolbarPage = new NavigationToolbarPage()
        this.commonControls = new CommonControls();
        this.dateTimeHelper = new DateTimeHelper();
        this.keyControls = new KeyControls();
    }

    public async enterLiteratureSearchDescription(desc: string) {
        await this.enterText(this.clinicalEvidenceControls.literatureSearchDescriptionField, desc);
    }

    public async enterLiteratureSearchDate(date: string) {
        const literatueSearchDate = this.dateTimeHelper.getFormattedDate(date);
        await super.handleKeyControls(this.keyControls.tabKey);
        await (await super.findElement(this.clinicalEvidenceControls.dateField)).setValue(literatueSearchDate);
    }

    public async addLiteratureSearchDetails(database: string, date: string, yieldValue: string, selectedValue: string, rationaleValue: string, terms: string, limits: string) {

        await this.clickElement(this.clinicalEvidenceControls.addLiteratureSearchButton);
        await this.waitTillElementDisplayed(this.clinicalEvidenceControls.databaseField);
        await super.clickAndWaitUntillDropdownDisplayed(this.clinicalEvidenceControls.databaseField, this.commonControls.dropDownOptions);
        await this.selectDropdownValue(this.commonControls.dropDownOptions, database, this.commonControls.navigateToParentPath);
        await this.enterLiteratureSearchDate(date);
        await this.enterText(this.clinicalEvidenceControls.yieldField, yieldValue);
        await this.enterText(this.clinicalEvidenceControls.selectedField, selectedValue);
        await this.enterText(this.clinicalEvidenceControls.rationaleField, rationaleValue);
        await this.clickElement(this.clinicalEvidenceControls.termsField);
        await this.enterText(this.clinicalEvidenceControls.termsField, terms);
        await this.enterText(this.clinicalEvidenceControls.limitField, limits);
        await this.clickElement(this.clinicalEvidenceControls.updateButton);
    }

    public async enterPublishedClinicalStudyDescription(desc: string) {
        await this.enterText(this.clinicalEvidenceControls.publishedClinicalStudyDescription, desc);
    }

    public async addPublishedStudies(techDesc: string, citationDetails: string, evidenceValue: string) {
        await this.clickElement(this.clinicalEvidenceControls.addPublishedStudiesField);
        await this.waitTillElementDisplayed(this.clinicalEvidenceControls.comparisonTechnologyField);
        await this.enterText(this.clinicalEvidenceControls.comparisonTechnologyField, techDesc);
        await this.enterText(this.clinicalEvidenceControls.citationsField, citationDetails);
        await this.clickAndWaitUntillDropdownDisplayed(this.clinicalEvidenceControls.typeOfEvidence, this.commonControls.dropDownOptions);
        await this.selectDropdownValue(this.commonControls.dropDownOptions, evidenceValue, this.commonControls.navigateToParentPath);
        await this.clickElement(this.clinicalEvidenceControls.updateButton);
    }

    public async enterOngoingClinicalStudyDescription(desc: string) {
        await this.enterText(this.clinicalEvidenceControls.onGoingClinicalStudyDescription, desc);
    }

    public async addOngoingStudies(TCTValue: string, title: string, conditions: string, interventionDetails: string, studyDesignInfo: string, evidenceValue: string) {
        await this.clickElement(this.clinicalEvidenceControls.addOngoingStudyField);
        await this.waitTillElementDisplayed(this.clinicalEvidenceControls.TCTNumberField);
        await this.enterText(this.clinicalEvidenceControls.TCTNumberField, TCTValue);
        await this.enterText(this.clinicalEvidenceControls.titleField, title);
        await this.enterText(this.clinicalEvidenceControls.conditionsField, conditions);
        await this.enterText(this.clinicalEvidenceControls.interventionsField, interventionDetails);
        await this.enterText(this.clinicalEvidenceControls.studyDesignField, studyDesignInfo);
        await this.clickAndWaitUntillDropdownDisplayed(this.clinicalEvidenceControls.typeOfEvidence, this.commonControls.dropDownOptions);
        await this.selectDropdownValue(this.commonControls.dropDownOptions, evidenceValue, this.commonControls.navigateToParentPath);
        await this.clickElement(this.clinicalEvidenceControls.updateButton);
    }

    public async enterClinicalEvidenceDetails(dataObject: object) {
        const testdata = Object(dataObject);
        await this.reportSectionPage.clickClinicalEvidenceButton();
        await this.enterLiteratureSearchDescription(testdata.LiteratureSearchDescription);
        await this.addLiteratureSearchDetails(testdata.LiteratureSearchDetails.Database, testdata.LiteratureSearchDetails.Date, testdata.LiteratureSearchDetails.Yield, testdata.LiteratureSearchDetails.Selected, testdata.LiteratureSearchDetails.Rationale, testdata.LiteratureSearchDetails.Terms, testdata.LiteratureSearchDetails.Limits);
        await this.enterPublishedClinicalStudyDescription(testdata.PublishedClinicalStudyDescription);
        await this.addPublishedStudies(testdata.PublishedStudies.ComparisonTechnology, testdata.PublishedStudies.Citation, testdata.PublishedStudies.HayesTypeofEvidence);
        await this.enterOngoingClinicalStudyDescription(testdata.OngoingClinicalStudyDescription);
        await this.addOngoingStudies(testdata.OngoingStudies.TCTNumber, testdata.OngoingStudies.Title, testdata.OngoingStudies.Conditions, testdata.OngoingStudies.Interventions, testdata.OngoingStudies.Design, testdata.OngoingStudies.HayesTypeofEvidence);
        await this.navigationToolbarPage.clickSaveButton();
    }
}