var app = app || {};
app.types = app.types || {};

app.types.MenuView = Backbone.Marionette.View.extend({
    template: '#menu-template',
    tagName: 'section',
    className: 'sidebar',
    attributes: {
        style: 'height: auto;'
    },
    events: {
        'click .umka-menu-item' : 'menuItemClick'
    },
    menuItemClick: function(e){
        e.preventDefault();
        app.appRouter.navigate($(e.currentTarget).attr('id'), {trigger : true});
    }
})