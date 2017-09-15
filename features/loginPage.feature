@loginPage

Feature: Login page

Scenario: Land on login page

  Given I navigate to dhis2
  Then the title is "DHIS 2 Demo - Sierra Leone"
  And the login form exists
