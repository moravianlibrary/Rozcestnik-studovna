module.exports = {
    init: function () {

        browser.addCommand("goTo", function (url) {
            var urlModule = require('url');
            browser.url(urlModule.resolve(process.env.ROOT_URL, url));
        });

        browser.addCommand("pressButton", function (buttonText) {
            browser.waitForVisible('button=' + buttonText);
            browser.click('button=' + buttonText);
        });

        browser.addCommand("followLink", function (linkText) {
            browser.waitForVisible('a=' + linkText);
            browser.click('a=' + linkText);
            return browser;
        });

        browser.addCommand("isNotVisible", function (selector) {
            return !browser.isVisible(selector);
        });

        browser.addCommand("getRelativeUrl", function () {
            var url = browser.getUrl();
            if (url.indexOf('localhost') > -1) {
                return url.replace(/.*:\/\/.*:\d{4}/g, "");
            }
        });

        browser.addCommand("checkExternalLinkUrl", function (link, url) {
            browser.followLink(link);
            browser.switchTab(browser.windowHandles().value[1]);
            browser.getUrl().should.equal(url);
            browser.close();
        });

        browser.addCommand("checkLinkUrl", function (link, url) {
            browser.followLink(link);
            browser.getRelativeUrl().should.equal(url);
            browser.back();
        });

        browser.addCommand("checkElementUrl", function (id, url) {
            browser.click(id);
            browser.getRelativeUrl().should.equal(url);
            browser.back();
        });
    }
};