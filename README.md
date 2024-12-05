# Playwright Automation

*This project automates end-to-end test scenarios for the application using Playwright and TypeScript. Key features include:*
=> Multi-browser support (Chromium, Firefox, WebKit).
=> Headless and headed execution modes.
=> Integration with CI/CD pipelines (e.g., jenkins, AWS or Azure Pipelines).
=> Automated workflows like form submissions, dropdown selections, and canvas validations.

# Getting Started
*Prerequisites*
=> Node.js: Install the latest Node.js version.
=> Dependencies: Install project dependencies using npm or yarn.

=> Playwright Browsers: Install Playwright browsers:
             "npx playwright install"

=> Run all tests:
             "npx playwright test"

=> Generate Reports
             "npx playwright show-report"

=> Configuration
All configurations are stored in the playwright.config.ts file. Modify parameters like base URL, test directory, retries, and more.

Environment-specific variables are stored in .env files and managed via dotenv.
Example .env file:

             "BASE_URL=https://example.com
             "USERNAME=admin"
             "PASSWORD=secret"
