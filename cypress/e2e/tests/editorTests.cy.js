import ContentEditorPage from '../../../pages/contentManager';

describe('Email Editor Tests with Nested XPath', () => {
  before(() => {
    // Visit the base URL
    cy.visit('https://react-email-editor-demo.netlify.app/');
  });

  it('Should modify text properties inside nested iframe and verify changes', () => {
    const contentEditorPage = new ContentEditorPage();
      contentEditorPage.updateTextSize(50);
      contentEditorPage.updateFontFamily('Arial Black');
      contentEditorPage.triggerHtmlExport();
      contentEditorPage.verifyCssProperties("50px", '"arial black", AvenirNext-Heavy, "avant garde", arial')
  });
});
 