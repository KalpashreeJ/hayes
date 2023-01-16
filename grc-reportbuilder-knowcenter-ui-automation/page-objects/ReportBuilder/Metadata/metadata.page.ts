import { BasePage } from "../../base/base.page";
import { MetadataControls } from "./metadata.control";
import { KeyControls } from "../../utils/key.control";
import { ReportSectionsPage } from "../ReportSection/reportsections.page";
import { DateTimeHelper } from "../../Base/dateTimeHelper";
import { NavigationToolbarPage } from "../NavigationBar/navigationtoolbar.page";
import { CommonControls } from "../../utils/common.control";

export let expectedPublicationStatus;
export let expectedArchivedReason;
export let expectedKeyword;

export class MetadataPage extends BasePage {

    private metadataControls: MetadataControls;
    private keyControls: KeyControls;
    private reportSectionPage: ReportSectionsPage;
    private dateTimeHelper: DateTimeHelper;
    private navigationToolbarPage: NavigationToolbarPage;
    private commonControls: CommonControls;

    constructor() {
        super();
        this.metadataControls = new MetadataControls();
        this.keyControls = new KeyControls();
        this.reportSectionPage = new ReportSectionsPage();
        this.dateTimeHelper = new DateTimeHelper();
        this.navigationToolbarPage = new NavigationToolbarPage();
        this.commonControls = new CommonControls();
    }

    public async enterTitle(title: string) {
        await super.enterText(this.metadataControls.titleField, title);
    }

    public async enterPublicationDate(date: string) {
        const publicationDate = this.dateTimeHelper.getFormattedDate(date);
        await super.enterText(this.metadataControls.publicationDateField, publicationDate);
    }

    public async selectPublicationStatus(status: string) {
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.publicationStatusField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, status, this.commonControls.navigateToParentPath);
    }

    public async enterArchivedDate(date: string) {
        const archivedDate = this.dateTimeHelper.getFormattedDate(date);
        await super.enterText(this.metadataControls.archivedDateField, archivedDate);
    }

    public async selectArchivedReason(reason: string) {
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.archivedReasonField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, reason, this.commonControls.navigateToParentPath);
    }

    public async enterAmendedDate(date: string) {
        const amendedDate = this.dateTimeHelper.getFormattedDate(date);
        await super.enterText(this.metadataControls.amendedDateField, amendedDate);
    }

    public async selectAmendedReason(reason: string) {
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.amendedReasonField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, reason, this.commonControls.navigateToParentPath);
    }

    public async enterUpdatedDate(date: string) {
        const updatedDate = this.dateTimeHelper.getFormattedDate(date);
        await super.enterText(this.metadataControls.updatedDateField, updatedDate);
    }

    public async selectTaxonomyCheckBox() {
        await super.clickElement(this.metadataControls.taxonomyCheckField);
    }

    public async selectPediatricAgeCategory(ageCategory: string) {
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.patientAgeField, this.metadataControls.pediatricAgeCategoryValues);
        await super.selectDropdownValue(this.metadataControls.pediatricAgeCategoryValues, ageCategory, this.commonControls.navigateToParentPath);
    }

    public async selectAdultAgeCategory(ageCategory: string) {
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.patientAgeField, this.metadataControls.adultAgeCategoryValues);
        await super.selectDropdownValue(this.metadataControls.adultAgeCategoryValues, ageCategory, this.commonControls.navigateToParentPath);
    }

    public async selectPatientGenderCategory(genderCategory: string) {
        await super.handleKeyControls(this.keyControls.tabKey);
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.patientGenderField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, genderCategory, this.commonControls.navigateToParentPath);
    }

    public async selectMedicalSpeciality(medicalSpeciality: string) {
        await super.handleKeyControls(this.keyControls.tabKey);
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.medicalSpecialityField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, medicalSpeciality, this.commonControls.navigateToParentPath);
    }

    public async selectTechnologyApplication(technologyApplication: string) {
        await super.handleKeyControls(this.keyControls.tabKey);
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.technologyApplicationField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, technologyApplication, this.commonControls.navigateToParentPath);
    }

    public async selectDeviceType(deviceType: string) {
        await super.handleKeyControls(this.keyControls.tabKey);
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.deviceTypeField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, deviceType, this.commonControls.navigateToParentPath);
    }

    public async selectLevelOfCare(levelOfCare: string) {
        await super.handleKeyControls(this.keyControls.tabKey);
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.levelOfCareField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, levelOfCare, this.commonControls.navigateToParentPath);
    }

    public async selectMarketSegment(marketSegment: string) {
        await super.handleKeyControls(this.keyControls.tabKey);
        await super.clickAndWaitUntillDropdownDisplayed(this.metadataControls.marketSegmentField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, marketSegment, this.commonControls.navigateToParentPath);
    }

    public async enterKeywords(keywords: string) {
        await super.handleKeyControls(this.keyControls.tabKey);
        await super.enterText(this.metadataControls.keywordsField, keywords);
        await super.handleKeyControls(this.keyControls.tabKey);
    }

    public async enterMetadataDetails(dataObject: object, uniqueID: string) {
        const testdata = Object(dataObject);
        expectedPublicationStatus = testdata.PublicationDetails.PublicationStatus;
        expectedArchivedReason = testdata.PublicationDetails.ArchivedReason;
        expectedKeyword = testdata.Taxonomy.Keywords;
        await this.reportSectionPage.clickMetadataButton();
        await super.waitTillElementDisplayed(this.commonControls.sectionLabel);
        await this.enterPublicationDate(testdata.PublicationDetails.PublicationDate);
        await this.selectPublicationStatus(testdata.PublicationDetails.PublicationStatus);
        await this.enterArchivedDate(testdata.PublicationDetails.ArchivedDate);
        await this.selectArchivedReason(testdata.PublicationDetails.ArchivedReason);
        await this.enterAmendedDate(testdata.PublicationDetails.AmendedDate);
        await this.selectAmendedReason(testdata.PublicationDetails.AmendedReason);
        await this.enterUpdatedDate(testdata.PublicationDetails.UpdatedDate);
        await this.selectTaxonomyCheckBox();
        await this.selectPediatricAgeCategory(testdata.Taxonomy.PatientAge);
        await this.selectPatientGenderCategory(testdata.Taxonomy.PatientGender);
        await this.selectMedicalSpeciality(testdata.Taxonomy.MedicalSpeciality);
        await this.selectTechnologyApplication(testdata.Taxonomy.TechnologyApplication);
        await this.selectDeviceType(testdata.Taxonomy.DeviceType);
        await this.selectLevelOfCare(testdata.Taxonomy.LevelOfCare);
        await this.selectMarketSegment(testdata.Taxonomy.MarketSegment);
        await this.enterKeywords(testdata.Taxonomy.Keywords + uniqueID);
        await this.navigationToolbarPage.clickSaveButton();
    }

    public async getPublicationStatus() {
        let actualPublicationStatus = await super.getElementText(this.metadataControls.publicationStatusField);
        return actualPublicationStatus;
    }

    public async getArchivedReason() {
        let actualArchivedReason = await super.getElementText(this.metadataControls.archivedReasonField);
        return actualArchivedReason;
    }
}