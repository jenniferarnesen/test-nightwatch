const commands = {
    doLogout: function (url) {
        return this.click('a[href="'+ url +'/dhis-web-commons-security/logout.action"]');
    },
}

module.exports = {
    elements: {
        main: '#mainPage',
    },
    commands: [commands]
}
