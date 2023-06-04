const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportHeight: 1366,
    viewportWidth: 768,
    
    e2e: {
    baseUrl: 'http://localhost:3000',
    reties: {
      openMode: 2,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
