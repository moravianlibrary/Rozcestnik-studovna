describe('sidebar', function () {

    before(function () {
        if (!browser.hasOwnProperty('goTo')) {
            require('./customCommands').init();
        }
    });

    it('open items in sidebar', function () {
        //browser.goTo('/cs/napoveda');
        //browser.followLink('Úvod');
        //console.log(browser.getText('#help p:first-child'));

    });
});