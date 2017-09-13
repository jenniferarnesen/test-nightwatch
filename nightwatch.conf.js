module.exports = {
  "src_folders": ["tests"],
  
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": false, // tells nightwatch to start/stop the selenium process
    "server_path": "./node_modules/selenium-standalone/.selenium/selenium-server/3.5.3-server.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      "webdriver.chrome.driver" : "./node_modules/nightwatch/bin/chromedriver"
    }
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

    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}
