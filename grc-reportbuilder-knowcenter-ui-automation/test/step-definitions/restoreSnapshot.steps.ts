import { When, Then } from "@wdio/cucumber-framework";
import { NavigationToolbarPage } from "../../page-objects/ReportBuilder/NavigationBar/navigationtoolbar.page";
import { ReleasesPage } from "../../page-objects/ReportBuilder/Releases/releases.page";
import { MetadataPage } from "../../page-objects/ReportBuilder/Metadata/metadata.page";
import { ReportSectionsPage } from "../../page-objects/ReportBuilder/ReportSection/reportsections.page";
import { expectedPublicationStatus } from "../../page-objects/ReportBuilder/Metadata/metadata.page";
import { expectedArchivedReason } from "../../page-objects/ReportBuilder/Metadata/metadata.page";
import { versionLabel } from "../step-definitions/createReport.steps";

let navigationToolbarPage: NavigationToolbarPage;
let releasesPage: ReleasesPage;
let metadataPage: MetadataPage;
let reportSectionPage: ReportSectionsPage;
releasesPage = new ReleasesPage();

When('the user updates the following metadata details', async (detailsTable) => {
    reportSectionPage = new ReportSectionsPage();
    metadataPage = new MetadataPage();
    navigationToolbarPage = new NavigationToolbarPage();
    await reportSectionPage.clickMetadataButton();
    const listOfFields = [];
    const listOfValues = [];
    let value = null;
    detailsTable.rows().forEach((element: any[]) => {
        listOfFields.push(element[0]);
        listOfValues.push(element[1]);
    });

    for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
            case 'PublicationStatus':
                await metadataPage.selectPublicationStatus(value);
                break;
            case 'ArchivedReason':
                await metadataPage.selectArchivedReason(value);
                break;
        }
    }
    await navigationToolbarPage.clickSaveButton();
});

When('the user restore the previous saved snapshot', async () => {
    await releasesPage.clickOnRestoreLink(versionLabel);
});

Then('the user should be able to view the Previous saved snapshot version Data', async () => {
    await reportSectionPage.clickMetadataButton();
    let actualPublicationStatus = await metadataPage.getPublicationStatus();
    let actualArchivedReason = await metadataPage.getArchivedReason();
    expect(actualPublicationStatus).toContain(expectedPublicationStatus);
    expect(actualArchivedReason).toContain(expectedArchivedReason);
});
