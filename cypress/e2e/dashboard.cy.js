describe("Overview Dashboard", () => {
  it("should allow user to access the overview dashboard after login", () => {
    // Skenario:
    // 1. User membuka halaman login
    // 2. User memasukkan email dan password yang valid
    // 3. User menekan tombol Login
    // 4. User diarahkan ke halaman overview/dashboard
    // 5. User melihat konten dashboard seperti Total Balance dan Upcoming Bill

    cy.viewport(1280, 720);
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.url().should("include", "/overview");
    cy.contains("Total Balance").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.get("nav").should("exist");
    cy.get("header").should("exist");
  });
});
