var app = app || {};
app.types = app.types || {};

app.types.RootView = Backbone.Marionette.View.extend({
    template: '#root-template',
    events: {
        'click .exit' : 'logout'
    },
    regions: {
        content: {
            el: '.content-wrapper',
            replaceElement: true
        },
        menu: {
            el: '.main-sidebar',
        }
    },
    onRender: function(){
        var self = this;
        this.showChildView('menu', new app.types.MenuView({page : this.getOption('page')}));
        switch(this.getOption('page')) {
            case 'categories':
                self.showChildView('content', new app.types.SpecializationBodyView({collection : app.specializationList, level: true}));
                break;
            case 'managers':
                self.showChildView('content', new app.types.UserBodyView({collection: app.userList, search: true}));
                break;
            case 'feedback':
                self.showChildView('content', new app.types.ChatBodyView({collection: app.chatList}));
                break;
            case 'chat':
                self.showChildView('content', new app.types.ChatManagerBodyView({collection: app.chatList}));
                break;
        }
        console.log(this.getOption('page'));
    },
    onAttach: function(){
        $.AdminLTE.layout.fix();
    },
    logout: function(e){
        e.preventDefault();
        app.appRouter.navigate('logout', {trigger : true});
    },
    showCategories: function(){
        console.log(showCategories);
    }
})