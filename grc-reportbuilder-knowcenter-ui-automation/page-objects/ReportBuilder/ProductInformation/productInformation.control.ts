export class ProductInformationControls {

    constructor() {

    }

    get publicSummaryField() {
        return "//*[contains(@formcontrolname,'publicSummary')]//div[contains(@class,'ck-editor')]/p";
    }

    get privateSummaryField() {
        return "//*[contains(@formcontrolname,'privateSummary')]//div[contains(@class,'ck-editor')]/p";
    }

    get technologyDescriptionField() {
        return "//*[contains(@formcontrolname,'technologyDescription')]//div[contains(@class,'ck-editor')]/p";
    }

    get clinicalEvidenceCheckField() {
        return "//*[contains(@formcontrolname,'clinicalStudies')]//span[@class='mat-checkbox-label']";
    }

    get clinicalEvidenceComentaryField() {
        return "//*[@id='clinicalStudiesComentary']//div[contains(@class,'ck-editor')]/p";
    }

    get regulatoryStatusCheckField() {
        return "//*[contains(@formcontrolname,'regulatoryStatus')]//span[@class='mat-checkbox-label']";
    }

    get regulatoryStatusComentaryField() {
        return "//*[@id='regulatoryStatusComentary']//div[contains(@class,'ck-editor')]/p";
    }

    get safetyConcernsCheckField() {
        return "//*[contains(@formcontrolname,'safetyConcerns')]//span[@class='mat-checkbox-label']";
    }

    get safetyConcernsComentaryField() {
        return "//*[@id='safetyConcernsComentary']//div[contains(@class,'ck-editor')]/p";
    }
}