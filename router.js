const title = 'vknihovne.mzk.cz';

const links = {
    kramerius: {
        cs: 'http://kramerius.mzk.cz/search/?language=cs',
        en: 'http://kramerius.mzk.cz/search/?language=en'
    },
    webArchiv: {
        cs: 'http://www.webarchiv.cz/cs',
        en: 'http://www.webarchiv.cz/en'
    }
};

TAPi18n._afterUILanguageChange = function () {
    console.log("TAPi18n._afterUILanguageChange");
    I18NConf.setLanguage(TAPi18n.getLanguage());
};

I18NConf.configure({
    languages: ["cs", "en"],
    defaultLanguage: 'cs',
    autoConfLanguage: true
});

Router.configure({
    layoutTemplate: 'appBody',
    loadingTemplate: 'appLoading',
    notFoundTemplate: 'appNotFound'
});

Router.route('home', {
    path: '/',
    onAfterAction: () => {
        document.title = `${title}`;
    }
});

Router.route('digitalni-knihovna', {
    template: 'menuPageTemplate',
    yieldRegions: {digitalniKnihovna: {to: 'pageContent'}},
    onAfterAction: () => {
        document.title = `Digitální knihovna - ${title}`;
    },
    i18n: {
        languages: {
            en: {
                onAfterAction: () => {
                    document.title = `Digital library - ${title}`;
                }
            }
        }
    }
});

Router.route('chraneny-obsah', {
    template: 'secureBrowser',
    onAfterAction: () => {
        document.title = `Prohlížeč autorsky chráněného obsahu - ${title}`;
    },
    i18n: {
        languages: {
            en: {
                onAfterAction: () => {
                    document.title = `Browser for copyright works - ${title}`;
                }
            }
        }
    }
});

/* NAPOVEDA */
function helpPageRouteObject(markdownFileName, titleCs, titleEn) {
    return {
        template: 'helpPageTemplate',
        data: {markdownFile: `${markdownFileName}.cs.md`},
        onAfterAction: () => {
            document.title = `${titleCs} - ${title}`;
        },
        i18n: {
            languages: {
                en: {
                    data: {markdownFile: `${markdownFileName}.en.md`},
                    onAfterAction: () => {
                        document.title = `${titleEn} - ${title}`;
                    }
                }
            }
        }
    };
}

Router.route('napoveda', helpPageRouteObject('uvod', 'Úvod', 'Introduction'));

Router.route('pocitace-v-mzk', helpPageRouteObject('pocitaceVMzk', 'Počítače v MZK', 'Computers in MZK'));

Router.route('linux', helpPageRouteObject('linux', 'Linux', 'Linux'));

Router.route('aplikace', helpPageRouteObject('aplikace', 'Aplikace', 'Applications'));

Router.route('sluchatka', helpPageRouteObject('sluchatka', 'Sluchátka', 'Headphones'));

Router.route('ukladani-dat', helpPageRouteObject('ukladaniDat', 'Ukládání dat', 'Data storing'));

Router.route('tisk', helpPageRouteObject('tisk', 'Tisk', 'Print'));

Router.route('digitalni-knihovna-napoveda', helpPageRouteObject('digitalniKnihovnaNapoveda', 'Digitální knihovna MZK', 'Digital library MZK'));

Router.route('o-digitalni-knihovne', helpPageRouteObject('oDigitalniKnihovne', 'O digitální knihovně', 'About digital library'));

Router.route('registrace-a-oblibene', helpPageRouteObject('registraceOblibene', 'Registrace a oblíbené', 'Registration and favorites'));

Router.route('jak-hledat', helpPageRouteObject('jakHledat', 'Jak hledat', 'How to search'));

Router.route('jak-tisknout', helpPageRouteObject('jakTisknout', 'Jak tisknout', 'How to print'));

Router.route('tablety', helpPageRouteObject('tablety', 'Půjčení tabletů', 'Tablet Lending'));

Router.route('mobilni-aplikace-kramerius', helpPageRouteObject('mobilniAplikaceKramerius', 'Mobilní aplikace Kramerius', 'Kramerius mobile app'));