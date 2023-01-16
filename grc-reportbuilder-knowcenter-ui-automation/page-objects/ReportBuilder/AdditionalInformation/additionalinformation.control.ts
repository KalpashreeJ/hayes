export class AdditionalInformationControls {

    constructor() {

    }

    get additionalResourcesField() {
        return "//*[contains(@formcontrolname,'additionalLinks')]//div[contains(@class,'ck-editor')]/p";
    }

    get addHayesReportField() {
        return "//*[contains(@formcontrolname,'hayesReports')]//*[contains(text(),'add_box')]";
    }

    get reportUniqueIDField() {
        return "//input[contains(@formcontrolname,'uniqueId')]";
    }

    get relationTypeField() {
        return "//*[contains(@placeholder,'Relation Type')]";
    }

    get updateButton() {
        return "//span[contains(text(),'Update')]";
    }
}