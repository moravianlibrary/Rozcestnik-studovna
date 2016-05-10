describe('Linux page', function () {

    before(function () {
        if (!browser.hasOwnProperty('goTo')) {
            require('./customCommands').init();
        }
    });

    it('open and check Linux page', function () {
        browser.goTo('/');
        browser.followLink('Nápověda');
        browser.followLink('Linux');

        browser.getText('h1').should.equal('Proč používáme Linux?');

        browser.followLink('Aplikace');
        browser.getRelativeUrl().should.equal('/cs/aplikace');
        browser.getText('h1').should.equal('Aplikace');
        browser.back();
    });
});