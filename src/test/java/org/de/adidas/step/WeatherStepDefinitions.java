package org.de.adidas.step;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class WeatherStepDefinitions {

	private Response response;
	private ValidatableResponse json;
	private RequestSpecification request;
	private final String ENDPOINT_GET_WEATHER_DETAILS = "http://samples.openweathermap.org/data/2.5/weather";
	private final String APP_ID = "b6907d289e10d714a6e88b30761fae22";

	@Given("^user enters city with a name (.*)$")
	public void a_city_with_name(String arg1) {
		request = given().param("q", arg1).param("appid", APP_ID);

	}

	@Given("^user enters city with a latitude \"([^\\\"]*)\" and longitude \"([^\\\"]*)\"$")
	public void a_city_latitude_longitude(String latitude, String longitude) {
		request = given().param("lat", latitude).param("lon", longitude).param("appid", APP_ID);

	}

	@When("^a user retrieves the weather$")
	public void a_user_retrieves_the_weather() {
		response = request.when().get(ENDPOINT_GET_WEATHER_DETAILS);
	}

	@Then("the status code is (\\d+)$")
	public void verify_status_code(int arg1) {
		json = response.then().contentType(ContentType.JSON).statusCode(arg1);
	}

	@And("^has correct temp \"([^\"]*)\" hum \"([^\"]*)\"$")
	public void verify_temperature_humidity(String arg1, String arg3) {

		json.body("main.temp", equalTo(Float.parseFloat(arg1)));
		json.body("main.humidity", equalTo(Integer.parseInt(arg3)));
	}

}
