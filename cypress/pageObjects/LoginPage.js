class LoginPage {
  visit() {
    cy.visit("http://wave-trial.getbynder.com/");
  }

  fillUsername(username) {
    cy.get("#inputEmail").clear().type(username);
  }

  fillPassword(password) {
    cy.get("#inputPassword").clear().type(password);
  }

  clickLoginButton() {
    cy.get(".login-btn").click();
  }

  assertLoginErrorMessage() {
    cy.get(".notification > h1").should(
      "have.text",
      "You have entered an incorrect username or password."
    );
  }

  assertVerifyPageLoginErrorMessage() {
    cy.url().should("include", "/verify");
    cy.get(".login-btn").click();

    cy.url().should("include", "/login");
    this.assertLoginErrorMessage();
  }
}

export default LoginPage;
