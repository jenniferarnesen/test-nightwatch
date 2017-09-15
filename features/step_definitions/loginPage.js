const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Given(/^I navigate to dhis2$/, () => {
    return client
        .url(client.launchUrl)
        .waitForElementVisible('body', 2000);
  });

  Then(/^the login form exists$/, () => {
    return client
        .assert.visible('input#j_username')
        .assert.visible('input[type=password]');
  });

});
