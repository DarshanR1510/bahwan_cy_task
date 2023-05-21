class DashboardPage {
  assertDashboardUrl() {
    cy.url().should("include", "/account/dashboard");
  }

  clickProfileDropdown() {
    cy.get(".admin-dropdown.profile").click();
  }

  clickLogoutButton() {
    cy.get(".action-btn.block").click();
  }

  assertLoginPageUrl() {
    cy.url().should("include", "/login");
  }

  assertLogoutMessage() {
    cy.get(".notification > h1").should(
      "have.text",
      "You have successfully logged out."
    );
  }
}

export default DashboardPage;
