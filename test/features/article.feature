Feature: Test 

Scenario: Game is displayed 
  Given I am on the Main Page
  When I click the "<Navigation>" button
  Then All games page opened
  When I input "<GameName>" to search place
  Then "<GameName>" title is displayed
  And "<GamePrice>" price is displayed

  Examples:
  | Navigation |                GameName          | GamePrice |
  | All games  | Victoria 3 - Voice Of The People | 14.99 EUR |





