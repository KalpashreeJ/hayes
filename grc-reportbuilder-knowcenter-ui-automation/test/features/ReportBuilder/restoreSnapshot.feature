@Regression
Feature: Restore Snapshot functionality

    @TC481895
    Scenario Outline: User restore the snapshot

        Given the 'admin1' login to the report builder application
        When the user creates the article with the following details
            | Fields   | Values                                              |
            | Title    | Bonalive Orthopedic Granules (Bonalive Medical LTD) |
            | Template | Product Snapshot                                    |
        And the user fills the following details
            | Section   | Filename      |
            | Meta Data | Metadata.json |
        And the user fills the following releases details
            | Fields             | Value                |
            | Publishing Profile | RTL-5 Kc Dev Staging |
            | Release State      | Validation           |
        And the user fills the following snapshot details
            | Fields      | Value            |
            | Label       | SnapshotVersion1 |
            | Description | Test Description |
        And the user updates the following metadata details
            | Fields            | Value     |
            | PublicationStatus | Updated   |
            | ArchivedReason    | Unbundled |
        And the user fills the following releases details
            | Fields             | Value                |
            | Publishing Profile | RTL-5 Kc Dev Staging |
            | Release State      | Technical Review     |
        And the user restore the previous saved snapshot
        Then the user should be able to view the Previous saved snapshot version Data