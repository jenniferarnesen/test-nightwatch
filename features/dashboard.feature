# features/dashboard.feature

Feature: Dashboard

Scenario: Dashboard has navbar

  Given I am logged in
#   Then the title is "DHIS 2 Demo - Sierra Leone"
  Then the dashboard page should be loaded
#   And the login form exists