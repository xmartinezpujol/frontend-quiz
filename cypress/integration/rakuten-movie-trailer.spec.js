// Open a Movie Trailer
context('Open a Movie Trailer', () => {
  beforeEach(() => {
    // Visiting our app before each test removes any state build up from
    // previous tests. Visiting acts as if we closed a tab and opened a fresh one.
  });
  describe('Go to home', () => {
    it('navigate to movie by click in cover', () => {
      cy.visit('http://localhost:5000');
      cy.wait(5000);
      cy.get('.movie-link').first().click();
    });
    it('open trailer with button', () => {
      cy.get('.play-trailer').click();
      cy.wait(5000);
      cy.get('.close-trailer').should('be.visible');
    });
    it('close trailer with close button', () => {
      cy.get('.close-trailer').click();
      cy.wait(5000);
      cy.get('.play-trailer').should('be.visible');
    });
  });
});

