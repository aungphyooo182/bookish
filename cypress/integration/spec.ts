describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');

    //separating test can be done

    cy.fixture('login').then((login) => {
      cy.contains(login.welcome);
      cy.contains(login.title);
      cy.contains(login.email);
      cy.contains(login.password);
      cy.contains(login.button);
      cy.contains(login.redirect);
      cy.contains(login.disclaimer);
      cy.contains(login.disclaimerDescription);

      cy.get('#id_email').type(login.mockEmail);
      cy.get('#id_Password').type(login.mockPassword);

      cy.get('.btn-primary').click();
      cy.contains(login.accountDoesntExist);
      cy.get('.signup-link').click();
      cy.url().should('include', '/signup');
    });

    cy.fixture('register').then((register) => {
      cy.contains(register.welcome);
      cy.contains(register.title);
      cy.contains(register.email);
      cy.contains(register.firstName);
      cy.contains(register.lastName);
      cy.contains(register.password);
      cy.contains(register.confirmPassword);
      cy.contains(register.button);
      cy.contains(register.redirect);
      cy.contains(register.disclaimer);
      cy.contains(register.disclaimerDescription);

      cy.get('#id_email').type(register.mockEmail);
      cy.get('#id_firstName').type(register.mockFirstName);
      cy.get('#id_lastName').type(register.mockLastName);
      cy.get('#id_Password').type(register.mockPassword);
      cy.get('#id_confirmPassword').type(register.mockConfirmPassword);
      cy.get('.btn-primary').click();
      cy.url().should('include', '/login');
    });

    cy.fixture('login').then((login) => {
      cy.contains(login.welcome);
      cy.contains(login.title);
      cy.contains(login.email);
      cy.contains(login.password);
      cy.contains(login.button);
      cy.contains(login.redirect);
      cy.contains(login.disclaimer);
      cy.contains(login.disclaimerDescription);

      cy.get('#id_email').type(login.mockEmail);
      cy.get('#id_Password').type(login.mockPassword);

      cy.get('.btn-primary').click();
      cy.url().should('include', '/dashboard');
    });

    cy.fixture('dashboard').then((dashboard) => {
      cy.contains(dashboard.brand);
      cy.contains(dashboard.home);
      cy.contains(dashboard.categories);
      cy.get('.active > .d-block').should('be.visible');
      cy.get(':nth-child(1) > .card > .card-body').should('be.visible');
      cy.get(':nth-child(10) > .card > .card-body').should('be.visible');
      cy.get(':nth-child(11) > .card > .card-body').should('not.exist');
      cy.get('.btn .btn-default').click();
      cy.get(':nth-child(20) > .card > .card-body').should('be.visible');
      cy.get(':nth-child(1) > .card > .card-body > app-button > .btn').click({
        force: true,
      });
      cy.url().should('include', '/books/combined-print-and-e-book-fiction');
    });

    cy.fixture('category').then((category) => {
      cy.contains(category.title);
      cy.contains(category.updated);
      cy.contains(category.bestSellersDate);
      cy.contains(category.nextPublishedDate);
      cy.contains(category.previousPublishedDate);
      cy.contains(category.bookCounts);

      cy.get(':nth-child(1) > .card > .card-body > app-button > .btn').click({
        force: true,
      });
    });
  });
});
