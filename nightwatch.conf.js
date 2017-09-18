const seleniumServer = require('selenium-server');

require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'features/step_definitions',
        '--format', 'json:reports/cucumber.json',
        'features'
      ]
});

module.exports = {
    "output_folder": "./reports",
    "custom_commands_path": "./custom_commands",
    "page_objects_path": './page_objects',

    "selenium": {
        "start_process": true,
        "server_path": seleniumServer.path,
        "host": "127.0.0.1",
        "port": 4444,
    },

    "test_settings" : {
        "default" : {
            "launch_url" : process.env.DHIS2_LOCALHOST || "http://localhost:8080",
            "selenium_port"  : 4444,
            "selenium_host"  : "localhost",
            "silent": true,
            "screenshots" : {
                "enabled" : false,
                "path" : ""
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "acceptSslCerts": true
            }
        },

        "demo": {
            "launch_url": "https://play.dhis2.org/demo"
        },
    }
}
