Template.digitalniKnihovna.events({
    "click #all-volumes-button": function () {
        $('.alert').show();
        setTimeout(function () {
            $('.alert').hide();
        }, 5000);
    }
});