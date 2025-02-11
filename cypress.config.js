const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/", // Replace with your system's URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
