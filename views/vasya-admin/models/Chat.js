var app = app || {};
app.types = app.types || {};

app.types.Chat = Backbone.Model.extend({
    urlRoot: '/chat'
})