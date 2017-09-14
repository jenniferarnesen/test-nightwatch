// require('geckodriver');

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
  
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": "./node_modules/selenium-server/lib/runner/selenium-server-standalone-3.5.3.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    // "cli_args": {
    //   "webdriver.chrome.driver" : "./node_modules/chromedriver/lib/chromedriver/chromedriver",
    //   "webdriver.gecko.driver" : "./node_modules/geckodriver/geckodriver",
    // }
  },
  
  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "marionette": true
      }
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
