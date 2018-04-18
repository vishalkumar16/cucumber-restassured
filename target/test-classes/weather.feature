Feature: Get weather by details

  Scenario: User calls web service to get weather details by city name, country id of London
    Given user enters city with a name London,UK
    When a user retrieves the weather 
    Then the status code is 200
    And response includes the following
      | cod  |    200 |
      | name | London |
    And has all weather parameters

  Scenario: User calls web service to get weather details by city name, country id for Delhi
    Given user enters city with a name London,UK
    When a user retrieves the weather
    Then the status code is 200
    And response includes the following
      | cod  |   200 |
      | name | Delhi |
    And has all weather parameters

  Scenario: User calls web service to get weather details by city name, country id for Delhi
    Given user enters city with a name ABCDEF,NGSD
    When a user retrieves the weather
    Then the status code is 404
    
    
    Scenario: User calls web service to get weather details by latitude,longitude
    Given user enters city with a latitude 35 and longitude 139
    When a user retrieves the weather
    Then the status code is 200
    And response includes the following
      | coord.lon  |   139.01 |
      | coord.lat | 35.02 |
    And has all weather parameters

  Scenario: User calls web service to get weather details by latitude,longitude for different place
    Given user enters city with a latitude 56 and longitude 115
    When a user retrieves the weather
    Then the status code is 200
    And response includes the following
      | coord.lon  |   115 |
      | coord.lat | 56 |
    And has all weather parameters

  Scenario: User calls web service to get weather details using incorrect latitude longitude
    Given user enters city with a latitude 400 and longitude 400
    When a user retrieves the weather
    Then the status code is 404
    
    
    
