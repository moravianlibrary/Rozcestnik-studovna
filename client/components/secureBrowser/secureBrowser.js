Template.secureBrowser.events({
    "click #library-tile": () => {
        window.open(Router.url('kramerius-redirect'), '_blank');
        //Router.go('kramerius-redirect');
    },
    "click #archive-tile": () => {
        window.open(Router.url('kramerius-redirect'), '_blank');
    }
});