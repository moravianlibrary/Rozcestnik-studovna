describe('homepage', function () {

    before(function () {
        if (!browser.hasOwnProperty('goTo')) {
            require('./customCommands').init();
        }
    });

    it('check links of homepage only czech version', function () {
        browser.goTo('/');

        browser.checkElementUrl('#dl-circle-text', '/cs/digitalni-knihovna-napoveda');
        browser.checkElementUrl('#print-text', '/cs/tisk');

        browser.checkLinkUrl('Digitální knihovna MZK', '/cs/digitalni-knihovna');
        browser.checkExternalLinkUrl('Webové stránky MZK', 'http://www.mzk.cz/');
        browser.checkExternalLinkUrl('Katalog MZK', 'https://vufind.mzk.cz/');
        browser.checkLinkUrl('Nápověda', '/cs/napoveda');

        browser.checkExternalLinkUrl('Akce v MZK', 'http://www.mzk.cz/akce');
        browser.checkExternalLinkUrl('Elektronické informační zdroje', 'https://www.mzk.cz/katalogy-databaze/databaze');
        browser.checkExternalLinkUrl('Tiskové úlohy', 'http://safeq.mzk.cz:8082/');
    });
});