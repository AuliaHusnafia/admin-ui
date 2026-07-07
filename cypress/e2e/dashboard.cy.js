describe("Dashboard overview", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
  });

  it("should log in and show the overview dashboard", () => {
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.url({ timeout: 10000 }).should("include", "/overview");

    cy.get("nav").should("be.visible");
    cy.get("header").should("be.visible");
    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
  });
});
