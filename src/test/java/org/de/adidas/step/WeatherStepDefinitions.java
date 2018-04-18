package org.de.adidas.step;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertTrue;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class WeatherStepDefinitions {

	private Response response;
	private ValidatableResponse json;
	private RequestSpecification request;
	private final String ENDPOINT_GET_WEATHER_DETAILS = "http://samples.openweathermap.org/data/2.5/weather";
	private final String APP_ID = "b6907d289e10d714a6e88b30761fae22";

	@Given("user enters city with a name (.*)")
	public void a_city_exists_with_name(String cityName) {
		request = given().param("q", cityName).param("appid", APP_ID);

	}

	@Given("^user enters city with a latitude (\\d+) and longitude (\\d+)")
	public void a_city_exists_with_name(Integer latitude, Integer longitude) {
		request = given().param("lat", latitude).param("lon", longitude).param("appid", APP_ID);

	}

	@When("^a user retrieves the weather")
	public void a_user_retrieves_the_book_by_isbn() {
		response = request.when().get(ENDPOINT_GET_WEATHER_DETAILS);
	}

	@Then("the status code is (\\d+)")
	public void verify_status_code(int statusCode) {
		json = response.then().statusCode(statusCode);
	}

	/**
	 * asserts on json fields with single values
	 */
	@And("response includes the following")
	public void response_equals(Map<String, String> responseFields) {
		for (final Map.Entry<String, String> field : responseFields.entrySet()) {
			if (StringUtils.isNumeric(field.getValue())) {
				json.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
			} else {
				json.body(field.getKey(), equalTo(field.getValue()));
			}
		}
	}

	@And("has all weather parameters")
	public void response_contains_all_parameters() {
		final String stringReponse = response.body().prettyPrint();
		assertTrue(stringReponse.contains("weather"));
		assertTrue(stringReponse.contains("base"));
		assertTrue(stringReponse.contains("main"));
		assertTrue(stringReponse.contains("temp"));
		assertTrue(stringReponse.contains("pressure"));
		assertTrue(stringReponse.contains("humidity"));
		assertTrue(stringReponse.contains("wind"));
		assertTrue(stringReponse.contains("clouds"));
		assertTrue(stringReponse.contains("dt"));

	}

}
