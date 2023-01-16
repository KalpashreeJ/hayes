export class MetadataControls {

    constructor() {

    }

    get titleField() {
        return "//input[@id='title']";
    }

    get publicationDateField() {
        return "//input[@id='publicationDate']";
    }

    get publicationStatusField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'publicationStatus')]";
    }

    get archivedDateField() {
        return "//div[@class='section-control']//input[@id='archivedDate']";
    }

    get archivedReasonField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'archivedReason')]";
    }

    get amendedDateField() {
        return "//div[@class='section-control']//input[@id='amendedDate']";
    }

    get amendedReasonField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'amendedReason')]";
    }

    get updatedDateField() {
        return "//div[@class='section-control']//input[@id='updatedDate']";
    }

    get updatedReasonField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'updatedReason')]";
    }

    get removalDateField() {
        return "//div[@class='section-control']//input[@id='removedDate']";
    }

    get removalReasonField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'removedReason')]";
    }

    get taxonomyCheckField() {
        return "//span[@class='mat-checkbox-label']";
    }

    get patientAgeField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'patientAge')]";
    }

    get pediatricAgeCategoryValues() {
        return "//span[@id='mat-optgroup-label-0']/../mat-option/span";
    }

    get adultAgeCategoryValues() {
        return "//span[contains(text(),'Adult (>18)')]/../mat-option/span";
    }

    get patientGenderField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'patientGender')]";
    }

    get medicalSpecialityField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'medicalSpecialty')]";
    }

    get technologyApplicationField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'technologyApplication')]";
    }

    get deviceTypeField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'deviceType')]";
    }

    get levelOfCareField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'levelofCare')]";
    }

    get marketSegmentField() {
        return "//div[@class='section-control']//*[contains(@formcontrolname,'marketSegment')]";
    }

    get keywordsField() {
        return "//*[contains(@class,'mat-form-field-type-mat-input')]//textarea[@id='keywords']";
    }
}