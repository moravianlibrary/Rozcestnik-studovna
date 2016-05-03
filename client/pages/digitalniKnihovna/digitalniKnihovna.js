Template.digitalniKnihovna.events({

    "click #all-volumes-button": () => {
        var selector = '.alert';
        $(selector).show();
        setTimeout(() => {
            $(selector).hide();
        }, 5000);

        Router.go('/download-acho');
    }
});