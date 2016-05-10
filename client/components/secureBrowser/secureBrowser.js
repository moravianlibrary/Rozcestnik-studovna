Template.secureBrowser.events({
    "click #library-tile": () => {
        Router.go('digital-library-acho');
    },
    "click #archive-tile": () => {
        Router.go('webarchiv-acho');
    }
});