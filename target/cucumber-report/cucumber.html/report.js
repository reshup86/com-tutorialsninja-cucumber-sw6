$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("laptopsandnotebooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops And Notebooks Test",
  "description": "As a user I should navigate to Laptops And Notebooks page successfully",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4109347100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I will verify that user has placed order successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;i-will-verify-that-user-has-placed-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select currency from dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover to LaptopsAndNotebooks tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I and selecting Price (High \u003e Low) from Sort By dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on product Macbook",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "verify text \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on MacBook Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on shopping cart link display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "verify the test \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify the product name \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I update the product quantity",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify the Macbook total \"£737.45\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "verify the checkout text \"Checkout\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#    And verify new customer text \"New Customer\""
    },
    {
      "line": 29,
      "value": "#    And I click on guest checkout radio button"
    }
  ],
  "line": 30,
  "name": "I enter first name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter last name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Email",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Telephone",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter Address",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter City",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter Postcode",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select country from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select state from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 86707600,
  "status": "passed"
});
formatter.match({
  "location": "DeskTopSteps.iSelectCurrencyFromDropdown()"
});
formatter.result({
  "duration": 568405900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iMouseHoverToLaptopsAndNotebooksTabAndClick()"
});
formatter.result({
  "duration": 170233300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 560059700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAndSelectingPriceHighLowFromSortByDropdown()"
});
formatter.result({
  "duration": 364085600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnProductMacbook()"
});
formatter.result({
  "duration": 975764800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 13
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyText(String)"
});
formatter.result({
  "duration": 31600100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnMacBookAddToCartButton()"
});
formatter.result({
  "duration": 62196600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnShoppingCartLinkDisplayIntoSuccessMessage()"
});
formatter.result({
  "duration": 526769600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheTest(String)"
});
formatter.result({
  "duration": 33477000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 25
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheProductName(String)"
});
formatter.result({
  "duration": 25985900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iUpdateTheProductQuantity()"
});
formatter.result({
  "duration": 528166200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£737.45",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheMacbookTotal(String)"
});
formatter.result({
  "duration": 37897400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 325495000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheCheckoutText(String)"
});
formatter.result({
  "duration": 43589600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 9051498700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1c3b43530f9015671daf32314f4122e0, findElement {using\u003did, value\u003dinput-payment-firstname}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\topig\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61046}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61046/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c3b43530f9015671daf32314f4122e0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy25.sendKeys(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.sendTextToElement(Utility.java:75)\r\n\tat com.tutorialsninja.pages.CheckOutPage.enterFirstName(CheckOutPage.java:92)\r\n\tat com.tutorialsninja.cucumber.steps.LaptopsAndNotebooksSteps.iEnterFirstName(LaptopsAndNotebooksSteps.java:82)\r\n\tat ✽.And I enter first name(laptopsandnotebooks.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterLastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterTelephone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterCity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iEnterPostcode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iSelectCountryFromDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iSelectStateFromDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11988200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1c3b43530f9015671daf32314f4122e0, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\topig\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61046}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61046/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c3b43530f9015671daf32314f4122e0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:596)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:331)\r\n\tat com.tutorialsninja.utility.Utility.getScreenshot(Utility.java:353)\r\n\tat com.tutorialsninja.Hooks.tearDown(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});