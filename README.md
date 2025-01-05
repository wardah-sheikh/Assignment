---

# Automated Testing with Cypress

## Project Overview

This project leverages Cypress to automate the testing of a web-based content editor. It validates the ability to adjust text styles (such as font size and font type) and ensures the exported HTML accurately reflects these modifications.

## Key Features

- Change and validate text styles, including font size and type.
- Export the styled content as HTML.
- Perform robust validations to ensure accurate updates and functionality.

## Getting Started

### Prerequisites

To run this project, ensure the following are installed:

- **Node.js** (version 14 or later)
- **Cypress** (installed globally or as part of the project dependencies)

### Installation and Execution

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Launch Cypress**:
   ```bash
   npx cypress open
   ```
   From the Cypress Test Runner, select and execute the `contentEditorTest.cy.js` file.

## Test Flow

1. **Access the Content Editor**:
   - Navigates to the content editor's interface.

2. **Apply Style Changes**:
   - Updates the text size to `50px`.
   - Switches the font type to `Arial Black`.

3. **Generate Export**:
   - Triggers the export functionality to download the updated HTML template.

4. **Validate Changes**:
   - Verifies the applied styles using CSS-based assertions.

## Customization

- You can modify the font size and font type in the `editorTests.cy.js` file to test additional scenarios.
- Update the test file to add more validations or accommodate new editor features.

---
