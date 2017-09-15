const max_load_ms = 5000;

exports.command = function(url, username, password) {
  this
    .url(url)
    .waitForElementVisible('input#j_username', max_load_ms)
    .setValue('input#j_username', username)
    .setValue('input[type=password]', password)
    .click('input[type=submit]')
    .pause(max_load_ms)

  return this;
};
