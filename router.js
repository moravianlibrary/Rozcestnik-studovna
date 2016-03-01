var appTemplates =
{
    nav: {to: 'nav'},
    footer: {to: 'footer'}
};

Router.configure({
    layoutTemplate: 'appBody',
    loadingTemplate: 'appLoading',
    notFoundTemplate: 'appNotFound',
    yieldTemplates: appTemplates
});

Router.route('home', {
    path: '/'
});

Router.route('digitalni-knihovna', {
    template: 'pageTemplate',
    yieldRegions: _.extend({digitalniKnihovna: {to: 'pageContent'}}, appTemplates)
});


/* NAPOVEDA */
Router.route('napoveda', {
    template: 'pageTemplate',
    yieldRegions: _.extend({uvod: {to: 'pageContent'}}, appTemplates)
});

Router.route('linux', {
    template: 'pageTemplate',
    yieldRegions: _.extend({linux: {to: 'pageContent'}}, appTemplates)
});

Router.route('aplikace', {
    template: 'pageTemplate',
    yieldRegions: _.extend({aplikace: {to: 'pageContent'}}, appTemplates)
});

Router.route('sluchatka', {
    template: 'pageTemplate',
    yieldRegions: _.extend({sluchatka: {to: 'pageContent'}}, appTemplates)
});

Router.route('ukladani-dat', {
    template: 'pageTemplate',
    yieldRegions: _.extend({ukladaniDat: {to: 'pageContent'}}, appTemplates)
});

Router.route('tisk', {
    template: 'pageTemplate',
    yieldRegions: _.extend({tisk: {to: 'pageContent'}}, appTemplates)
});

Router.route('o-digitalni-knihovne', {
    template: 'pageTemplate',
    yieldRegions: _.extend({oDigitalniKnihovne: {to: 'pageContent'}}, appTemplates)
});

Router.route('jak-hledat', {
    template: 'pageTemplate',
    yieldRegions: _.extend({jakHledat: {to: 'pageContent'}}, appTemplates)
});

Router.route('jak-tisknout', {
    template: 'pageTemplate',
    yieldRegions: _.extend({jakTisknout: {to: 'pageContent'}}, appTemplates)
});



