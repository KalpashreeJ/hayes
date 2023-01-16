import { BasePage } from "../../base/base.page";
import { CreateArticleControls } from "../CreateArticle/createarticle.control";
import { CommonControls } from "../../utils/common.control";


const { v4: uuidv4 } = require('uuid');


/**
 * sub page containing specific selectors and methods for a specific page
 */
export class CreateArticlePage extends BasePage {

    private createArticleControls: CreateArticleControls;
    private commonControls: CommonControls;

    constructor() {
        super();
        this.createArticleControls = new CreateArticleControls();
        this.commonControls = new CommonControls();
    }

    public async enterUniqueID() {
        let generateUniqueID = uuidv4();
        let uniqueID = generateUniqueID.replace(/\-/g, "");
        await super.enterText(this.createArticleControls.uniqueIDField, uniqueID);
        return uniqueID;
    }

    public async enterTitle(title: string, uniqueId: string) {
        await super.enterText(this.createArticleControls.titleField, title + uniqueId);
    }

    public async selectTemplate(templateValue: string) {
        await super.clickAndWaitUntillDropdownDisplayed(this.createArticleControls.templateField, this.commonControls.dropDownOptions);
        await super.selectDropdownValue(this.commonControls.dropDownOptions, templateValue, this.commonControls.navigateToParentPath);
    }

    public async clickCreateButton() {
        await super.clickElement(this.createArticleControls.createButton);
    }
}
