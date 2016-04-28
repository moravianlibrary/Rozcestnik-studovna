describe('markdown help pages', function () {

    before(function () {
        if (!browser.hasOwnProperty('goTo')) {
            require('./customCommands').init();
        }
    });

    it('open and check digitalni knihovna MZK page', function () {
        browser.goTo('/cs/digitalni-knihovna-napoveda');

        browser.followLink('speciální prohlížeč');
        browser.getRelativeUrl().should.equal('/cs/digitalni-knihovna');
        browser.back();

        browser.followLink('vytisknout');
        browser.getRelativeUrl().should.equal('/cs/jak-tisknout');
        browser.back();

        browser.followLink('O digitální knihovně');
        browser.getRelativeUrl().should.equal('/cs/o-digitalni-knihovne');
        browser.back();

        browser.followLink('Jak hledat');
        browser.getRelativeUrl().should.equal('/cs/jak-hledat');
        browser.back();

        browser.followLink('Jak hledat');
        browser.getRelativeUrl().should.equal('/cs/jak-hledat');
        browser.back();

        browser.followLink('Jak tisknout');
        browser.getRelativeUrl().should.equal('/cs/jak-tisknout');
        browser.back();

        browser.followLink('Půjčení tabletů');
        browser.getRelativeUrl().should.equal('/cs/tablety');
        browser.back();

        browser.followLink('Mobilní aplikace Kramerius');
        browser.getRelativeUrl().should.equal('/cs/mobilni-aplikace-kramerius');
        browser.back();

        browser.followLink('Registrace a Oblíbené');
        browser.getRelativeUrl().should.equal('/cs/registrace-a-oblibene');
    });
});