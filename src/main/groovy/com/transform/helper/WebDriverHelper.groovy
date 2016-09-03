package com.transform.helper

import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.firefox.FirefoxProfile
import org.openqa.selenium.firefox.internal.ProfilesIni
import org.openqa.selenium.ie.InternetExplorerDriver
import org.openqa.selenium.opera.OperaDriver

/**
 * Created by mohmedyusoof.as on 6/7/2016.
 */
public class WebDriverHelper {
    static WebDriver _driver;
    public static final String baseUrl = ConfigurationHelper.getApplicationBaseUrl()

    public static GetDriverInstance(String driverType, applicationUrl = ConfigurationHelper.getApplicationBaseUrl() ){
        switch(driverType){
            case "IE":
                _driver = new InternetExplorerDriver(applicationUrl)
                break
            case "firefox":
                //FirefoxProfile profile = new ProfilesIni().getProfile("default")
               //profile.addExtension(new File("src/test/resources/extension/autoauth-2.1-fx+fn.xpi"))
                _driver = new FirefoxDriver()
                break
            case "chrome":
                _driver = new ChromeDriver(applicationUrl)
                break
            case "opera":
                _driver = new OperaDriver(applicationUrl)
                break
            default:
                _driver = new FirefoxDriver()

                return _driver
        }
    }

    public static closeDriver(){
        _driver.close()
        _driver = null
    }
}
