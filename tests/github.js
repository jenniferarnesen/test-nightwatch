var conf = require('../nightwatch.conf.js');

module.exports = {
  'Demo test nettavisen.no': function (browser) {
    browser
        .url('http://www.nettavisen')   // visit the url
        .waitForElementVisible('body', 2000); // wait for the body to be rendered
    
    // part two:
    browser
        .assert.containsText('body', 'nettavisen') // assert contains
        .end();
    }
  };
