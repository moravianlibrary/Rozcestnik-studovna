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
    }
};