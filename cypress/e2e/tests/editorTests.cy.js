import EmailManagerPage from '../../../pages/contentManager';

describe('Email Editor Tests with Nested XPath', () => {
  before(() => {
    // Visit the base URL
    cy.visit('https://react-email-editor-demo.netlify.app/');
  });

  it('Should modify text properties inside nested iframe and verify changes', () => {
    const emailManagerPage = new EmailManagerPage();
      emailManagerPage.changeTextSize(40);
      emailManagerPage.changeFontFamily('Andale Mono');
      emailManagerPage.exportHtmlFunction();
      emailManagerPage.cssPropertiesAssetions("40px", '"andale mono", times')
  });
});
 