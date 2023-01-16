export class AbstractsControls {

    constructor() {

    }

    get abstractsField() {
        return "//*[contains(@formcontrolname,'abstracts')]//div[contains(@class,'ck-editor')]/p";
    }
}