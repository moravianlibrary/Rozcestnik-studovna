Template.home.events({
    /* digitalni-knihovna help */
    "click .tile-big-hint, click .circle-wrapper": function () {
        Router.go('digitalni-knihovna-napoveda');
    },

    "mouseenter .tile-big-hint": function () {
        $("#dl-circle-text").attr('class', 'circle-text circle-text-hover');
    },
    "mouseleave .tile-big-hint": function () {
        $("#dl-circle-text").attr('class', 'circle-text');
    },

    /* tisk help */
    "click #print-path, click #print-circle, click #print-text": function () {
        Router.go('tisk');
    },
    "mouseenter #print-path, mouseenter #print-circle, mouseenter #print-text": function () {
        $("#print-path").attr('fill', '#434343');
        $("#print-circle").attr('fill', '#434343');
        $("#print-text").attr('class', 'circle-text circle-text-hover');
    },
    "mouseleave #print-path, mouseleave #print-circle, mouseleave #print-text": function () {
        $("#print-path").attr('fill', 'transparent');
        $("#print-circle").attr('fill', 'transparent');
        $("#print-text").attr('class', 'circle-text');
    }

});