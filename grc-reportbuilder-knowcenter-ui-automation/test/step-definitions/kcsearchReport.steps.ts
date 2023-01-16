import { Given, Then, When } from "@wdio/cucumber-framework";
import { BasePage } from "../../page-objects/Base/base.page";
import { HomePages } from "../../page-objects/KnowledgeCentre/Home/home.page";
import { LoginPages } from '../../page-objects/KnowledgeCentre/Login/login.page';
import { LoginPage } from '../../page-objects/ReportBuilder/Login/login.page';
import { expectedTitle } from './createReport.steps';
import { expectedPrivateSummary } from '../../page-objects/ReportBuilder/ProductInformation/productInformation.page';
import { expectedPublicSummary } from '../../page-objects/ReportBuilder/ProductInformation/productInformation.page';
import { expectedKeyword } from '../../page-objects/ReportBuilder/Metadata/metadata.page';
import { publishingProfilevalue } from './createReport.steps';
import { expectedUniqueID } from "./createReport.steps";

let kcLoginPage: LoginPages;
let loginPage: LoginPage;
let homePage: HomePages;
let basePage: BasePage;
basePage = new BasePage();
homePage = new HomePages();
kcLoginPage = new LoginPages();
loginPage = new LoginPage();

Given('the {string} logged into knowledge centre application', async (user) => {
  await kcLoginPage.clickOnLoginButton();
  await loginPage.login(user);
});

When('the user search the report with {string} in knowledge centre application', async (searchCriteria) => {
  let Profilevalues = [];
  Profilevalues = publishingProfilevalue.split(' ');
  let enviornment = Profilevalues[Profilevalues.length - 1];
  await kcLoginPage.navigateToKnowledgeCentre(enviornment);
  let keyword = expectedUniqueID;
  switch (searchCriteria) {
    case 'keyword':
      await homePage.searchReport(keyword);
      break;
    case 'title':
      await homePage.searchReport(expectedTitle);
      break;
  }
});

Then('the user should see a report that matches keywords', async () => {
  let actualTitle = await homePage.getReportTitleFromSearchList(expectedTitle);
  await expect(actualTitle).toContain(expectedTitle);
});

Then('the user verifies public and private summary in knowledge centre application', async () => {
  let actualPrivateSummary = await homePage.getSummaryFromSearchresults(expectedTitle);
  expect(actualPrivateSummary).toContain(expectedPrivateSummary);
  await homePage.clickOnLogout();
});