import { BasePage } from "../base/base.page";
import { CommonControls } from "./common.control";


/**
 * sub page containing specific selectors and methods for a specific page
 */
export class CommonPage extends BasePage {

    private commonControls: CommonControls;

    constructor() {
        super();
        this.commonControls = new CommonControls();
    }
    
    public async getUserLockedMessage() {
        let actualUserLockedMessage = await super.getElementText(this.commonControls.userLockedMessage);
        return actualUserLockedMessage;
    }
}




