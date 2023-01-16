export class CommentsControls {

    constructor() {

    }

    get postNewCommentButton() {
        return "//*[contains(text(),'forum')]";
    }

    get subjectField() {
        return "//input[contains(@formcontrolname,'subject')]";
    }

    get commentField() {
        return "//*[contains(@formcontrolname,'body')]//div[contains(@class,'ck-editor')]/p";
    }

    get postButton(){
        return "//button/span[contains(text(),'Post')]";
    }

    get commentsHistorySubject(){
        return "//ul[@class='threads']//span[@class='subject']";
    }

    get commentsHistoryBody(){
        return "//ul[@class='threads']//div[@class='body']//p"
    }
}