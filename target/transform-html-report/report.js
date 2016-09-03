$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TransformPoC.feature");
formatter.feature({
  "line": 1,
  "name": "I have to test the service call",
  "description": "I have to get the service call using cucumber",
  "id": "i-have-to-test-the-service-call",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Perform a get call",
  "description": "",
  "id": "i-have-to-test-the-service-call;perform-a-get-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@restService"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hit the get country service",
  "keyword": "Given "
});
formatter.match({
  "location": "RestClientSteps.groovy:25"
});
formatter.result({
  "duration": 1195495168,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[su]nt aut facere repell...\u003e but was:\u003c[]nt aut facere repell...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat org.junit.Assert$assertEquals.call(Unknown Source)\r\n\tat com.transform.steps.RestClientSteps$_run_closure1.doCall(RestClientSteps.groovy:27)\r\n\tat ✽.Given I hit the get country service(TransformPoC.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "Perform a get call with query paramater",
  "description": "",
  "id": "i-have-to-test-the-service-call;perform-a-get-call-with-query-paramater",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@restService"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I git the get call with query param",
  "keyword": "Given "
});
formatter.match({
  "location": "RestClientSteps.groovy:31"
});
formatter.result({
  "duration": 740131078,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Perform a post call",
  "description": "",
  "id": "i-have-to-test-the-service-call;perform-a-post-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@restService"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I perform the post call",
  "keyword": "Given "
});
formatter.match({
  "location": "RestClientSteps.groovy:37"
});
formatter.result({
  "duration": 592213605,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Perform scenario with parameter",
  "description": "",
  "id": "i-have-to-test-the-service-call;perform-scenario-with-parameter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@restService"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I perform simple call with paramater",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "paramater",
      "offset": 27
    }
  ],
  "location": "RestClientSteps.groovy:47"
});
formatter.result({
  "duration": 2743505,
  "status": "passed"
});
formatter.uri("TransformPoC_1.feature");
formatter.feature({
  "line": 1,
  "name": "Second Feature file",
  "description": "I have to get the service call using cucumber",
  "id": "second-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Perform a get call",
  "description": "",
  "id": "second-feature-file;perform-a-get-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@restService"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hit the get country service",
  "keyword": "Given "
});
formatter.match({
  "location": "RestClientSteps.groovy:25"
});
formatter.result({
  "duration": 791867542,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[su]nt aut facere repell...\u003e but was:\u003c[]nt aut facere repell...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat org.junit.Assert$assertEquals.call(Unknown Source)\r\n\tat com.transform.steps.RestClientSteps$_run_closure1.doCall(RestClientSteps.groovy:27)\r\n\tat ✽.Given I hit the get country service(TransformPoC_1.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "Perform a get call with query paramater",
  "description": "",
  "id": "second-feature-file;perform-a-get-call-with-query-paramater",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@restService"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I git the get call with query param",
  "keyword": "Given "
});
formatter.match({
  "location": "RestClientSteps.groovy:31"
});
formatter.result({
  "duration": 277405020,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Perform a post call",
  "description": "",
  "id": "second-feature-file;perform-a-post-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@restService"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I perform the post call",
  "keyword": "Given "
});
formatter.match({
  "location": "RestClientSteps.groovy:37"
});
formatter.result({
  "duration": 573693165,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Perform a post call",
  "description": "",
  "id": "second-feature-file;perform-a-post-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@restService1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I perform the post call",
  "keyword": "Given "
});
formatter.match({
  "location": "RestClientSteps.groovy:37"
});
formatter.result({
  "duration": 391965250,
  "status": "passed"
});
});