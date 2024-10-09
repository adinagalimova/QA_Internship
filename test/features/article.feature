Feature: BDD Final with Wikipedia

  Background:
    Given I am on the Wikipedia main page

  Scenario: Download the article of Albert Einstein as a PDF file
    When I input '<inputTex>' in the search field, I click the search button
    And I click the "Tool menu" button on the article page
    And I click the "Download as PDF" button
    And I click the "Download" button
    Then the file should be downloaded with the name '<fileName>'
    
      Examples:
      | inputTex         | fileName              |
      | Albert Einstein  | Albert_Einstein.pdf   |
  
  Scenario: Page Information
    When I input '<inputTex>' in the search field, I click the search button
    And I click the "Tool menu" button on the article page
    And I click the "Page information" button
    Then Information page is displayed

   Examples:
      | inputTex      | 
      | Bengal tiger  | 

  Scenario: Search Language
    When I input '<inputTex>' in the search field
    And I change the language on '<language>'
    And I click the submit button
    Then Language page is displayed

      Examples:
      | inputTex                | language  |
      | Gabriel García Márquez  | Español   |

