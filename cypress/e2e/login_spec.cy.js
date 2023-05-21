import LoginPage from "../pageObjects/LoginPage";
import DashboardPage from "../pageObjects/DashboardPage";
import data from "../fixtures/data.json";

describe("Login Tests", () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();
  const userData = data;

  beforeEach(() => {
    loginPage.visit();
  });

  it("should login successfully", () => {
    loginPage.fillUsername(userData.username);
    loginPage.fillPassword(userData.password);
    loginPage.clickLoginButton();
    dashboardPage.assertDashboardUrl();
  });

  it("should logout successfully", () => {
    loginPage.fillUsername(userData.username);
    loginPage.fillPassword(userData.password);
    loginPage.clickLoginButton();

    dashboardPage.clickProfileDropdown();
    dashboardPage.clickLogoutButton();
    dashboardPage.assertLoginPageUrl();
    dashboardPage.assertLogoutMessage();
  });

  it("should display error message for incorrect login", () => {
    loginPage.fillUsername("incorrectUsername");
    loginPage.fillPassword("incorrectPassword");
    loginPage.clickLoginButton();

    cy.url().then((url) => {
      if (url.includes("/login")) {
        loginPage.assertLoginErrorMessage();
      } else {
        loginPage.assertVerifyPageLoginErrorMessage();
      }
    });
  });
});
