package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.ComponentsPage;
import com.tutorialsninja.pages.DesktopPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.LaptopsAndNotebooksPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class HomePageSteps {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover to desktop and click$")
    public void iMouseHoverToDesktopAndClick() {
        new HomePage().mouseHoverToDesktopAndClick();
    }

    @And("^I select menu \"([^\"]*)\"$")
    public void iSelectMenu(String menu)  {
        new HomePage().selectMenu(menu);
    }
    @Then("^verify \"([^\"]*)\" text$")
    public void verifyText(String expectedText)  {
        Assert.assertEquals("Invalid text id displayed",expectedText,new DesktopPage().navigateToDesktopErrorMessage());
    }

    @When("^I mouse hover to Laptops and Notebooks and click$")
    public void iMouseHoverToLaptopsAndNotebooksAndClick() {
        new HomePage().mouseHoverToLaptopsNotebooksAndClick();
    }

    @Then("^Verify \"([^\"]*)\"$")
    public void verify(String expectedText) {
        Assert.assertEquals("Invalid text id displayed",expectedText,new LaptopsAndNotebooksPage().navigateToLaptopsNotebooksErrorMessage());
    }

    @When("^I mouse hover on Components and click$")
    public void iMouseHoverOnComponentsAndClick() {
        new HomePage().mouseHoverToComponentsAndClick();
    }


    @Then("^Verify components \"([^\"]*)\" text$")
    public void verifyComponentsText(String expectedText)  {
        Assert.assertEquals("Invalid text id displayed",expectedText,new ComponentsPage().navigateToComponentsErrorMessage());
    }
}
