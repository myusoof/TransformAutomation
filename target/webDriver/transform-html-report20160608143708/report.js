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
  "location": "WebDriverStep.groovy:22"
});
formatter.result({
  "duration": 208019036,
  "error_message": "java.net.MalformedURLException\r\n\tat com.transform.steps.WebDriverStep$_run_closure1.doCall(WebDriverStep.groovy:24)\r\n\tat ✽.Given I launch the browser(WebDriver_extension.feature:6)\r\nCaused by: java.lang.NullPointerException\r\n\tat com.transform.steps.WebDriverStep$_run_closure1.doCall(WebDriverStep.groovy:24)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition$1.call(GroovyStepDefinition.java:71)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyStepDefinition.execute(GroovyStepDefinition.java:68)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:121)\r\n\tat cucumber.api.cli.Main.run(Main.java:36)\r\n\tat cucumber.api.cli.Main.main(Main.java:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebDriverStep.groovy:27"
});
formatter.result({
  "status": "skipped"
});
});