$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("weather.feature");
formatter.feature({
  "line": 1,
  "name": "Get weather by details",
  "description": "",
  "id": "get-weather-by-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User calls web service to get weather details by city name, country",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user enters city with a name \"\u003ccityname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the status code is \u003ccode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "has correct temp \"\u003ctemperature\u003e\" hum \"\u003chumidity\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country;",
  "rows": [
    {
      "cells": [
        "cityname",
        "code",
        "temperature",
        "humidity"
      ],
      "line": 10,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country;;1"
    },
    {
      "cells": [
        "London,UK",
        "200",
        "280.32",
        "81"
      ],
      "line": 11,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country;;2"
    },
    {
      "cells": [
        "Delhi,IND",
        "200",
        "98",
        "90"
      ],
      "line": 12,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User calls web service to get weather details by city name, country",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user enters city with a name \"London,UK\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the status code is 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "has correct temp \"280.32\" hum \"81\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\"London,UK\"",
      "offset": 29
    }
  ],
  "location": "WeatherStepDefinitions.a_city_with_name(String)"
});
formatter.result({
  "duration": 36027116295,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_weather()"
});
formatter.result({
  "duration": 46280447655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "WeatherStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 3482475566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "280.32",
      "offset": 18
    },
    {
      "val": "81",
      "offset": 31
    }
  ],
  "location": "WeatherStepDefinitions.verify_temperature_humidity(String,String)"
});
formatter.result({
  "duration": 36165984504,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User calls web service to get weather details by city name, country",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user enters city with a name \"Delhi,IND\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the status code is 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "has correct temp \"98\" hum \"90\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\"Delhi,IND\"",
      "offset": 29
    }
  ],
  "location": "WeatherStepDefinitions.a_city_with_name(String)"
});
formatter.result({
  "duration": 1007111,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_weather()"
});
formatter.result({
  "duration": 4796849041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "WeatherStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 1831517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98",
      "offset": 18
    },
    {
      "val": "90",
      "offset": 27
    }
  ],
  "location": "WeatherStepDefinitions.verify_temperature_humidity(String,String)"
});
formatter.result({
  "duration": 231132727,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path main.temp doesn\u0027t match.\nExpected: \u003c98.0F\u003e\n  Actual: 280.32\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.verify_temperature_humidity(WeatherStepDefinitions.java:48)\r\n\tat ✽.And has correct temp \"98\" hum \"90\"(weather.feature:7)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "User calls web service to get weather details of invalid country",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-of-invalid-country",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user enters city with a name \"\u003ccityname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the status code is \u003ccode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-of-invalid-country;",
  "rows": [
    {
      "cells": [
        "cityname",
        "code"
      ],
      "line": 20,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-of-invalid-country;;1"
    },
    {
      "cells": [
        "ABCDEF,XYZ",
        "401"
      ],
      "line": 21,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-of-invalid-country;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "User calls web service to get weather details of invalid country",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-of-invalid-country;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user enters city with a name \"ABCDEF,XYZ\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the status code is 401",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\"ABCDEF,XYZ\"",
      "offset": 29
    }
  ],
  "location": "WeatherStepDefinitions.a_city_with_name(String)"
});
formatter.result({
  "duration": 901511,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_weather()"
});
formatter.result({
  "duration": 54380655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 19
    }
  ],
  "location": "WeatherStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 2310349,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c401\u003e doesn\u0027t match actual status code \u003c200\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.verify_status_code(WeatherStepDefinitions.java:42)\r\n\tat ✽.Then the status code is 401(weather.feature:17)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "User calls web service to get weather details by latitude and longitude",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude-and-longitude",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "user enters city with a latitude \"\u003clatitude\u003e\" and longitude \"\u003clongitude\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the status code is \u003ccode\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "has correct temp \"\u003ctemperature\u003e\" hum \"\u003chumidity\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude-and-longitude;",
  "rows": [
    {
      "cells": [
        "latitude",
        "longitude",
        "code",
        "temperature",
        "humidity"
      ],
      "line": 30,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude-and-longitude;;1"
    },
    {
      "cells": [
        "35.02",
        "139.01",
        "200",
        "285.514",
        "100"
      ],
      "line": 31,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude-and-longitude;;2"
    },
    {
      "cells": [
        "56",
        "119",
        "200",
        "98",
        "90"
      ],
      "line": 32,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude-and-longitude;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "User calls web service to get weather details by latitude and longitude",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude-and-longitude;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "user enters city with a latitude \"35.02\" and longitude \"139.01\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the status code is 200",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "has correct temp \"285.514\" hum \"100\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "35.02",
      "offset": 34
    },
    {
      "val": "139.01",
      "offset": 56
    }
  ],
  "location": "WeatherStepDefinitions.a_city_latitude_longitude(String,String)"
});
formatter.result({
  "duration": 837257,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_weather()"
});
formatter.result({
  "duration": 52314470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "WeatherStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 1461359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "285.514",
      "offset": 18
    },
    {
      "val": "100",
      "offset": 32
    }
  ],
  "location": "WeatherStepDefinitions.verify_temperature_humidity(String,String)"
});
formatter.result({
  "duration": 667994396,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User calls web service to get weather details by latitude and longitude",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude-and-longitude;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "user enters city with a latitude \"56\" and longitude \"119\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the status code is 200",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "has correct temp \"98\" hum \"90\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "56",
      "offset": 34
    },
    {
      "val": "119",
      "offset": 53
    }
  ],
  "location": "WeatherStepDefinitions.a_city_latitude_longitude(String,String)"
});
formatter.result({
  "duration": 1830401,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_weather()"
});
formatter.result({
  "duration": 56773137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "WeatherStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 4573765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98",
      "offset": 18
    },
    {
      "val": "90",
      "offset": 27
    }
  ],
  "location": "WeatherStepDefinitions.verify_temperature_humidity(String,String)"
});
formatter.result({
  "duration": 26668194,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path main.temp doesn\u0027t match.\nExpected: \u003c98.0F\u003e\n  Actual: 285.514\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.verify_temperature_humidity(WeatherStepDefinitions.java:48)\r\n\tat ✽.And has correct temp \"98\" hum \"90\"(weather.feature:27)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "User calls web service to get weather details by incorrect latitude and longitude",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-incorrect-latitude-and-longitude",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "user enters city with a latitude \"\u003clatitude\u003e\" and longitude \"\u003clongitude\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the status code is \u003ccode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-incorrect-latitude-and-longitude;",
  "rows": [
    {
      "cells": [
        "latitude",
        "longitude",
        "code"
      ],
      "line": 40,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-incorrect-latitude-and-longitude;;1"
    },
    {
      "cells": [
        "400",
        "400",
        "401"
      ],
      "line": 41,
      "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-incorrect-latitude-and-longitude;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "User calls web service to get weather details by incorrect latitude and longitude",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-incorrect-latitude-and-longitude;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "user enters city with a latitude \"400\" and longitude \"400\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the status code is 401",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 34
    },
    {
      "val": "400",
      "offset": 54
    }
  ],
  "location": "WeatherStepDefinitions.a_city_latitude_longitude(String,String)"
});
formatter.result({
  "duration": 1276699,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_weather()"
});
formatter.result({
  "duration": 57178496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 19
    }
  ],
  "location": "WeatherStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 1974273,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c401\u003e doesn\u0027t match actual status code \u003c200\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.GeneratedMethodAccessor41.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.verify_status_code(WeatherStepDefinitions.java:42)\r\n\tat ✽.Then the status code is 401(weather.feature:37)\r\n",
  "status": "failed"
});
});