describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');

    cy.fixture('login').then((login) => {
      cy.contains(login.welcome);
      cy.contains(login.title);
      cy.contains(login.email);
      cy.contains(login.password);
      cy.contains(login.button);
      cy.contains(login.redirect);
      cy.contains(login.disclaimer);
      cy.contains(login.disclaimerDescription);

      cy.get('input[name="email"]').type(login.email);
    });
  });
});
