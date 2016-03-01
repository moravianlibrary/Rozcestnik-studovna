Template.helpCircle.events({
    "click .circle-wrapper": function(event, template) {
        Router.go(template.data);
    },
    "mouseenter .circle": function(event) {
        var circle = $(event.target);
        var text = circle.next();
        circle.attr('class', 'circle circle-hover');
        text.attr('class', 'circle-text circle-text-hover');
    },
    "mouseleave .circle": function(event) {
        var circle = $(event.target);
        var text = circle.next();
        circle.attr('class', 'circle');
        text.attr('class', 'circle-text');

    },
    "mouseenter .circle-text": function(event) {
        var text = $(event.target);
        var circle = text.prev();
        circle.attr('class', 'circle circle-hover');
        text.attr('class', 'circle-text circle-text-hover');
    },
    "mouseleave .circle-text": function(event) {
        var text = $(event.target);
        var circle = text.prev();
        circle.attr('class', 'circle');
        text.attr('class', 'circle-text');
    }
});
