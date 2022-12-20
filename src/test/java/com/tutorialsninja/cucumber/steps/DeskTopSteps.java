package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.DesktopPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.HpProductPage;
import com.tutorialsninja.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.Map;

public class DeskTopSteps {
    @Given("^I am on Desktop page$")
    public void iAmOnDesktopPage() {
    }

    @Then("^Verify the Product will arrange in Descending order$")
    public void verifyTheProductWillArrangeInDescendingOrder() {
        Map<String, ArrayList> mapArrays = new DesktopPage().arrangeProductInDescendingOrder();
        org.testng.Assert.assertEquals(mapArrays.get("originalProductsName"), mapArrays.get("afterSortByZToAProductsName"));
    }

    @When("^I select currency from dropdown$")
    public void iSelectCurrencyFromDropdown() {
        new HomePage().clickOnCurrency();
    }

    @And("^I select desktops products by position by \"([^\"]*)\"$")
    public void iSelectDesktopsProductsByPositionBy(String sortByAtoZ) {
        new DesktopPage().sortByName();
    }

    @And("^I select product \"([^\"]*)\"$")
    public void iSelectProduct(String product) {
        new DesktopPage().clickOnHpProduct();
    }

    @And("^verify the product text$")
    public void verifyTheProductText() {
        Assert.assertEquals("Invalid product selected", "HP LP3065", new HpProductPage().HpTextErrorMessage());
    }

    @And("^I select year \"([^\"]*)\" month \"([^\"]*)\" and date \"([^\"]*)\"$")
    public void iSelectYearMonthAndDate(String year, String month, String date) {
        new HpProductPage().selectDate(year, month, date);
    }

    @And("^I change product quantity$")
    public void iChangeProductQuantity() {
        new HpProductPage().changeProductQuantity();
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() throws InterruptedException{
        Thread.sleep(2000);
        new HpProductPage().clickOnShoppingCartButton();
    }

    @And("^verify the text \"([^\"]*)\"$")
    public void verifyTheText(String expectedText) {
        Assert.assertEquals("Invalid text", expectedText, new ShoppingCartPage().shoppingCartTextErrorMessage());
    }

    @And("^verify the delivery date \"([^\"]*)\"$")
    public void verifyTheDeliveryDate(String expectedDate) {
        Assert.assertEquals("Invalid text", expectedDate, new ShoppingCartPage().deliveryDateErrorMessage());
    }

    @And("^verify the model \"([^\"]*)\"$")
    public void verifyTheModel(String expectedModel) {
        Assert.assertEquals("Invalid text", expectedModel, new ShoppingCartPage().modelErrorMessage());
    }
    @Then("^verify the total \"([^\"]*)\"$")
    public void verifyTheTotal(String expectedTotal) {
        Assert.assertEquals("Invalid text", expectedTotal, new ShoppingCartPage().priceTotalErrorMessage());
    }
}

