@Regression

Feature: Open report functionality


        @TC481892,@TC481585
        Scenario Outline: Releases section displays the snapshot details
                Given the 'admin1' login to the report builder application
                When the user creates the article with the following details
                        | Fields   | Values                    |
                        | Title    | Validate Snapshot details |
                        | Template | Product Snapshot          |
                And the user fills the following snapshot details
                        | Fields      | Value                     |
                        | Label       | Test snapshot Label       |
                        | Description | Test Snapshot description |
                And the user opens the following report to 'edit'
                        | Fields | Value                     |
                        | Title  | Validate Snapshot details |
                Then the user see the following 'snapshot' details
                        | Fields      | Value                     |
                        | Label       | Test snapshot Label       |
                        | Description | Test Snapshot description |

        @TC481587,@TC481585
        Scenario Outline: Releases section displays the history of report release
                Given the 'admin1' login to the report builder application
                When the user creates the article with the following details
                        | Fields   | Values                       |
                        | Title    | Validate the release history |
                        | Template | Product Snapshot             |
                And the user fills the following releases details
                        | Fields             | Value                |
                        | Publishing Profile | RTL-5 Kc Dev Staging |
                        | Release State      | Validation           |
                And the user opens the following report to 'edit'
                        | Fields | Value                        |
                        | Title  | Validate the release history |
                Then the user see the following 'release' details
                        | Fields             | Value                |
                        | Publishing Profile | RTL-5 Kc Dev Staging |

        @TC481570
        Scenario Outline: Comments section displays the history of comments
                Given the 'admin1' login to the report builder application
                When the user creates the article with the following details
                        | Fields   | Values                        |
                        | Title    | Validate the comments history |
                        | Template | Product Snapshot              |
                And the user fills the following comments details
                        | Fields  | Value              |
                        | Subject | Adding new comment |
                        | Comment | v1:kc-dev-preview  |
                And the user opens the following report to 'edit'
                        | Fields | Value                         |
                        | Title  | Validate the comments history |
                Then the user see the following 'comments' details
                        | Fields  | Value              |
                        | Subject | Adding new comment |
                        | Comment | v1:kc-dev-preview  |

        @TC481899
        Scenario Outline: User verifies read only editing locked functionality in report builder application
                Given the 'admin1' login to the report builder application
                And the user creates the article with the following details
                        | Fields   | Values                   |
                        | Title    | Report on Editing Locked |
                        | Template | Product Snapshot         |
                And the user fills the following releases details
                        | Fields             | Value                |
                        | Publishing Profile | RTL-5 Kc Dev Staging |
                        | Release State      | Validation           |
                When the 'admin2' login to the report builder application
                And the user opens the following report to 'view'
                        | Fields | Value                    |
                        | Title  | Report on Editing Locked |
                Then the user see 'READ ONLY! EDITING LOCKED' message on report sections

        @TC481894
        Scenario Outline: Review snaphot displays snapshot details
                Given the 'admin1' login to the report builder application
                And the user creates the article with the following details
                        | Fields   | Values                   |
                        | Title    | Report on Editing Locked |
                        | Template | Product Snapshot         |
                And the user fills the following snapshot details
                        | Fields      | Value                     |
                        | Label       | Test snapshot Label       |
                        | Description | Test Snapshot description |
                And the user opens the following report to 'edit'
                        | Fields | Value                    |
                        | Title  | Report on Editing Locked |
                Then the user see  the following snapshot details on 'review snapshot'
                        | Fields | Value               |
                        | Label  | Test snapshot Label |