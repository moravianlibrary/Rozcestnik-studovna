Template.pageTemplate.helpers({
   getLanguage: function() {
       return TAPi18n.getLanguage();
   }
});

Meteor.startup(function () {
    if (Meteor.isClient) {
        console.log('startup lang ' + TAPi18n.getLanguage());
    }
});