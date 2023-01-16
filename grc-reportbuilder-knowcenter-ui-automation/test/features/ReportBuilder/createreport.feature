@Regression
Feature: Create report functionality

    @TC483342, @TC481900, @TC481901
    Scenario Outline: Scenario Outline name: User creates report in report builder application

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                                              |
            | Title    | Bonalive Orthopedic Granules (Bonalive Medical LTD) |
            | Template | Product Snapshot                                    |
        And the user fills the following details
            | Section                | Filename                   |
            | Meta Data              | Metadata.json              |
            | Product Information    | ProductInformation.json    |
            | Product Table          | ProductTable.json          |
            | Clinical Evidence      | ClinicalEvidence.json      |
            | Additional Information | AdditionalInformation.json |
            | Abstracts              | Abstract.json              |
        And the user fills the following comments details
            | Fields  | Value              |
            | Subject | Adding new comment |
            | Comment | v1:kc-dev-preview  |
        And the user fills the following releases details
            | Fields             | Value                |
            | Publishing Profile | RTL-5 Kc Dev Staging |
            | Release State      | Validation           |
        Then the user verifies report in the below application
            | Fields | Value                  |
            | Title  | Hayes Knowledge Center |

    @TC481560
    Scenario Outline: User saves the report with metadata details in report builder application

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                              |
            | Title    | Create report with metadata details |
            | Template | Product Snapshot                    |
        And the user fills the following details
            | Section   | Filename      |
            | Meta Data | Metadata.json |
        And the user Search the report with following details
            | Fields | Value                               |
            | Title  | Create report with metadata details |
        Then the user should see a report that matches 'title'

    @TC481561
    Scenario Outline: User saves the report with product information in report builder application

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                                 |
            | Title    | Create report with product information |
            | Template | Product Snapshot                       |
        And the user fills the following details
            | Section             | Filename                |
            | Product Information | ProductInformation.json |
        And the user Search the report with following details
            | Fields | Value                                  |
            | Title  | Create report with product information |
        Then the user should see a report that matches 'title'

    @TC481562
    Scenario Outline: User saves the report with clinical evidence details in report builder application

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                                       |
            | Title    | Create report with clinical evidence details |
            | Template | Product Snapshot                             |
        And the user fills the following details
            | Section           | Filename              |
            | Clinical Evidence | ClinicalEvidence.json |
        And the user Search the report with following details
            | Fields | Value                                        |
            | Title  | Create report with clinical evidence details |
        Then the user should see a report that matches 'title'

    @TC481563
    Scenario Outline: User saves the report with product table details in report builder application

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                                   |
            | Title    | Create report with product table details |
            | Template | Product Snapshot                         |
        And the user fills the following details
            | Section       | Filename          |
            | Product Table | ProductTable.json |
        And the user Search the report with following details
            | Fields | Value                                    |
            | Title  | Create report with product table details |
        Then the user should see a report that matches 'title'

    @TC481565
    Scenario Outline: User saves the report with additional information in report builder application

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                                   |
            | Title    | Create report with additinal information |
            | Template | Product Snapshot                         |
        And the user fills the following details
            | Section                | Filename                   |
            | Additional Information | AdditionalInformation.json |
        And the user Search the report with following details
            | Fields | Value                                    |
            | Title  | Create report with additinal information |
        Then the user should see a report that matches 'title'

    @TC481566
    Scenario Outline: User saves the report with abstracts details in report builder application

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                               |
            | Title    | Create report with abstracts details |
            | Template | Product Snapshot                     |
        And the user fills the following details
            | Section   | Filename      |
            | Abstracts | Abstract.json |
        And the user Search the report with following details
            | Fields | Value                                |
            | Title  | Create report with abstracts details |
        Then the user should see a report that matches 'title'
