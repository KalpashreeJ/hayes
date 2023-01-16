export class HomePageControls {

    constructor() {

    }

    get logoText() {
        return "//span[contains(@class,'logo')]";
    }
    
    get articleLink() {
        return "//button[contains(@class,'mat-menu-trigger')]/span[contains(text(),'Article')]"
    }

    get createLink() {
        return "//button[contains(text(),'Create')]";
    }

    get openLink() {
        return "//button[contains(text(),'Open')]";
    }

    get logoutButton() {
        return "//button[@mattooltip='Logout']";
    }
}