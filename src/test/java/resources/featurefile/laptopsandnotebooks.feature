Feature: Laptops And Notebooks Test
  As a user I should navigate to Laptops And Notebooks page successfully

  @smoke
  Scenario: I will verify products are displayed in high to low order
    Given I am on Homepage
    When I mouse hover to LaptopsAndNotebooks tab and click
    And I select menu "Show All Laptops & Notebooks"
    Then Verify product are arranged in high to low order

  @sanity
  Scenario: I will verify that user has placed order successfully
    Given I am on Homepage
    When I select currency from dropdown
    And I mouse hover to LaptopsAndNotebooks tab and click
    And I select menu "Show All Laptops & Notebooks"
    And I and selecting Price (High > Low) from Sort By dropdown
    And I click on product Macbook
    And verify text "MacBook"
    And I click on MacBook Add to cart button
    And I click on shopping cart link display into success message
    And verify the test "Shopping Cart"
    And verify the product name "MacBook"
    And I update the product quantity
    And verify the Macbook total "£737.45"
    And I click on checkout button
    And verify the checkout text "Checkout"
#    And verify new customer text "New Customer"
#    And I click on guest checkout radio button
    And I enter first name
    And I enter last name
    And I enter Email
    And I enter Telephone
    And I enter Address
    And I enter City
    And I enter Postcode
    And I select country from dropdown
    And I select state from dropdown
    And I click on Continue button
    And I enter comments to text
    And I click on check box button
    Then I click on check out continue button
