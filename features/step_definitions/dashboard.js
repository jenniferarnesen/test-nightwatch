const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

const loginPage = client.page.login();

defineSupportCode(({Given, Then, BeforeAll, AfterAll}) => {
    Given(/^I am logged in$/, () => {
        loginPage.navigate().doLogin('admin', 'district');

        return client.pause(2000);
    });

    Then(/^the dashboard page should be loaded$/, () => {
        client.page.dashboard()
            .assert.visible('@main')
            .doLogout(client.launchUrl);

        return client.end();
    });
});
