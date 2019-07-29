// Tests built around our Storybook
function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}

// Let's build some tests around Storybook
context('Storybook', () => {
  beforeEach(() => {
    // Visiting our app before each test removes any state build up from
    // previous tests. Visiting acts as if we closed a tab and opened a fresh one.
    cy.visit('http://localhost:6006');
    cy.get('div[data-name="Button"]').click();
    // cy.get('a[data-name="default"]').click();
    cy.get('body').type('{ctrl}{shift}F');
  });
  describe('Button', () => {
    it('should be clickable', () => {
      // This is an implicit assertion that this element exists
      cy.viewport('macbook-15');

      // Now get the iframe for the components and make assertions on that.
      cy.get('#storybook-preview-iframe').then(($iframe) => {
        const doc = $iframe.contents();
        iget(doc, '.btn-default').click();
      });
    });
  });
});
