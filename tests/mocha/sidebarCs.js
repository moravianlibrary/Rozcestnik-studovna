describe('sidebar', function () {

    before(function () {
        if (!browser.hasOwnProperty('goTo')) {
            require('./customCommands').init();
        }
    });

    it('check links in sidebar @dev', function () {
        var links = {
            intro: {
                cs: {
                    link: 'Úvod',
                    url: '/cs/napoveda'
                },
                en: {
                    link: 'Introduction',
                    url: '/en/help'
                }
            },
            computers: {
                cs: {
                    link: 'Počítače v MZK',
                    url: '/cs/pocitace-v-mzk'
                },
                en: {
                    link: 'Computers in MZK',
                    url: '/en/computers-in-mzk'
                }
            },
            storingData: {
                cs: {
                    link: 'Ukládání dat',
                    url: '/cs/ukladani-dat'
                },
                en: {
                    link: 'Storing data',
                    url: '/en/storing-data'
                }
            }
        };

        function test(lang) {
            browser.goTo(links.intro[lang].url);

            browser.checkLinkUrl(links.computers.cs.link, links.computers.cs.url);
            browser.goTo(links.intro.en.url);

            browser.checkLinkUrl(links.computers.en.link, links.computers.en.url);


            //for (var page in links) {
            //    if (links.hasOwnProperty(page)) {
            //        console.log(links[page][lang].link);
            //        console.log(links[page][lang].url);
            //        browser.checkLinkUrl(links[page][lang].link, links[page][lang].url);
            //    }
            //}
        }

        test('cs');
        //test('en');

    });
});