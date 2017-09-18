const max_load_ms = 2000;

const usernameField = 'input#j_username';
const passwordField = 'input[type=password]';
const submitButton = 'input[type=submit]';

const commands = {
    doLogin: function(username, password) {
        this.api
            .waitForElementVisible(usernameField, max_load_ms)
            .setValue(usernameField, username)
            .setValue(passwordField, password)
            .click(submitButton)
            .pause(max_load_ms)

        return this;
    },
};

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        usernameField,
        passwordField,
        submitButton,
    },
    commands: [commands],
}
