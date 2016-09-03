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
  "duration": 1290085053,
  "status": "passed"
});
formatter.match({
  "location": "WebDriverStep.groovy:23"
});
formatter.result({
  "duration": 1790311,
  "status": "passed"
});
formatter.after({
  "duration": 598121,
  "error_message": "groovy.lang.MissingMethodException: No signature of method: com.transform.steps.RestClientSteps$_run_closure5.doCall() is applicable for argument types: (cucumber.runtime.ScenarioImpl) values: [cucumber.runtime.ScenarioImpl@456be73c]\nPossible solutions: doCall(), findAll(), findAll(), isCase(java.lang.Object), isCase(java.lang.Object)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:286)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.Closure.call(Closure.java:426)\r\n\tat cucumber.runtime.groovy.GroovyBackend.invoke(GroovyBackend.java:155)\r\n\tat cucumber.runtime.groovy.GroovyHookDefinition$1.call(GroovyHookDefinition.java:46)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.groovy.GroovyHookDefinition.execute(GroovyHookDefinition.java:43)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:121)\r\n\tat cucumber.api.cli.Main.run(Main.java:36)\r\n\tat cucumber.api.cli.Main.main(Main.java:18)\r\n",
  "status": "failed"
});
});