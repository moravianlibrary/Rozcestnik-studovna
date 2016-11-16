describe('In help pages there is sidebar menu with links', function () {

    var _;

    before(function () {
        if (!browser.hasOwnProperty('goTo')) {
            require('./customCommands').init();
        }
        _ = require('underscore');
    });

    it('Check links in sidebar @dev', function () {
        this.timeout(120000);

        var helpQuestionSelector = '#dl-circle-text';
        var printQuestionSelector = '#print-text';

        var pagesWithLinks = {
            dataSavingsHelpPage: {
                url: {
                    cs: '/cs/ukladani-dat',
                    en: ''
                },
                links: {
                    onlineStorage: {
                        cs: {
                            link: 'online uložiště',
                            url: 'http://www.uschovna.cz/'
                        }
                    }
                }
            },
            linuxPage: {
                url: {
                    cs: '/cs/linux',
                    en: ''
                },
                links: {
                    apps: {
                        cs: {
                            link: 'Aplikace',
                            url: '/cs/aplikace'
                        }
                    },
                    aboutLinux: {
                        cs: {
                            link: 'O Linuxu',
                            url: 'https://cs.wikipedia.org/wiki/Linux'
                        }
                    },
                    aboutOpenSource: {
                        cs: {
                            link: 'O otevřeném software',
                            url: 'https://cs.wikipedia.org/wiki/Otev%C5%99en%C3%BD_software'
                        }
                    },
                    aboutDebian: {
                        cs: {
                            link: 'O distribuci Debian',
                            url: 'https://cs.wikipedia.org/wiki/Debian'
                        }
                    },
                    aboutXfce: {
                        cs: {
                            link: 'O prostředí XFCE',
                            url: 'https://cs.wikipedia.org/wiki/Xfce'
                        }
                    }
                }
            },
            printPage: {
                url: {
                    cs: '/cs/tisk',
                    en: ''
                },
                links: {
                    safeQ: {
                        cs: {
                            link: 'myq.mzk.cz',
                            url: 'http://myq.mzk.cz:8082/'
                        }
                    },
                    fees: {
                        cs: {
                            link: 'Kompletní ceník služeb a poplatků',
                            url: 'https://www.mzk.cz/cenik-placenych-sluzeb-poplatku-v-kc'
                        }
                    },
                    printTutorial: {
                        cs: {
                            link: 'Návod, jak tiskout z DK MZK',
                            url: '/cs/jak-tisknout'
                        }
                    }
                }
            },
            digitalLibraryPage: {
                url: {
                    cs: '/cs/digitalni-knihovna-napoveda',
                    en: ''
                },
                links: {
                    pacho: {
                        cs: {
                            link: 'Prohlížeč autorsky chráněného obsahu',
                            url: '/cs/digitalni-knihovna'
                        }
                    },
                    print: {
                        cs: {
                            link: 'vytisknout',
                            url: '/cs/jak-tisknout'
                        }
                    },
                    about: {
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
                    howToPrint: {
                        cs: {
                            link: 'Jak tisknout',
                            url: '/cs/jak-tisknout'
                        }
                    },
                    mobileApp: {
                        cs: {
                            link: 'Mobilní aplikace Kramerius',
                            url: '/cs/mobilni-aplikace-kramerius'
                        }
                    },
                    registrationFavoriutes: {
                        cs: {
                            link: 'Registrace a Oblíbené',
                            url: '/cs/registrace-a-oblibene'
                        }
                    }
                }
            },
            aboutDlPage: {
                url: {
                    cs: '/cs/o-digitalni-knihovne',
                    en: ''
                },
                links: {
                    secureBrowser: {
                        cs: {
                            link: 'Prohlížeči autorsky chráněného obsahu',
                            url: '/cs/digitalni-knihovna'
                        }
                    }
                }
            },
            howToSearchPage: {
                url: {
                    cs: '/cs/jak-hledat',
                    en: ''
                },
                links: {
                    dl: {
                        cs: {
                            link: 'digitální knihovně',
                            url: 'http://kramerius.mzk.cz/search/'
                        }
                    },
                    catalogue: {
                        cs: {
                            link: 'katalogu',
                            url: 'https://vufind.mzk.cz/'
                        }
                    }
                }
            },
            computersHelpPage: {
                url: {
                    cs: '/cs/pocitace-v-mzk',
                    en: ''
                },
                links: {
                    databases: {
                        cs: {
                            link: 'předplacených databází',
                            url: 'https://www.mzk.cz/katalogy-databaze/databaze'
                        }
                    },
                    savingData: {
                        cs: {
                            link: 'Ukládání dat',
                            url: '/cs/ukladani-dat'
                        }
                    },
                    linux: {
                        cs: {
                            link: 'Linux',
                            url: '/cs/linux'
                        }
                    },
                    Aplikace: {
                        cs: {
                            link: 'Aplikace',
                            url: '/cs/aplikace'
                        }
                    },
                    sluchatka: {
                        cs: {
                            link: 'Sluchátka',
                            url: '/cs/sluchatka'
                        }
                    },
                    tisk: {
                        cs: {
                            link: 'Tisk',
                            url: '/cs/tisk'
                        }
                    }
                }
            },
            digitalniKnihovnaPage: {
                url: {
                    cs: '/cs/digitalni-knihovna',
                    en: ''
                },
                links: {
                    openFree: {
                        cs: {
                            link: 'OTEVŘÍT',
                            url: 'http://kramerius.mzk.cz/search/'
                        }
                    },
                    moreAbout: {
                        cs: {
                            link: 'VÍCE O DIGITÁLNÍ KNIHOVNĚ',
                            url: '/cs/digitalni-knihovna-napoveda'
                        }
                    },
                    tutorial: {
                        cs: {
                            link: 'NÁVOD',
                            url: '/cs/jak-tisknout'
                        }
                    }
                }
            },
            homePage: {
                url: {
                    cs: '/cs',
                    en: ''
                },
                links: {
                    helpQuestion: {
                        cs: {
                            link: helpQuestionSelector,
                            url: '/cs/digitalni-knihovna-napoveda'
                        },
                        en: {
                            link: helpQuestionSelector,
                            url: ''
                        }
                    },
                    printQuestion: {
                        cs: {
                            link: printQuestionSelector,
                            url: '/cs/tisk'
                        },
                        en: {
                            link: printQuestionSelector,
                            url: ''
                        }
                    },
                    digitalLibrary: {
                        cs: {
                            link: 'Digitální knihovna MZK',
                            url: '/cs/digitalni-knihovna'
                        }
                    },
                    webPagesMZK: {
                        cs: {
                            link: 'Webové stránky MZK',
                            url: 'http://www.mzk.cz/'
                        }
                    },
                    catalogue: {
                        cs: {
                            link: 'Katalog MZK',
                            url: 'https://vufind.mzk.cz/'
                        }
                    },
                    helpPage: {
                        cs: {
                            link: 'Nápověda',
                            url: '/cs/napoveda'
                        }
                    },
                    actionsMZK: {
                        cs: {
                            link: 'Akce v MZK',
                            url: 'http://www.mzk.cz/akce'
                        }
                    },
                    sources: {
                        cs: {
                            link: 'Elektronické informační zdroje',
                            url: 'https://www.mzk.cz/katalogy-databaze/databaze'
                        }
                    },
                    safeQ: {
                        cs: {
                            link: 'Tiskové úlohy',
                            url: 'http://myq.mzk.cz:8082/'
                        }
                    }
                }
            },
            helpPage: {
                url: {
                    cs: '/cs/napoveda',
                    en: ''
                },
                links: {
                    computersInMzk: {
                        cs: {
                            link: 'Počítače v MZK',
                            url: '/cs/pocitace-v-mzk'
                        }
                    },
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
                        },
                        en: {
                            link: 'Linux',
                            url: '/en/linux'
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

                }
            }
        };

        function test(lang) {
            for (var key in pagesWithLinks) {
                if (pagesWithLinks.hasOwnProperty(key)) {
                    var page = pagesWithLinks[key];
                    browser.goTo(page.url[lang]);
                    for (key in page) {

                    }
                }
            }

            _.each(pagesWithLinks, (page) => {
                browser.goTo(page.url[lang]);
                _.each(page.links, (link) => {
                    browser.checkLinkUrl(link[lang].link, link[lang].url);
                })
            });
        }

        test('cs');
        //test('en');
    });
});
