@Regression
Feature: Search report functionality

    @TC481923
    Scenario Outline: User search the report in knowledge centre application with keywords entered in metadata details

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                                              |
            | Title    | Validation of searching reports with keywords in KC |
            | Template | Product Snapshot                                    |
        And the user fills the following details
            | Section   | Filename      |
            | Meta Data | Metadata.json |
        And the user fills the following releases details
            | Fields             | Value                |
            | Publishing Profile | RTL-5 Kc Dev Staging |
            | Release State      | Validation           |
        And the user search the report with 'keyword' in knowledge centre application
        Then the user should see a report that matches keywords

    @TC483381, @TC483376
    Scenario Outline: User verifies public and private summary in knowledge centre application

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                                         |
            | Title    | validation of public and private summary in kc |
            | Template | Product Snapshot                               |
        And the user fills the following details
            | Section             | Filename                |
            | Meta Data           | Metadata.json           |
            | Product Information | ProductInformation.json |
        And the user fills the following releases details
            | Fields             | Value                |
            | Publishing Profile | RTL-5 Kc Dev Staging |
            | Release State      | Validation           |
        And the user search the report with 'title' in knowledge centre application
        Then the user verifies public and private summary in knowledge centre application
