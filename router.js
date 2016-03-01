Router.configure({
    layoutTemplate: 'appBody',
    loadingTemplate: 'appLoading',
    notFoundTemplate: 'appNotFound'
});

Router.route('home', {
    path: '/'
});

Router.route('digitalni-knihovna', {
    template: 'pageTemplate',
    yieldRegions: {digitalniKnihovna: {to: 'pageContent'}}
});


/* NAPOVEDA */
Router.route('napoveda', {
    template: 'pageTemplate',
    yieldRegions: {uvod: {to: 'pageContent'}}
});

Router.route('linux', {
    template: 'pageTemplate',
    yieldRegions: {linux: {to: 'pageContent'}}
});

Router.route('aplikace', {
    template: 'pageTemplate',
    yieldRegions: {aplikace: {to: 'pageContent'}}
});

Router.route('sluchatka', {
    template: 'pageTemplate',
    yieldRegions: {sluchatka: {to: 'pageContent'}}
});

Router.route('ukladani-dat', {
    template: 'pageTemplate',
    yieldRegions: {ukladaniDat: {to: 'pageContent'}}
});

Router.route('tisk', {
    template: 'pageTemplate',
    yieldRegions: {tisk: {to: 'pageContent'}}
});

function getI18nTemplate(template) {
    //console.log('jazyk ' + TAPi18n.getLanguage());
    var i18nTemplate = template + '.' /*+ TAPi18n.getLanguage()*/;
    return {
        [i18nTemplate]: {to: 'pageContent'}
    }
}

/*
Router.route('o-digitalni-knihovne',
    {
        template: 'pageTemplate',
        //yieldRegions: {'oDigitalniKnihovne.cs': {to: 'pageContent'}},
        yieldRegions: getI18nTemplate('oDigitalniKnihovne')
        //onBeforeAction: function() {
        //    console.log('jazyk ' + TAPi18n.getLanguage());
        //    var i18nTemplate = 'oDigitalniKnihovne.' + TAPi18n.getLanguage();
        //    hovno = { [i18nTemplate]: {to: 'pageContent'} };
        //    this.next();
        //}
    });
*/

Router.route('o-digitalni-knihovne', {
    template: 'pageTemplate',
    yieldRegions: {'oDigitalniKnihovne.en': {to: 'pageContent'}},

    i18n: {
        languages: {
            cs: {
                template: 'pageTemplate',
                yieldRegions: {'oDigitalniKnihovne.cs': {to: 'pageContent'}}
            }
        }
    }
});

Router.route('jak-hledat', {
    template: 'pageTemplate',
    yieldRegions: {jakHledat: {to: 'pageContent'}}
});

Router.route('jak-tisknout', {
    template: 'pageTemplate',
    yieldRegions: {jakTisknout: {to: 'pageContent'}}
});