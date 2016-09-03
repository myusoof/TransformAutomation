package com.transform.helper

import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.ie.InternetExplorerDriver
import org.openqa.selenium.opera.OperaDriver

/**
 * Created by mohmedyusoof.as on 5/27/2016.
 */
public class ConfigurationHelper {

    static RestClient restClient = new RestClient(getProperties().get("baseUrl"))
    static Properties properties
    static String applicationBaseUrl = getProperties().get("ApplicationBaseUrl")

    public static Properties getProperties() {
        properties = new Properties()
        properties.load(this.getClass().getResourceAsStream("/properties/configuration.properties"))
        return properties
    }


    public static String getApplicationUrl(){
        getProperties().getProperty("ApplicationBaseUrl")
    }

    public static String getTags() {
        return getProperties().get("tags")
    }

    public static String getBrowserType(){
        return getProperties().get('browserType')
    }
}
