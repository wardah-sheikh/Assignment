Cypress.Commands.add('getIframeContent', (iframeSelector) => {
  return cy.get(iframeSelector)
    .should('exist')
    .and('be.visible')
    .its('0.contentDocument')
    .should('not.be.null')
    .its('body')
    .should('not.be.empty')
    .then(cy.wrap);
});  