@Regression
Feature: Search report functionality

        @TC481903
        Scenario: User search the report with title in Report Builder application
                Given the 'admin1' login to the report builder application
                When the user creates the article with the following details
                        | Fields   | Values                   |
                        | Title    | Search report with title |
                        | Template | Product Snapshot         |
                And the user fills the following releases details
                        | Fields             | Value                |
                        | Publishing Profile | RTL-5 Kc Dev Staging |
                        | Release State      | Validation           |
                And the user Search the report with following details
                        | Fields | Value                    |
                        | Title  | Search report with title |
                Then the user should see a report that matches 'title'

        @TC481903
        Scenario: User search the report with uniqueid in Report Builder application
                Given the 'admin1' login to the report builder application
                When the user creates the article with the following details
                        | Fields   | Values                      |
                        | Title    | Search report with uniqueid |
                        | Template | Product Snapshot            |
                And the user fills the following releases details
                        | Fields             | Value                |
                        | Publishing Profile | RTL-5 Kc Dev Staging |
                        | Release State      | Validation           |
                And the user search the report with uniqueid
                Then the user should see a report that matches 'uniqueid'

