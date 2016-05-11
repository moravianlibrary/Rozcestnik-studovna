Template.digitalniKnihovna.events({

    "click #all-volumes-button": () => {
        var selector = '.alert';
        $(selector).show();
        setTimeout(() => {
            $(selector).hide();
        }, 5000);

        window.open(Router.url('kramerius-acho'), '_blank');
    }
});