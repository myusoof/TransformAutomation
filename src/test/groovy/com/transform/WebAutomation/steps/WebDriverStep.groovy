package com.transform.WebAutomation.steps

import com.transform.helper.ConfigurationHelper
import com.transform.helper.WebDriverHelper
import groovy.transform.Field
import org.junit.Assert
import org.openqa.selenium.By
import org.openqa.selenium.WebDriver

/**
 * Created by mohmedyusoof.as on 5/27/2016.
 */
this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)


@Field
WebDriver driver = WebDriverHelper.GetDriverInstance(ConfigurationHelper.getBrowserType())

Given(~'I launch the browser'){->
    driver.navigate().to(ConfigurationHelper.getApplicationBaseUrl())
}

Given(~'I click on the "(.*)" link'){link ->
    driver.findElement(By.xpath("//a[text()='${link}']")).click()
}
And (~'I verify my on page "(.*)"'){ pageType ->
    driver.currentUrl.contains(pageType)
}
And(~'I validate the text in the page'){table ->
    driver.getPageSource().contains(table.raw[0])
}



After(){
    driver.close()
}




