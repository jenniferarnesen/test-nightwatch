// features/step_definitions/google.js

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Given(/^I open Google's search page$/, () => {
    return client
      .url('http://google.com')
      .waitForElementVisible('body', 2000);
  });

  Then(/^the Google search form exists$/, () => {
    return client.assert.visible('input[name="q"]');
  });

});