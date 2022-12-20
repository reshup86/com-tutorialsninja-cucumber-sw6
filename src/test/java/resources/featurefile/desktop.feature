#@regression
Feature: Desktop Test
  As user I should navigate to Desktop page test

#  @smoke
  Scenario: verify Product Arrange In AlphaBatical Order
    Given I am on Desktop page
    When I mouse hover to desktop and click
    And I select menu "Show All Desktops"
    Then Verify the Product will arrange in Descending order

#  @sanity
  Scenario: verify Product Added To Shopping Cart SuccessFully
    Given I am on Homepage
    When I select currency from dropdown
    And I mouse hover to desktop and click
    And I select menu "Show All Desktops"
    And I select desktops products by position by "Name: A to Z"
    And I select product "HP LP3065"
    And verify the product text
    And I select year "2022" month "November" and date "30"
    And I change product quantity
    And I click on add to cart button
    And verify the text "Shopping Cart"
    And verify the delivery date "2022-11-30"
    And verify the model "Product21"
    Then verify the total "£74.73"
