$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("weather.feature");
formatter.feature({
  "line": 1,
  "name": "Get weather by details",
  "description": "",
  "id": "get-weather-by-details",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User calls web service to get weather details by city name, country id of London",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country-id-of-london",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user enters city with a name London,UK",
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
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "cod",
        "200"
      ],
      "line": 8
    },
    {
      "cells": [
        "name",
        "London"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "has all weather parameters",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "London,UK",
      "offset": 29
    }
  ],
  "location": "WeatherStepDefinitions.a_city_exists_with_name(String)"
});
formatter.result({
  "duration": 4709916763,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 4849884273,
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
  "duration": 2899100025,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 2523934746,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.response_contains_all_parameters()"
});
formatter.result({
  "duration": 155226432,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User calls web service to get weather details by city name, country id for Delhi",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country-id-for-delhi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user enters city with a name London,UK",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "cod",
        "200"
      ],
      "line": 17
    },
    {
      "cells": [
        "name",
        "Delhi"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "has all weather parameters",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "London,UK",
      "offset": 29
    }
  ],
  "location": "WeatherStepDefinitions.a_city_exists_with_name(String)"
});
formatter.result({
  "duration": 878044,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 163053685,
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
  "duration": 804571,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 268866294,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path name doesn\u0027t match.\nExpected: Delhi\n  Actual: London\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.response_equals(WeatherStepDefinitions.java:58)\r\n\tat ✽.And response includes the following(weather.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WeatherStepDefinitions.response_contains_all_parameters()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "User calls web service to get weather details by city name, country id for Delhi",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-city-name,-country-id-for-delhi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user enters city with a name ABCDEF,NGSD",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ABCDEF,NGSD",
      "offset": 29
    }
  ],
  "location": "WeatherStepDefinitions.a_city_exists_with_name(String)"
});
formatter.result({
  "duration": 911848,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 64114014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 19
    }
  ],
  "location": "WeatherStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 1555225,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c404\u003e doesn\u0027t match actual status code \u003c200\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.verify_status_code(WeatherStepDefinitions.java:46)\r\n\tat ✽.Then the status code is 404(weather.feature:24)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "User calls web service to get weather details by latitude,longitude",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude,longitude",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user enters city with a latitude 35 and longitude 139",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "coord.lon",
        "139.01"
      ],
      "line": 32
    },
    {
      "cells": [
        "coord.lat",
        "35.02"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "has all weather parameters",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 33
    },
    {
      "val": "139",
      "offset": 50
    }
  ],
  "location": "WeatherStepDefinitions.a_city_exists_with_name(Integer,Integer)"
});
formatter.result({
  "duration": 2670451,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 72776568,
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
  "duration": 779150,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 116065869,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path coord.lon doesn\u0027t match.\nExpected: 139.01\n  Actual: 139.01\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.response_equals(WeatherStepDefinitions.java:58)\r\n\tat ✽.And response includes the following(weather.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WeatherStepDefinitions.response_contains_all_parameters()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "User calls web service to get weather details by latitude,longitude for different place",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-by-latitude,longitude-for-different-place",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "user enters city with a latitude 56 and longitude 115",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "coord.lon",
        "115"
      ],
      "line": 41
    },
    {
      "cells": [
        "coord.lat",
        "56"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "has all weather parameters",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "56",
      "offset": 33
    },
    {
      "val": "115",
      "offset": 50
    }
  ],
  "location": "WeatherStepDefinitions.a_city_exists_with_name(Integer,Integer)"
});
formatter.result({
  "duration": 1970921,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 27159876,
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
  "duration": 698971,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 22327140,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path coord.lon doesn\u0027t match.\nExpected: \u003c115\u003e\n  Actual: 139.01\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.response_equals(WeatherStepDefinitions.java:56)\r\n\tat ✽.And response includes the following(weather.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WeatherStepDefinitions.response_contains_all_parameters()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "User calls web service to get weather details using incorrect latitude longitude",
  "description": "",
  "id": "get-weather-by-details;user-calls-web-service-to-get-weather-details-using-incorrect-latitude-longitude",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "user enters city with a latitude 400 and longitude 400",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "a user retrieves the weather",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 33
    },
    {
      "val": "400",
      "offset": 51
    }
  ],
  "location": "WeatherStepDefinitions.a_city_exists_with_name(Integer,Integer)"
});
formatter.result({
  "duration": 1568077,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDefinitions.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 30732677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 19
    }
  ],
  "location": "WeatherStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 1304077,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c404\u003e doesn\u0027t match actual status code \u003c200\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat org.de.adidas.step.WeatherStepDefinitions.verify_status_code(WeatherStepDefinitions.java:46)\r\n\tat ✽.Then the status code is 404(weather.feature:48)\r\n",
  "status": "failed"
});
});