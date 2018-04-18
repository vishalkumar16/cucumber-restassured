package org.de.adidas;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue = { "org.de.adidas.step" }, features = { "src/test/resources" }, format = { "pretty",
		"html:target/Report" })
public class WeatherTestApplication {

}
