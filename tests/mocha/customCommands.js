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
            browser.waitForVisible('a=' + linkText, 1000);
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

        browser.addCommand("checkLinkUrl", function (link, url) {
            console.log('link: ' + link);
            var linkFunction = link.charAt(0) === '#' ? browser.click : browser.followLink;

            if (url.charAt(0) === '/') {
                // internal relative link
                linkFunction(link);
                browser.pause(1000);
                console.log('internalUrl: ' + browser.getRelativeUrl());
                browser.getRelativeUrl().should.equal(url);
                browser.back();
            } else {
                // external link starts with http...
                linkFunction(link);
                browser.pause(1000);
                browser.switchTab(browser.windowHandles().value[1]);
                console.log('externalUrl: ' + browser.getUrl());
                browser.getUrl().should.equal(url);
                browser.close();
            }
        });

        browser.addCommand("checkElementUrl", function (id, url) {
            browser.click(id);
            browser.getRelativeUrl().should.equal(url);
            browser.back();
        });
    }
};