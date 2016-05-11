describe('In help pages there is sidebar menu with links', function () {

    before(function () {
        if (!browser.hasOwnProperty('goTo')) {
            require('./customCommands').init();
        }
    });

    it('Check links in sidebar @dev', function () {
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
            },
            linux: {
                cs: {
                    link: 'Linux',
                    url: '/cs/linux'
                }
            },
            apps: {
                cs: {
                    link: 'Aplikace',
                    url: '/cs/aplikace'
                }
            },
            headphones: {
                cs: {
                    link: 'Sluchátka',
                    url: '/cs/sluchatka'
                }
            },
            print: {
                cs: {
                    link: 'Tisk',
                    url: '/cs/tisk'
                }
            },
            digitalLibrary: {
                cs: {
                    link: 'Digitální knihovna MZK',
                    url: '/cs/digitalni-knihovna-napoveda'
                }
            },
            aboutDigitalLibrary: {
                cs: {
                    link: 'O digitální knihovně',
                    url: '/cs/o-digitalni-knihovne'
                }
            },
            search: {
                cs: {
                    link: 'Jak hledat',
                    url: '/cs/jak-hledat'
                }
            },
            hotToPrint: {
                cs: {
                    link: 'Jak tisknout',
                    url: '/cs/jak-tisknout'
                }
            },
            lendingTablets: {
                cs: {
                    link: 'Půjčení tabletů',
                    url: '/cs/tablety'
                }
            },
            mobileAppKramerius: {
                cs: {
                    link: 'Mobilní aplikace Kramerius',
                    url: '/cs/mobilni-aplikace-kramerius'
                }
            },
            registration: {
                cs: {
                    link: 'Registrace a oblíbené',
                    url: '/cs/registrace-a-oblibene'
                }
            }
        };

        function test(lang) {
            browser.goTo(links.intro[lang].url);

            for (var key in links) {
                if (links.hasOwnProperty(key)) {
                    browser.checkLinkUrl(links[key][lang].link, links[key][lang].url);
                }
            }
        }
        test('cs');
        //test('en');
    });
});