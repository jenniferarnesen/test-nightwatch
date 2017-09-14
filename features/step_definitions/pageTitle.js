// features/step_definitions/pageTitle.js

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
  Then(/^the title is "([^"]*)"$/, (title) => {
    return client.assert.title(title);
  });
});