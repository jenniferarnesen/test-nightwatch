// const max_load_ms = 2000;

exports.command = function(url) {
    this.click('a[href="'+ url +'/dhis-web-commons-security/logout.action"]');
        // .waitForElementVisible('input#j_username', max_load_ms)

    return this;
};
