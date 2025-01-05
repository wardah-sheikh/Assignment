class ContentEditorPage {
    iframeLocator = 'iframe[src="https://editor.unlayer.com/1.188.0/editor.html"]';
    editableElement = '#u_content_heading_2 .editable';
    headingLocator = '#u_content_heading_2';
    textSizeInputField = '[name="counter-input"]';
    fontFamilyDropdown = 'span:contains("Select...")';
    htmlExportButton = 'button:contains("Export HTML")';
  
    getIframeContent() {
        return cy.getIframeContent(this.iframeLocator);
    }
  
    updateTextSize(newSize) {
        this.getIframeContent().find(this.headingLocator).click({ force: true });
        this.getIframeContent().find(this.textSizeInputField).eq(0).click({ force: true });
        this.getIframeContent().find(this.textSizeInputField).eq(0).clear();
        cy.wait(2000);
        this.getIframeContent().find(this.textSizeInputField).eq(0).click({ force: true });
        this.getIframeContent().find(this.textSizeInputField).eq(0).type(newSize);
    }
  
    updateFontFamily(fontFamily) {
        this.getIframeContent().find(this.fontFamilyDropdown).click({ force: true });
        this.getIframeContent().find(`span:contains("${fontFamily}")`).eq(0).click({ force: true });
    }
  
    triggerHtmlExport() {
        cy.get(this.htmlExportButton).click();
    }
  
    verifyCssProperties(expectedFontSize, expectedFontFamily) {
        this.getIframeContent().find(this.editableElement).should('have.css', 'font-size', `${expectedFontSize}`).should('have.css', 'font-family', `${expectedFontFamily}`);
    }
  }
  
  export default ContentEditorPage;  