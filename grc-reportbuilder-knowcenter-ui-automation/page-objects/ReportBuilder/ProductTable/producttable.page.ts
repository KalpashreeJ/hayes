import { BasePage } from "../../base/base.page";
import { ProductTableControls } from "./producttable.control";
import { ReportSectionsPage } from "../ReportSection/reportsections.page";
import { NavigationToolbarPage } from "../NavigationBar/navigationtoolbar.page";

export class ProductTablePage extends BasePage {


    private productTableControls: ProductTableControls;
    private reportSectionPage: ReportSectionsPage;
    private navigationToolbarPage: NavigationToolbarPage;

    constructor() {
        super();
        this.productTableControls = new ProductTableControls();
        this.reportSectionPage = new ReportSectionsPage();
        this.navigationToolbarPage = new NavigationToolbarPage();
    }

    public async enterDiveClassificationName(name: string) {
        await super.clickElement(this.productTableControls.deviceClassificationNameSection);
        await super.enterText(this.productTableControls.deviceClassificationNameField, name);
    }

    public async enterCompetingTechnologyDetails(techDetails: string) {
        await super.enterText(this.productTableControls.competingTechnologyField, techDetails);
    }

    public async enterManufacturersDetails(manufaturers: string) {
        await super.enterText(this.productTableControls.manufacturersField, manufaturers);
    }

    public async enterProductFeatures(features: string) {
        await super.enterText(this.productTableControls.productFeaturesField, features);
    }

    public async enterCostInformation(costInfo: string) {
        await super.enterText(this.productTableControls.costInformationField, costInfo);
    }

    public async enterRegulatoryStatusDetails(statusDetails: string) {
        await super.enterText(this.productTableControls.regulatoryStatusField, statusDetails);
    }

    public async enterIndicationsInformtion(indicationInfo: string) {
        await super.enterText(this.productTableControls.indicationsField, indicationInfo);
    }

    public async enterSafetyRecalls(safetyInfo: string) {
        await super.enterText(this.productTableControls.safetyRecallsField, safetyInfo);
    }

    public async enterDatabaseDetails(dbDetails: string) {
        await super.enterText(this.productTableControls.databaseField, dbDetails);
    }

    public async enterProductTableDetails(dataObject: object) {
        const testdata = Object(dataObject);
        await this.reportSectionPage.clickProductTableButton();
        await this.enterDiveClassificationName(testdata.DeviceClassificationName);
        await this.enterCompetingTechnologyDetails(testdata.CompetingTechnology);
        await this.enterManufacturersDetails(testdata.Manufacturers);
        await this.enterProductFeatures(testdata.ProductFeatures);
        await this.enterCostInformation(testdata.CostInformation);
        await this.enterRegulatoryStatusDetails(testdata.RegulatoryStatus);
        await this.enterIndicationsInformtion(testdata.Indications);
        await this.enterSafetyRecalls(testdata.FDASafetyRecalls);
        await this.enterDatabaseDetails(testdata.MAUDEDatabase);
        await this.navigationToolbarPage.clickSaveButton();
    }
}