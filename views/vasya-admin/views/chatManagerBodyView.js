var app = app || {};
app.types = app.types || {};

app.types.ChatManagerBodyView = Backbone.Marionette.View.extend({
    template: '#chat-manager-body-template',
    className: 'content-wrapper',
    regions: {
        body: {
            el: '#chats'
        }
    },
    onRender: function(){
        this.showChildView('body', new app.types.ChatManagerListView({collection: this.collection}));
    }
})

app.types.ChatManagerEmptyListView = Backbone.Marionette.View.extend({
    template: _.template('Нет чатов')
})

app.types.ChatManagerListView = Backbone.Marionette.CollectionView.extend({
    childView: app.types.ChatManagerView,
    emptyView: app.types.ChatManagerEmptyListView
})