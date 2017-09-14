// features/step_definitions/dashboard.js

const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Given(/^I am logged in$/, () => {
    return client
        .login(client.launchUrl, 'admin', 'district');
        // .waitForElementVisible('body', 2000);
  });

  Then(/^the dashboard page should be loaded$/, () => {
    return client
        .assert.elementPresent('#mainPage');
  });

});