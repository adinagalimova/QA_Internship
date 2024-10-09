Feature: Alert Tests

Scenario: Java Script Alert Handling 
    Given I am on the 'JavaScript Alerts' page 
    When I open a js alert 
    And I accept the js alert
    Then I should see a success message 'You successfully clicked an alert'