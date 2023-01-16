export class ProductTableControls {

    constructor() {

    }

    get deviceClassificationNameSection() {
        return "//div[@class='combo-controls']";
    }

    get deviceClassificationNameField() {
        return "//input[@id='device-classification']";
    }

    get competingTechnologyField() {
        return "//*[@id='competingTechnologies']//div[contains(@class,'ck-editor')]/p";
    }

    get manufacturersField() {
        return "//*[@id='manufacturers']//div[contains(@class,'ck-editor')]/p";
    }

    get productFeaturesField() {
        return "//*[@id='productFeatures']//div[contains(@class,'ck-editor')]/p";
    }

    get costInformationField() {
        return "//*[contains(@formcontrolname,'costInformation')]//div[contains(@class,'ck-editor')]/p";
    }

    get regulatoryStatusField() {
        return "//*[contains(@formcontrolname,'regulatoryStatus')]//div[contains(@class,'ck-editor')]/p";
    }

    get indicationsField() {
        return "//*[contains(@formcontrolname,'indications')]//div[contains(@class,'ck-editor')]/p";
    }

    get safetyRecallsField() {
        return "//*[contains(@formcontrolname,'fdaSafetyRecalls')]//div[contains(@class,'ck-editor')]/p";
    }

    get databaseField() {
        return "//*[contains(@formcontrolname,'maudeDatabase')]//div[contains(@class,'ck-editor')]/p";
    }
}