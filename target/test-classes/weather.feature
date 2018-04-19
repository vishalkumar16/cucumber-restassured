Feature: Get weather by details

  Scenario Outline: User calls web service to get weather details by city name, country
    Given user enters city with a name "<cityname>"
    When a user retrieves the weather
    Then the status code is <code>
    And has correct temp "<temperature>" hum "<humidity>"

    Examples: 
      | cityname  | code | temperature | humidity |
      | London,UK |  200 |      280.32 |       81 |
      | Delhi,IND |  200 |          98 |       90 |

  Scenario Outline: User calls web service to get weather details of invalid country
    Given user enters city with a name "<cityname>"
    When a user retrieves the weather
    Then the status code is <code>

    Examples: 
      | cityname   | code |
      | ABCDEF,XYZ |  401 |

  Scenario Outline: User calls web service to get weather details by latitude and longitude
    Given user enters city with a latitude "<latitude>" and longitude "<longitude>"
    When a user retrieves the weather
    Then the status code is <code>
    And has correct temp "<temperature>" hum "<humidity>"

    Examples: 
      | latitude | longitude | code | temperature | humidity |
      |    35.02 |    139.01 |  200 |     285.514 |      100 |
      |       56 |       119 |  200 |          98 |       90 |

  Scenario Outline: User calls web service to get weather details by incorrect latitude and longitude
    Given user enters city with a latitude "<latitude>" and longitude "<longitude>"
    When a user retrieves the weather
    Then the status code is <code>

    Examples: 
      | latitude | longitude | code |
      |      400 |       400 |  401 |
