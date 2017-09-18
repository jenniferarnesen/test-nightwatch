const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

const loginPage = client.page.login();

defineSupportCode(({Given, Then, BeforeAll, AfterAll}) => {
    // BeforeAll({tags: '@dashboard'}, () => client.login(client.launchUrl, 'admin', 'district'));

    Given(/^I am logged in$/, () => {

        loginPage.navigate().doLogin('admin', 'district');

        return client.waitForElementVisible('#mainPage', 2000); //make this a command in dashboard page?
    });

    Then(/^the dashboard page should be loaded$/, () => {
        client.page.dashboard()
            .assert.visible('@main')
            .doLogout(client.launchUrl);
        return client.end();
    });

    // AfterAll({tags: "@dashboard"}, () => client.logout(client.launchUrl));
});
