// require('geckodriver');
const seleniumServer = require('selenium-server')
require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'features/step_definitions',
        // '--format', 'pretty',
        '--format', 'json:reports/cucumber.json',
        'features'
      ]
});

module.exports = {
//   "src_folders": ["tests"],
  
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "custom_commands_path": "./custom_commands",
  
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": seleniumServer.path,
    "host": "127.0.0.1",
    "port": 4444,
    // "cli_args": {
    //   "webdriver.chrome.driver" : "./node_modules/chromedriver/lib/chromedriver/chromedriver",
    //   "webdriver.gecko.driver" : "./node_modules/geckodriver/geckodriver",
    // }
  },
  
  "test_settings" : {
    "default" : {
      "launch_url" : process.env.DHIS2_LOCAL || "http://localhost:8080",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        // "marionette": true,
        "acceptSslCerts": true
      }
    },

    "demo": {
        "launch_url": "https://play.dhis2.org/demo"
    },

    // "firefox" : {
    //   "desiredCapabilities": {
    //     "browserName": "firefox",
    //     "marionette": true,
    //     "javascriptEnabled": true
    //   }
    // },

    // "edge" : {
    //   "desiredCapabilities": {
    //     "browserName": "MicrosoftEdge"
    //   }
    // }
  }
}
