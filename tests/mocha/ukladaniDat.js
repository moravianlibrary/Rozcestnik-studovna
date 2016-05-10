describe('ukladani dat', function () {

    before(function () {
        if (!browser.hasOwnProperty('goTo')) {
            require('./customCommands').init();
        }
    });

    it('open and check ukladani dat', function () {
        browser.goTo('/');
        browser.followLink('Nápověda');
        browser.followLink('Ukládání dat');

        browser.getText('h1').should.equal('Ukládání dat');

        browser.followLink('online uložiště');
        browser.getUrl().should.equal('http://www.uschovna.cz/');
        browser.back();
    });
});