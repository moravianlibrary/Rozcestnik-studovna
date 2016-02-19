Template.helpCircle.events({
    "click #circle-wrapper": function(event, template) {
        Router.go(template.data);
    }
});
