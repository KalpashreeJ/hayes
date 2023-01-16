export class CreateArticleControls {

    constructor() {

    }

    get uniqueIDField() {
        return "//input[contains(@formcontrolname,'uniqueId')]";
    }

    get titleField() {
        return "//input[contains(@formcontrolname,'title')]";
    }

    get templateField() {
        return "//*[contains(@formcontrolname,'template')]";
    }

    get createButton() {
        return "//span[contains(text(),'Create')]";
    }
}