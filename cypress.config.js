const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:8000',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser, launchOptions) => {
        const extensionFolder = path.join(__dirname, './example-extension');

        launchOptions.args.push(`--load-extension=${extensionFolder}`);

        return launchOptions;
      });
    },
  },
});
