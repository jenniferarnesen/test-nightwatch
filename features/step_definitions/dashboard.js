const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({Given, Then, BeforeAll, AfterAll}) => {
    BeforeAll({tags: "@dashboard"}, () => client.login(client.launchUrl, 'admin', 'district'));

    Given(/^I am logged in$/, () => client.waitForElementVisible('body', 2000));

    Then(/^the dashboard page should be loaded$/, () => {
        return client.assert.elementPresent('#mainPage');
    });

    AfterAll({tags: "@dashboard"}, () => client.logout(client.launchUrl));
});
