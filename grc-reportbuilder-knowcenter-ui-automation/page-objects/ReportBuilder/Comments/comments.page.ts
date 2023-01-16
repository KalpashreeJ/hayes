import { BasePage } from "../../base/base.page";
import { CommentsControls } from "./comments.control";
import { Element } from "webdriverio";

export class CommentsPage extends BasePage {

    private commentsControls: CommentsControls;

    constructor() {
        super();
        this.commentsControls = new CommentsControls();
    }

    public async addCommentButton() {
        await super.clickElement(this.commentsControls.postNewCommentButton);
    }

    public async enterSubject(subject: string) {
        await super.enterText(this.commentsControls.subjectField, subject);
    }

    public async enterComment(comment: string) {
        await super.enterText(this.commentsControls.commentField, comment);
    }

    public async clickPost() {
        await super.clickElement(this.commentsControls.postButton);
    }

    public async getCommentsHistorySubject(subject: string) {
        await super.waitUntilElementExists(this.commentsControls.commentsHistorySubject + '[' + (1) + ']')
        const subjectValuesControl: Element<"async">[] = await super.findElements(this.commentsControls.commentsHistorySubject);
        for (let i = 0; i < subjectValuesControl.length; i++) {
            let subjectValue = await subjectValuesControl[i].getText();
            if (subjectValue === subject) {
                return subjectValue;
            }
        }
    }

    public async getCommentsHistory(comments: string) {
        await super.waitUntilElementExists(this.commentsControls.commentsHistoryBody + '[' + (1) + ']')
        const commentsValuesControl: Element<"async">[] = await super.findElements(this.commentsControls.commentsHistoryBody);
        for (let i = 0; i < commentsValuesControl.length; i++) {
            let commentsDescription = await commentsValuesControl[i].getText();
            if (commentsDescription === comments) {
                return commentsDescription;
            }
        }
    }
}