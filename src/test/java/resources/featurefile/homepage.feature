Feature: Homepage test
  As user I should navigate to tutorial ninja website

  Scenario: User Should Navigate To Desktops Page Successfully
    Given I am on Homepage
    When I mouse hover to desktop and click
    And I select menu "Show All Desktops"
    Then verify "Desktops" text

  Scenario: User Should Navigate To Laptops And Notebooks Page Successfully
    Given I am on Homepage
    When I mouse hover to Laptops and Notebooks and click
    And I select menu "Show All Laptops & Notebooks"
    Then Verify "Laptops & Notebooks"

  Scenario: User Should Navigate To Components Page Successfully
    Given I am on Homepage
    When I mouse hover on Components and click
    And I select menu "Show All Components"
    Then Verify components "Components" text