Template.digitalniKnihovna.events({
    "click #free-volumes": function () {
        window.open('http://kramerius.mzk.cz/', '_blank');
    },
    "click #all-volumes": function () {
        $('.alert').show();
    },
    "click .close": function (event) {
        event.preventDefault()
        console.log('dsdf');
    }
});