const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    env: {
      apiUrl: 'http://localhost:3333'
    },
    defaultCommandTimeout: 10000,
    video: true,
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
