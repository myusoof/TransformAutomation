Feature: I have to test internet herokupp application

  Background:
    Given I launch the browser

  Scenario: I have to test A/B lint testing
    Then I click on the "A/B Testing" link
    And I verify my on page "abtest"
    And I validate the text in the page
      |A/B Test Control|

  Scenario: I have to validate the authenication
    Then I click on the "Basic Auth" link
    And I verify my on page "basic_auth"
    And I validate the text in the page
      |Basic Auth|
