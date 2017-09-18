const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
    Given(/^I navigate to dhis2$/, () => {
        return client.page.login().navigate().login('admin', 'password');
    });

    Then(/^the login form exists$/, () => {
        client.page.login()
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')

        return client.end();
});

});
