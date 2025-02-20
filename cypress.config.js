const { defineConfig } = require("cypress");

const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {

  const pathToConfigFile = path.resolve("cypress/config", `${file}.json`);

  return fs.readJson(pathToConfigFile);

}

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720,
    component: {
      viewportWidth: 500,
      viewportHeight: 500,
    },
    retries: {
      runMode: 5,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.ENV || "dev";
      let newConfig = getConfigurationByFile(file.toLowerCase());
      require('cypress-grep/src/plugin')(newConfig);
      return (newConfig)

    },

  },

});
