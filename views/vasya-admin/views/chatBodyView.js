var app = app || {};
app.types = app.types || {};

app.types.ChatBodyView = Backbone.Marionette.View.extend({
    template: '#chat-body-template',
    className: 'content-wrapper',
    regions: {
        body: {
            el: '#chats'
        }
    },
    onRender: function(){
        this.showChildView('body', new app.types.ChatListView({collection: this.collection}));
    }
})

app.types.ChatEmptyListView = Backbone.Marionette.View.extend({
    template: _.template('Нет чатов')
})

app.types.ChatListView = Backbone.Marionette.CollectionView.extend({
    childView: app.types.ChatView,
    emptyView: app.types.ChatEmptyListView
})