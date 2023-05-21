This repository contains automated test scenarios for the login/logout functionalities of the Bynder portal using Cypress.

## Prerequisites

- Node.js and npm should be installed on your machine.
- Docker should be installed to run the tests in a container.


## Getting Started

1. Clone the repository:
   git clone https://github.com/DarshanR1510/bahwan_cy_task
2. Install the dependencies:
   npm install
3. Build the Docker image:
   docker build -t bahwan_cy_task .
4. Run the tests in a Docker container:
   docker run --rm bahwan_cy_task
   
   
Test Scenarios:

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
