export class ReportSectionsControls {

    constructor() {
    }

    get metadataLink() {
        return "//button/span[contains(text(),'Meta Data')]";
    }

    get productInformationLink() {
        return "//button/span[contains(text(),'Product Information')]";
    }

    get productTableLink() {
        return "//button/span[contains(text(),'Product Table')]";
    }

    get clinicalEvidenceLink() {
        return "//button/span[contains(text(),'Clinical Evidence')]";
    }

    get additionalInformationLink() {
        return "//button/span[contains(text(),'Additional Information')]";
    }

    get abstractsLink() {
        return "//button/span[contains(text(),'Abstracts')]";
    }

    get commentsLink() {
        return "//button/span[contains(text(),'Comments')]";
    }

    get releaseLink() {
        return "//button/span[contains(text(),'Release')]";
    }
}