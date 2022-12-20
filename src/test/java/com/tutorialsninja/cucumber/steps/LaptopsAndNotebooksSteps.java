package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.*;
import com.tutorialsninja.utility.Utility;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.Map;

public class LaptopsAndNotebooksSteps {
    @When("^I mouse hover to LaptopsAndNotebooks tab and click$")
    public void iMouseHoverToLaptopsAndNotebooksTabAndClick() {
        new HomePage().mouseHoverToLaptopsNotebooksAndClick();
    }

    @Then("^Verify product are arranged in high to low order$")
    public void verifyProductAreArrangedInHighToLowOrder() {
        Map<String, ArrayList> mapArrays = new LaptopsAndNotebooksPage().arrangeProductHighToLowOrder();
        Assert.assertEquals(mapArrays.get("originalProductsPrice"), mapArrays.get("afterSortByPrice"));
    }

    @And("^I and selecting Price \\(High > Low\\) from Sort By dropdown$")
    public void iAndSelectingPriceHighLowFromSortByDropdown() {
        new LaptopsAndNotebooksPage().productSortBy();
    }

    @And("^I click on product Macbook$")
    public void iClickOnProductMacbook() {
        new LaptopsAndNotebooksPage().clickOnMacBookLink();
    }

    @And("^verify text \"([^\"]*)\"$")
    public void verifyText(String expectedText) {
        Assert.assertEquals("Invalid text",expectedText,new MacBookPage().macBookErrorMessage());
    }

    @And("^I click on MacBook Add to cart button$")
    public void iClickOnMacBookAddToCartButton() {
        new MacBookPage().macBookAddToCart();
    }

    @And("^I click on shopping cart link display into success message$")
    public void iClickOnShoppingCartLinkDisplayIntoSuccessMessage() {
        new MacBookPage().clickOnShoppingCartButton();
    }

    @And("^verify the test \"([^\"]*)\"$")
    public void verifyTheTest(String expectedShoppingCart) {
        new ShoppingCartPage().shoppingCartTextErrorMessage();
    }

    @And("^verify the product name \"([^\"]*)\"$")
    public void verifyTheProductName(String expectedProduct)  {
        new ShoppingCartPage().productNameErrorMessage();
    }

    @And("^I update the product quantity$")
    public void iUpdateTheProductQuantity() {
        new ShoppingCartPage().updateMacBookQuantity();
    }

    @And("^verify the Macbook total \"([^\"]*)\"$")
    public void verifyTheMacbookTotal(String expectedMacTotal) {
        Assert.assertEquals("Invalid price",expectedMacTotal,new ShoppingCartPage().macBookTotalErrorMessage());
    }

    @And("^I click on checkout button$")
    public void iClickOnCheckoutButton() {
        new ShoppingCartPage().clickOnCheckButton();
    }

    @And("^verify the checkout text \"([^\"]*)\"$")
    public void verifyTheCheckoutText(String expectedText) {
        Assert.assertEquals("Invalid text",expectedText,new CheckOutPage().verifyCheckoutText());
    }

    @And("^I enter first name$")
    public void iEnterFirstName() {
        new CheckOutPage().enterFirstName("Shane");
    }

    @And("^I enter last name$")
    public void iEnterLastName() {
        new CheckOutPage().enterLastName("Jhones");
    }

    @And("^I enter Email$")
    public void iEnterEmail() {

        new CheckOutPage().enterEmail(Utility.getRandomString(5)+"shanejhones@example.com");
    }

    @And("^I enter Telephone$")
    public void iEnterTelephone() {
        new CheckOutPage().enterTelephone("98987654323");
    }

    @And("^I enter Address$")
    public void iEnterAddress() {
        new CheckOutPage().enterAddress("3 Procter Close");
    }

    @And("^I enter City$")
    public void iEnterCity() {
        new CheckOutPage().enterCity("Rugby");
    }

    @And("^I enter Postcode$")
    public void iEnterPostcode() {
        new CheckOutPage().enterPostcode("C2 4RT");
    }

    @And("^I select country from dropdown$")
    public void iSelectCountryFromDropdown()  {
        new CheckOutPage().entercountry("222");
    }

    @And("^I select state from dropdown$")
    public void iSelectStateFromDropdown() {
        new CheckOutPage().enterState("3603");
    }

    @And("^I click on Continue button$")
    public void iClickOnContinueButton() {
        new CheckOutPage().clickOnContinue();
    }

    @And("^I enter comments to text$")
    public void iEnterCommentsToText() {
        new CheckOutPage().addComments();
    }

    @And("^I click on check box button$")
    public void iClickOnCheckBoxButton() {
        new CheckOutPage().clickOnCheckBox();
    }

    @Then("^I click on check out continue button$")
    public void iClickOnCheckOutContinueButton() {
        new CheckOutPage().checkOutContinueButton();
    }


//    @And("^verify new customer text \"([^\"]*)\"$")
//    public void verifyNewCustomerText(String expectedText) {
//        Assert.assertEquals("Invalid data",expectedText,new CheckOutPage().verifyCustomerText());
//    }

//    @And("^I click on guest checkout radio button$")
//    public void iClickOnGuestCheckoutRadioButton() {
//        new CheckOutPage().clickOnGuestCheckOut();
//    }


}
