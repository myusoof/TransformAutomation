package com.transform

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber
import org.junit.runner.RunWith

/**
 * Created by mohmedyusoof.as on 5/30/2016.
 */

@RunWith(Cucumber.class)
@CucumberOptions( plugin = ["pretty", "html:target/cucumber", "json:target/cucumber-report.json"], features = ["src/test/groovy/com/transform/RestAutomation/features","src/test/groovy/com/transform/WebAutomation/features"],glue = ["src/test/groovy/com/transform/RestAutomation/steps", "src/test/groovy/com/transform/WebAutomation/steps"])
public class RunCukesTest {
}
