import { BasePage } from "../../base/base.page";
import { ReleasesControls } from "./releases.control";
import { CommonControls } from "../../utils/common.control";
import { HomeControls } from "../../KnowledgeCentre/Home/home.control";
import { Element } from "webdriverio";
import { KeyControls } from "../../utils/key.control";

export class ReleasesPage extends BasePage {

    private releasesControls: ReleasesControls;
    private commonControls: CommonControls;
    private homeControl: HomeControls;
    private keyControls: KeyControls;

    constructor() {
        super();
        this.releasesControls = new ReleasesControls();
        this.commonControls = new CommonControls();
        this.homeControl = new HomeControls();
        this.keyControls = new KeyControls();
    }

    public async clickaAdNewReleases() {
        await super.clickElement(this.releasesControls.releaseReportField);
    }

    public async selectPublishingProfileValue(value: string) {
        await super.clickAndWaitUntillDropdownDisplayed(this.releasesControls.publishingProfileField, this.commonControls.dropDownOptions);
        await super.waitTillElementClickable(this.commonControls.dropDownOptions + '[' + (1) + ']');
        await super.selectDropdownValue(this.commonControls.dropDownOptions, value, this.commonControls.navigateToParentPath);
    }

    public async clickReleaseButton() {
        await super.clickElement(this.releasesControls.releaseButton);
    }

    public async clickOkButton() {
        await super.clickElement(this.releasesControls.okButton);
    }

    public async selectReleaseStateValue(value: string) {
        await super.clickAndWaitUntillDropdownDisplayed(this.releasesControls.releaseStateField, this.commonControls.dropDownOptions);
        await super.waitTillElementClickable(this.commonControls.dropDownOptions + '[' + (1) + ']');
        await super.selectDropdownValue(this.commonControls.dropDownOptions, value, this.commonControls.navigateToParentPath);
    }

    public async clickOnReleaseLink(publishingProfilevalue: string) {
        let Profilevalues = [];
        Profilevalues = publishingProfilevalue.split(' ');
        let enviornment = Profilevalues[Profilevalues.length - 1];
        await super.moveAndClickElementInTableData(this.releasesControls.releasesRows, this.releasesControls.columnField, this.releasesControls.linkToKC, enviornment);
    }

    public async getReleasesData(profileValue: string) {
        let Profilevalues = [];
        Profilevalues = profileValue.split(' ');
        let enviornment = Profilevalues[Profilevalues.length - 1];
        await $(this.releasesControls.historySection).moveTo();
        await super.pressEnterAndWaitForText(this.releasesControls.releasesRows + this.releasesControls.columnField + '[' + (1) + ']', enviornment, this.keyControls.enterKey)
        const releasesDataTable: Element<"async">[] = await super.findElements(this.releasesControls.releasesRows + this.releasesControls.columnField);
        for (let i = 0; i < await releasesDataTable.length; i++) {
            let releaseDataValue;
            releaseDataValue = await releasesDataTable[i].getText();
            if (releaseDataValue.includes(enviornment)) {
                releaseDataValue = releaseDataValue.split(' ');
                return releaseDataValue[releaseDataValue.length - 1];
            }
        }
    }

    public async getReleaseSection() {
        return await super.isElementExists(this.releasesControls.releaseSection);;
    }

    public async getSnapshotSection() {
        return await super.isElementExists(this.releasesControls.snapshotSection);
    }

    public async getSnapshotData(value: string) {
        await super.waitUntilElementExists(this.releasesControls.snapshotDataRow + this.releasesControls.columnField + '[' + (1) + ']')
        const snapshotDataTable: Element<"async">[] = await super.findElements(this.releasesControls.snapshotDataRow + this.releasesControls.columnField);
        for (let i = 0; i < await snapshotDataTable.length; i++) {
            let snapshotDataValue = await snapshotDataTable[i].getText();
            if (snapshotDataValue.includes(value)) {
                return snapshotDataValue;
            }
        }
    }

    public async clickAddSnapshot() {
        await super.clickElement(this.releasesControls.saveSnapShotButton);
    }

    public async setLabelValue(value: string) {
        await super.enterText(this.releasesControls.labelField, value);
    }

    public async setDescriptionValue(value: string) {
        await super.enterText(this.releasesControls.descriptionField, value);
    }

    public async clickSave() {
        await super.clickElement(this.releasesControls.saveButton);
    }

    public async clickOnRestoreLink(versionLabel: string) {
        await super.waitTillElementClickable(this.releasesControls.snapshotDataRow + '[' + (1) + ']')
        await super.moveAndClickElementInTableData(this.releasesControls.snapshotDataRow, this.releasesControls.columnField, this.releasesControls.restoreButton, versionLabel);
        await super.clickElement(this.releasesControls.confirmRestoreOkButton);
        await super.clickElement(this.releasesControls.notifyRestoreOkButton);
    }

    public async clickReviewSnapshot(versionLabel: string) {
        await super.waitTillElementClickable(this.releasesControls.snapshotDataRow + '[' + (1) + ']')
        await super.moveAndClickElementInTableData(this.releasesControls.snapshotDataRow, this.releasesControls.columnField, this.releasesControls.reviewSnapshotButton, versionLabel);
    }

    public async navigateToReviewSnapshotTab() {
        await super.switchToTabByUrl(browser.options.baseUrl + this.releasesControls.reviewSnapShotTab)
    }

    public async getSnapshotDetailsFromReviewSnapshot() {
        let snaphotDetails = await super.getElementText(this.releasesControls.reviewSnaphotDetials);
        return snaphotDetails;
    }

}