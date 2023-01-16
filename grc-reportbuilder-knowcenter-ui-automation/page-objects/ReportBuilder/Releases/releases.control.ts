export class ReleasesControls {

    constructor() {

    }
    get releaseReportField() {
        return "//span[contains(text(),' new_releases ')]";
    }

    get publishingProfileField() {
        return "//*[contains(@formcontrolname,'profile')]/..";
    }

    get releaseStateField() {
        return "//*[contains(@formcontrolname,'state')]/..";
    }

    get releaseButton() {
        return "//div[contains(@class,'mat-dialog-actions')]//span[contains(text(),'Release')]";
    }

    get okButton() {
        return "//span[contains(text(),'Ok')]";
    }

    get releasesRows() {
        return "//div/fieldset[@class='details']//tr"
    }
    get columnField() {
        return "/td";
    }

    get linkToKC() {
        return "//a";
    }

    get releaseSection() {
        return "//div/fieldset[@class='details']";
    }

    get snapshotSection() {
        return "//div/fieldset[@class='versions']";
    }

    get saveSnapShotButton() {
        return "//span[contains(text(),' photo_camera ')]";
    }

    get labelField() {
        return "//*[contains(@formcontrolname,'label')]";
    }

    get descriptionField() {
        return "//*[contains(@formcontrolname,'description')]";
    }

    get snapshotDataRow() {
        return "//fieldset[@class='versions']//tr";
    }

    get saveButton() {
        return "//span[contains(text(),'Save')]";
    }

    get historySection() {
        return "//div[@class='history']";
    }

    get reviewSnapshotButton() {
        return "//span[contains(text(),' preview ')]";
    }

    get reviewSnaphotDetials() {
        return "//span[contains(@class,'readonly')]/em";
    }

    get reviewSnapShotTab() {
        return "article/snapshot";
    }

    get restoreButton() {
        return "//button[@mattooltip='Restore']"
    }

    get confirmRestoreOkButton() {
        return "//*[@id='confirm-restore']//button/span[text()='Ok']";
    }

    get notifyRestoreOkButton() {
        return "//mat-dialog-container[@id='notify-restore']//span[text()='Ok']";
    }

}