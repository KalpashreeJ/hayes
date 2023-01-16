import { Then, When } from "@wdio/cucumber-framework";
import { HomePage } from "../../page-objects/ReportBuilder/Home/home.page";
import { OpenReportPage } from "../../page-objects/ReportBuilder/OpenReport/openReport.page"
import { expectedUniqueID } from "./createReport.steps";
import { LoginPage } from "../../page-objects/ReportBuilder/Login/login.page";
import { ReleasesPage } from "../../page-objects/ReportBuilder/Releases/releases.page";
import { ReportSectionsPage } from "../../page-objects/ReportBuilder/ReportSection/reportsections.page";
import { CommentsPage } from "../../page-objects/ReportBuilder/Comments/comments.page";
import { CommonPage } from "../../page-objects/utils/common.page";

let loginPage: LoginPage;
let homePage: HomePage;
let openReportPage: OpenReportPage;
let releasesPage: ReleasesPage;
let reportSectionsPage: ReportSectionsPage
let commentsPage: CommentsPage;
let expectedTitle = null;
let commonPage: CommonPage;

openReportPage = new OpenReportPage();
homePage = new HomePage();
reportSectionsPage = new ReportSectionsPage();
releasesPage = new ReleasesPage();
commentsPage = new CommentsPage();


When('the user Search the report with following details', async (detailsTable) => {
  const listOfFields = [];
  const listOfValues = [];
  let value = null;

  detailsTable.rows().forEach((element: any[]) => {
    listOfFields.push(element[0]);
    listOfValues.push(element[1]);
  });
  await homePage.clickOpenLink();

  for (let index = 0; index < listOfFields.length; index++) {
    const field = listOfFields[index];
    value = listOfValues[index];
    switch (field) {
      case 'Title':
        expectedTitle = value + expectedUniqueID;
        await openReportPage.searchReports(expectedTitle);
        break;
    }
  }
});

When('the user search the report with uniqueid', async () => {
  await homePage.clickOpenLink();
  await openReportPage.searchReports(expectedUniqueID);
});

Then('the user should see a report that matches {string}', async (searchCriteria) => {
  switch (searchCriteria) {
    case 'uniqueid':
      let actualUniqueId = await openReportPage.getUniqueIdFromSearchResults(expectedUniqueID);
      expect(actualUniqueId).toContain(expectedUniqueID);
      break;
    case 'title':
      let actualTitle = await openReportPage.getTitleFromSearchResults(expectedTitle, expectedUniqueID);
      expect(actualTitle).toContain(expectedTitle);
      break;
  }
});

Then('the user see {string} message on report sections', async (expectedText) => {
  commonPage = new CommonPage();
  let actualUserLockedMessage = await commonPage.getUserLockedMessage();
  await expect(actualUserLockedMessage).toContain(expectedText)
});

When('the user opens the following report to {string}', async (action, detailsTable) => {
  const listOfFields = [];
  const listOfValues = [];
  let value = null;

  detailsTable.rows().forEach((element: any[]) => {
    listOfFields.push(element[0]);
    listOfValues.push(element[1]);
  });
  await homePage.clickOpenLink();
  switch (action) {
    case 'edit':
      for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
          case 'Title':
            expectedTitle = value + expectedUniqueID;
            await openReportPage.searchReports(expectedTitle);
            await openReportPage.selectReport(expectedTitle, expectedUniqueID);
            await openReportPage.clickEdit();
            break;
        }
      }
      break;
    case 'view':
      for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
          case 'Title':
            expectedTitle = value + expectedUniqueID;
            await openReportPage.searchReports(expectedTitle);
            await openReportPage.selectReport(expectedTitle, expectedUniqueID);
            await openReportPage.clickReadOnlyButton();
            break;
        }
      }
  }
});

Then('the user see the following {string} details', async (sectionName, detailsTable) => {
  const listOfFields = [];
  const listOfValues = [];
  let value = null;
  detailsTable.rows().forEach((element: any[]) => {
    listOfFields.push(element[0]);
    listOfValues.push(element[1]);
  });
  switch (sectionName) {
    case 'release':
      await reportSectionsPage.clickReleaseButton();
      for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
          case 'Publishing Profile':
            let expectedVersion;
            expectedVersion = value.split(' ');
            let expectedVersionValue = expectedVersion[expectedVersion.length - 1];
            let actualVersionValue = await releasesPage.getReleasesData(value)
            expect(actualVersionValue).toEqual(expectedVersionValue);
            break;
        }
      }
      break;
    case 'comments':
      await reportSectionsPage.clickCommentsButton();
      for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
          case 'Subject':
            let subject = await commentsPage.getCommentsHistorySubject(value);
            expect(subject).toEqual(value);
            break;
          case 'Comment':
            let commentsBody = await commentsPage.getCommentsHistory(value);
            expect(commentsBody).toEqual(value);
            break;
        }
      }
      break;
    case 'snapshot':
      await reportSectionsPage.clickReleaseButton();
      for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
          case 'Label':
            let label = await releasesPage.getSnapshotData(value);
            expect(label).toEqual(value);
            break;
          case 'Description':
            let description = await releasesPage.getSnapshotData(value);
            expect(description).toEqual(value);
            break;
        }
      }
      break;
  }
});


Then('the user see  the following snapshot details on {string}', async (sectionName, detailsTable) => {
  const listOfFields = [];
  const listOfValues = [];
  let value = null;
  detailsTable.rows().forEach((element: any[]) => {
    listOfFields.push(element[0]);
    listOfValues.push(element[1]);
  });
  switch (sectionName) {
    case 'review snapshot':
      await reportSectionsPage.clickReleaseButton();
      for (let index = 0; index < listOfFields.length; index++) {
        const field = listOfFields[index];
        value = listOfValues[index];
        switch (field) {
          case 'Label':
            await releasesPage.clickReviewSnapshot(value);
            await releasesPage.navigateToReviewSnapshotTab();
            let actualLabel = await releasesPage.getSnapshotDetailsFromReviewSnapshot();
            expect(actualLabel).toHaveValueContaining(value);
            break;
        }
      }
      break;
  }
});
