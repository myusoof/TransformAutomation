$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WebDriver_extension.feature");
formatter.feature({
  "line": 1,
  "name": "WebDriver extension",
  "description": "I would like to test application",
  "id": "webdriver-extension",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "I have to test the first link",
  "description": "",
  "id": "webdriver-extension;i-have-to-test-the-first-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@webDriver"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the first link",
  "keyword": "Given "
});
formatter.match({
  "location": "WebDriverStep.groovy:19"
});
formatter.result({
  "duration": 1583158265,
  "status": "passed"
});
formatter.match({
  "location": "WebDriverStep.groovy:23"
});
formatter.result({
  "duration": 1721797,
  "status": "passed"
});
});