var app = app || {};
app.types = app.types || {};

app.types.UserBodyView = Backbone.Marionette.View.extend({
    template: '#user-body-template',
    className: 'content-wrapper',
    initialize: function(){
        app.userList.on('userUpdate', this.userParse, this);
    },
    regions: {
        body: {
            el: '#users',
        },
        results: {
            el: '#results'
        }
    },
    templateContext: function(){
        return {
            search: this.getOption('search')
        }
    },
    onRender: function(){
        this.showChildView('body', new app.types.UserListView({collection: this.collection}));
    },
    events: {
        'click .search' : 'userSearch'
    },
    userSearch: function(){
        var searchString = this.$('#search-string').val();
        var self = this;
        if (searchString) {
            app.showLoader();
            app.userSearch = new app.types.UserList();
            app.userSearch.fetch({criteria : searchString}).done(function(resp){
                app.hideLoader();
                self.showChildView('results', new app.types.UserListView({collection : app.userSearch}))
            })
        }
    },
    userParse: function(model){
        if (!model.get('isAdmin') && !model.get('isManager')) {
            console.log(model.get('id'));
            app.userList.remove(model.get('id'));
        }
    }
});

app.types.UserEmptyListView = Backbone.Marionette.View.extend({
    template: _.template('Нет пользователей')
});

app.types.UserListView = Backbone.Marionette.CollectionView.extend({
    childView: app.types.UserView,
    emptyView: app.types.UserEmptyListView
})