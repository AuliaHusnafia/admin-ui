```javascript
describe("User Registration", () => {
  beforeEach(() => {
    cy.viewport(550, 750);
    // Server berjalan di port 5174 sesuai dengan log terbaru
    cy.visit("http://localhost:5174/register");
  });

  it("should display all required UI elements for registration", () => {
    // Memeriksa input Name
    cy.get("input#signup-name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Tanzir Rahman");

    // Memeriksa input Email
    cy.get("input#signup-email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com");

    // Memeriksa input Password
    cy.get("input#signup-password")
      .should("be.visible")
      .should("have.attr", "placeholder", "••••••••••••");

    // Memeriksa tombol submit
    cy.get("button").contains("Sign up").should("be.visible");
    
    // Memeriksa tombol Google
    cy.get("button").contains("Continue with Google").should("be.visible");

    // Memeriksa link login
    cy.get("a").contains("Sign in here").should("be.visible");
  });

  it("should allow user to type into input fields", () => {
    cy.get("input#signup-name")
      .type("John Doe")
      .should("have.value", "John Doe");

    cy.get("input#signup-email")
      .type("johndoe@example.com")
      .should("have.value", "johndoe@example.com");

    cy.get("input#signup-password")
      .type("password123")
      .should("have.value", "password123");
  });

  it("should process registration and redirect to login page", () => {
    cy.get("input#signup-name").type("John Doe");
    cy.get("input#signup-email").type("johndoe@example.com");
    cy.get("input#signup-password").type("password123");

    // Klik tombol pendaftaran
    cy.get("button").contains("Sign up").click();

    // Memastikan diarahkan ke halaman login
    cy.url().should("include", "/login");
  });
});
```
