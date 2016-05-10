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
    path: '/'
});

Router.route('digitalni-knihovna', {
    template: 'menuPageTemplate',
    yieldRegions: {digitalniKnihovna: {to: 'pageContent'}}
});

Router.route('chraneny-obsah', {
    template: 'secureBrowser'
});

/* ACHO FILES */
Router.route('digital-library-acho', {
    where: 'server',
    action: function () {
        this.response.writeHead(200, {'Content-Disposition': 'attachment; filename=krameriusMzk.acho'});
        this.response.end(`host: kramerius.mzk.cz\nlang: cs`);
    },
    i18n: {
        languages: {
            en: {
                action: function () {
                    this.response.writeHead(200, {'Content-Disposition': 'attachment; filename=krameriusMzk.acho'});
                    this.response.end(`host: kramerius.mzk.cz\nlang: en`);
                }
            }
        }
    }
});

Router.route('webarchiv-acho', {
    where: 'server',
    action: function () {
        this.response.writeHead(200, {'Content-Disposition': 'attachment; filename=webarchiv.acho'});
        this.response.end(`host: webarchiv.mzk.cz\nlang: cs`);
    },
    i18n: {
        languages: {
            en: {
                action: function () {
                    this.response.writeHead(200, {'Content-Disposition': 'attachment; filename=webarchiv.acho'});
                    this.response.end(`host: webarchiv.mzk.cz\nlang: en\n`);
                }
            }
        }
    }
});

Router.route('/kramerius-acho/:host/:lang/:uuid', {
    where: 'server',
    action: function () {
        this.response.writeHead(200, {'Content-Disposition': 'attachment; filename=krameriusMzk.acho'});
        this.response.end(`host: ${this.params.host}\nlang: ${this.params.lang}\npid: ${this.params.uuid}`);
    }
});

/* NAPOVEDA */
Router.route('napoveda', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'uvod.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'uvod.en.md'}
            }
        }
    }
});

Router.route('pocitace-v-mzk', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'pocitaceVMzk.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'pocitaceVMzk.en.md'}
            }
        }
    }
});

Router.route('linux', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'linux.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'linux.en.md'}
            }
        }
    }
});

Router.route('aplikace', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'aplikace.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'aplikace.en.md'}
            }
        }
    }
});

Router.route('sluchatka', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'sluchatka.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'sluchatka.en.md'}
            }
        }
    }
});

Router.route('ukladani-dat', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'ukladaniDat.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'ukladaniDat.en.md'}
            }
        }
    }
});

Router.route('tisk', {
    template: 'helpPageTemplate',
    yieldRegions: {'tisk.cs': {to: 'pageContent'}},
    data: {markdownFile: 'tisk.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'tisk.en.md'}
            }
        }
    }
});


Router.route('digitalni-knihovna-napoveda', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'digitalniKnihovnaNapoveda.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'digitalniKnihovnaNapoveda.en.md'}
            }
        }
    }
});

Router.route('o-digitalni-knihovne', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'oDigitalniKnihovne.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'oDigitalniKnihovne.en.md'}
            }
        }
    }
});

Router.route('registrace-a-oblibene', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'registraceOblibene.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'registraceOblibene.en.md'}
            }
        }
    }
});

Router.route('jak-hledat', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'jakHledat.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'jakHledat.en.md'}
            }
        }
    }
});

Router.route('jak-tisknout', {
    template: 'helpPageTemplate',
    yieldRegions: {'jakTisknout.cs': {to: 'pageContent'}},
    data: {markdownFile: 'jakTisknout.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'jakTisknout.en.md'}
            }
        }
    }
});

Router.route('tablety', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'tablety.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'tablety.en.md'}
            }
        }
    }
});

Router.route('mobilni-aplikace-kramerius', {
    template: 'helpPageTemplate',
    data: {markdownFile: 'mobilniAplikaceKramerius.cs.md'},
    i18n: {
        languages: {
            en: {
                data: {markdownFile: 'mobilniAplikaceKramerius.en.md'}
            }
        }
    }
});