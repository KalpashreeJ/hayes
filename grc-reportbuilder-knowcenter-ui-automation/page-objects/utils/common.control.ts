export class CommonControls {

    constructor() {
    }

    get navigateToParentPath() {
        return "/..";
    }

    get dropDownOptions() {
        return "//div[@role='listbox']//span[@class='mat-option-text']";
    }

    get userLockedMessage() {
        return "//span[@class='section-label']/span";
    }

    get sectionLabel() {
        return "//span[@class='section-label']";
    }
}