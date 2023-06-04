describe('login page', () => {
  beforeEach(() => {
  cy.visit('/');
});

  it('logins user', () => {
     cy.login("test@test.com", "test");
     cy.contains("Добро пожаловать test@test.com").should("be.visible"); 
  })
  
  it("show error message on empty login", () => {
    cy.login(null, "test");

    cy.get("#mail")
      .then((element) => element[0].checkValidity())
      .should("be.false");

    cy.get("#mail")
      .then((element) => element[0].validationMessage)
      .should("contain", "Заполните это поле");
  });

  it("show error message on empty pass", () => {
    cy.login("test@test.com", null);

    cy.get("#mail").type("test@test.com");

    cy.get("#pass")
      .then((element) => element[0].checkValidity())
      .should("be.false");

    cy.get("#pass")
      .then((element) => element[0].validationMessage)
      .should("contain", "Заполните это поле");
  });

  it("should Add a book", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Books list").click();
    cy.addBook("Title1", "Description1", "Author1");
    cy.contains("Title1").should("be.visible");
  });
  
  it("should Add to favorite", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Books list").click();
    cy.addFavoriteBook("Title2", "Description2", "Author2");
    cy.contains("h4", "Favorites").click();
    cy.contains("Title2").should("be.visible");
  });
  
  it("should not add new book without title", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Books list").click();
    cy.addFavoriteBook(null, "Description2", null);
    cy.get("#title")
      .then((element) => element[0].checkValidity())
      .should("be.false");
    cy.get("#title")
      .then((element) => element[0].validationMessage)
      .should("contain", "Заполните это поле");
  });
})

