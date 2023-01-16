export class ClinicalEvidenceControls {

    constructor() {

    }

    get literatureSearchDescriptionField() {
        return "//*[contains(@formcontrolname,'literatureSearchDescription')]//div[contains(@class,'ck-editor')]/p";
    }

    get addLiteratureSearchButton() {
        return "//*[contains(@formcontrolname,'literatureSearches')]//button/span/mat-icon[contains(text(),'add_box')]";
    }

    get databaseField() {
        return "//*[contains(@placeholder,'Database')]";
    }

    get dateField() {
        return "//input[contains(@formcontrolname,'created')]";
    }

    get yieldField() {
        return "//input[contains(@formcontrolname,'yield')]";
    }

    get selectedField() {
        return "//input[contains(@formcontrolname,'retrieved')]";
    }

    get rationaleField() {
        return "//*[contains(@formcontrolname,'rationale')]//div[contains(@class,'ck-editor')]/p";
    }

    get termsField() {
        return "//*[contains(@formcontrolname,'terms')]//div[contains(@class,'ck-editor')]/p";
    }

    get limitField() {
        return "//*[contains(@formcontrolname,'limits')]//div[contains(@class,'ck-editor')]/p"
    }

    get updateButton() {
        return "//button/span[contains(text(),'Update')]";
    }

    get publishedClinicalStudyDescription() {
        return "//*[contains(@formcontrolname,'publishedClinicalStudyDescription')]//div[contains(@class,'ck-editor')]/p";
    }

    get addPublishedStudiesField() {
        return "//*[contains(@formcontrolname,'publishedClinicalStudies')]//button/span/mat-icon[contains(text(),'add_box')]";
    }

    get comparisonTechnologyField() {
        return "//*[contains(@formcontrolname,'title')]//div[contains(@class,'ck-editor')]/p";
    }

    get citationsField() {
        return "//*[contains(@formcontrolname,'citation')]//div[contains(@class,'ck-editor')]/p";
    }

    get typeOfEvidence() {
        return "//*[contains(@placeholder,'Hayes Type of Evidence')]";
    }

    get onGoingClinicalStudyDescription() {
        return "//*[contains(@formcontrolname,'ongoingClinicalStudyDescription')]//div[contains(@class,'ck-editor')]/p";
    }

    get addOngoingStudyField() {
        return "//*[contains(@formcontrolname,'ongoingClinicalStudies')]//button/span/mat-icon[contains(text(),'add_box')]";
    }

    get TCTNumberField() {
        return "//*[contains(@formcontrolname,'number')]//div[contains(@class,'ck-editor')]/p";
    }

    get titleField() {
        return "//*[contains(@formcontrolname,'title')]//div[contains(@class,'ck-editor')]/p";
    }

    get conditionsField() {
        return "//*[contains(@formcontrolname,'conditions')]//div[contains(@class,'ck-editor')]/p";
    }

    get interventionsField() {
        return "//*[contains(@formcontrolname,'interventions')]//div[contains(@class,'ck-editor')]/p";
    }

    get studyDesignField() {
        return "//*[contains(@formcontrolname,'design')]//div[contains(@class,'ck-editor')]/p";
    }

}