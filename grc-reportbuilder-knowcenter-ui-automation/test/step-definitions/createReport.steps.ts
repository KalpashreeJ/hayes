import { Given, When, Then } from "@wdio/cucumber-framework";
import { BasePage } from "../../page-objects/Base/base.page";
import { ParseJsonFile } from "../../page-objects/utils/fileutils"
import { LoginPage } from "../../page-objects/ReportBuilder/Login/login.page";
import { CreateArticlePage } from '../../page-objects/ReportBuilder/CreateArticle/createarticle.page';
import { HomePage } from "../../page-objects/ReportBuilder/Home/home.page";
import { MetadataPage } from "../../page-objects/ReportBuilder/Metadata/metadata.page";
import { RESOURCE_FOLDER_PATH } from "../../page-objects/utils/pathconstant"
import { ProductInformationPage } from "../../page-objects/ReportBuilder/ProductInformation/productInformation.page";
import { ProductTablePage } from "../../page-objects/ReportBuilder/ProductTable/producttable.page";
import { ClinicalEvidencePage } from "../../page-objects/ReportBuilder/ClinicalEvidence/clinicalevidence.page";
import { AdditionalInformationPage } from "../../page-objects/ReportBuilder/AdditionalInformation/additionalinformation.page";
import { AbstractsPage } from "../../page-objects/ReportBuilder/Abstracts/abstracts.page";
import { CommentsPage } from "../../page-objects/ReportBuilder/Comments/comments.page";
import { ReportSectionsPage } from "../../page-objects/ReportBuilder/ReportSection/reportsections.page";
import { NavigationToolbarPage } from "../../page-objects/ReportBuilder/NavigationBar/navigationtoolbar.page";
import { ReleasesPage } from "../../page-objects/ReportBuilder/Releases/releases.page";
import { HomePages } from "../../page-objects/KnowledgeCentre/Home/home.page";
import { CommonPage } from "../../page-objects/utils/common.page";


let createArticlePage: CreateArticlePage;
let loginPage: LoginPage;
let homePage: HomePage;
let metadataPage: MetadataPage;
let productInformationPage: ProductInformationPage;
let productTablePage: ProductTablePage;
let clinicalEvidencePage: ClinicalEvidencePage;
let additionalInformationPage: AdditionalInformationPage;
let abstractsPage: AbstractsPage;
let commentsPage: CommentsPage;
let reportSectionPage: ReportSectionsPage;
let navigationToolbarPage: NavigationToolbarPage;
let releasesPage: ReleasesPage;
let kcHomepage: HomePages;
let commonPage: CommonPage;
let basePage: BasePage;

let testdata;
export let expectedUniqueID;
export let expectedTitle;
export let publishingProfilevalue;
export let versionLabel;;

releasesPage = new ReleasesPage();
reportSectionPage = new ReportSectionsPage();
navigationToolbarPage = new NavigationToolbarPage();
homePage = new HomePage();
createArticlePage = new CreateArticlePage();
basePage = new BasePage();
loginPage = new LoginPage();
metadataPage = new MetadataPage();
productInformationPage = new ProductInformationPage();
productTablePage = new ProductTablePage();
clinicalEvidencePage = new ClinicalEvidencePage();
additionalInformationPage = new AdditionalInformationPage();
abstractsPage = new AbstractsPage();
commentsPage = new CommentsPage();
navigationToolbarPage = new NavigationToolbarPage();
kcHomepage = new HomePages();
commonPage = new CommonPage();

Given('the {string} login to the report builder application', async (user) => {
    switch (user) {
        case 'admin1':
            await loginPage.login(user);
            break;
        case 'admin2':
            await homePage.clickOnLogout();
            await loginPage.login(user);
            break;
    }

});

Given('the user creates the article with the following details', async (detailsTable) => {
    const listOfFields = [];
    const listOfValues = [];
    let value = null;
    await homePage.clickCreateLink();
    expectedUniqueID = await createArticlePage.enterUniqueID();
    detailsTable.rows().forEach((element: any[]) => {
        listOfFields.push(element[0]);
        listOfValues.push(element[1]);
    });

    for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
            case 'Title':
                await createArticlePage.enterTitle(value, expectedUniqueID);
                expectedTitle = value + expectedUniqueID;
                break;
            case 'Template':
                await createArticlePage.selectTemplate(value);
                break;
        }
        await createArticlePage.clickCreateButton();
    }
});

When('the user fills the following details', async (detailsTable) => {
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
            case 'Meta Data':
                testdata = ParseJsonFile(RESOURCE_FOLDER_PATH + value);
                await metadataPage.enterMetadataDetails(testdata, expectedUniqueID);
                break;
            case 'Product Information':
                testdata = ParseJsonFile(RESOURCE_FOLDER_PATH + value);
                await productInformationPage.enterProductInformDetails(testdata)
                break;
            case 'Product Table':
                testdata = ParseJsonFile(RESOURCE_FOLDER_PATH + value);
                await productTablePage.enterProductTableDetails(testdata)
                break;
            case 'Clinical Evidence':
                testdata = ParseJsonFile(RESOURCE_FOLDER_PATH + value);
                await clinicalEvidencePage.enterClinicalEvidenceDetails(testdata)
                break;
            case 'Additional Information':
                testdata = ParseJsonFile(RESOURCE_FOLDER_PATH + value);
                await additionalInformationPage.enterAdditionalInformationDetails(testdata)
                break;
            case 'Abstracts':
                testdata = ParseJsonFile(RESOURCE_FOLDER_PATH + value);
                await abstractsPage.enterAbstractsInformation(testdata)
                break;
        }
    }
});

When('the user fills the following comments details', async (detailsTable) => {
    const listOfFields = [];
    const listOfValues = [];
    let value = null;
    await reportSectionPage.clickCommentsButton();
    await commentsPage.addCommentButton();
    detailsTable.rows().forEach((element: any[]) => {
        listOfFields.push(element[0]);
        listOfValues.push(element[1]);
    });

    for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
            case 'Subject':
                await commentsPage.enterSubject(value);
                break;
            case 'Comment':
                await commentsPage.enterComment(value);
                break;
        }
    }
    await commentsPage.clickPost();
    await navigationToolbarPage.clickSaveButton();
});

When('the user fills the following releases details', async (detailsTable) => {
    const listOfFields = [];
    const listOfValues = [];
    let value = null;
    await reportSectionPage.clickReleaseButton();
    await releasesPage.clickaAdNewReleases();
    detailsTable.rows().forEach((element: any[]) => {
        listOfFields.push(element[0]);
        listOfValues.push(element[1]);
    });
    for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
            case 'Publishing Profile':
                publishingProfilevalue = value;
                await releasesPage.selectPublishingProfileValue(value);
                break;
            case 'Release State':
                await releasesPage.selectReleaseStateValue(value);
                await releasesPage.clickReleaseButton();
                break;
        }
    }
    await releasesPage.clickOkButton();
    await navigationToolbarPage.clickSaveButton();
});

Then('the user verifies report in the below application', async (detailsTable) => {
    let applicationTitle = null;
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
            case 'Title':
                applicationTitle = value;
                break;
        }
    }
    await releasesPage.clickOnReleaseLink(publishingProfilevalue);
    let url = await kcHomepage.getUrl(applicationTitle);
    let reportTitle = await kcHomepage.getReportTitle();
    expect(url).toContain(expectedUniqueID);
    expect(reportTitle).toContain(expectedTitle);
});

When('the user fills the following snapshot details', async (detailsTable) => {
    const listOfFields = [];
    const listOfValues = [];
    let value = null;
    await reportSectionPage.clickReleaseButton();
    await releasesPage.clickAddSnapshot();
    detailsTable.rows().forEach((element: any[]) => {
        listOfFields.push(element[0]);
        listOfValues.push(element[1]);
    });
    for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
            case 'Label':
                versionLabel = value;
                await releasesPage.setLabelValue(value);
                break;
            case 'Description':
                await releasesPage.setDescriptionValue(value);
                break;
        }
    }
    await releasesPage.clickSave();
    await navigationToolbarPage.clickSaveButton();
});
