Feature: Login functionality

  Scenario: Successful login
    Given I am on the login page
    When I fill in valid username 
    And I fill in valid password
    And I click the login button
    Then I should be redirected to the dashboard page

  Scenario: Logout after successful login
    Given I am logged in
    When I click on the profile dropdown
    And I click on the logout button
    Then I should be redirected to the login page
    And a successful logout message should appear

  Scenario: Incorrect login credentials
    Given I am on the login page
    When I fill in invalid username 
    And I fill in invalid password
    And I click the login button
    Then I should be redirected to the verify page
    And I am on the verify page
    When I fill in the captcha text
    And I click on the login button
    Then I should be redirected back to the login page
    And a login error message should appear
