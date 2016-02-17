var yieldAppTemplates =
{
    nav: {to: 'nav'},
    footer: {to: 'foooter'}
};

var addYieldRegion = function () {
    var appTemplates = JSON.parse(JSON.stringify(yieldAppTemplates));

    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        appTemplates[obj.template] = {to: obj.to}
    }
    return appTemplates;
};

Router.configure({
    layoutTemplate: 'appBody',
    loadingTemplate: 'appLoading',
    notFoundTemplate: 'appNotFound',
    yieldTemplates: yieldAppTemplates
});

Router.route('home', {
    path: '/'
});

Router.route('digitalni-knihovna', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'digitalniKnihovna', to: 'pageContent'})
});


/* NAPOVEDA */

Router.route('napoveda', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'uvod', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});

Router.route('linux', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'linux', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});

Router.route('aplikace', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'aplikace', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});

Router.route('sluchatka', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'sluchatka', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});

Router.route('ukladani-dat', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'ukladaniDat', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});

Router.route('tisk', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'tisk', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});

Router.route('o-digitalni-knihovne', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'oDigitalniKnihovne', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});

Router.route('jak-hledat', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'jakHledat', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});

Router.route('jak-tisknout', {
    template: 'pageTemplate',
    yieldRegions: addYieldRegion({template: 'jakTisknout', to: 'pageContent'}, {template: 'helpMenu', to: 'helpMenu'})
});



