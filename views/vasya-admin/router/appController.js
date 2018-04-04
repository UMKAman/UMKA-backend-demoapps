var app = app || {};
app.types = app.types || {};

app.types.AppController = Backbone.Marionette.Object.extend({
    showMain: function(){
        if (this.checkToken()) {
            app.mainApplication.showRoot('main');
        }
    },
    showLogin: function(){
        if (this.checkToken()) {
            app.appRouter.navigate('/', {trigger : true});
        } else {
            app.mainApplication.showLogin();
        }
    },
    showCategories: function(){
        var self = this;
        if (this.checkToken()) {
            app.showLoader();
            app.specializationList.fetch().done(function(){
                app.hideLoader();
                app.specializationList = new app.types.SpecializationList(self.parseCategories());
                app.mainApplication.showRoot('categories');
            }).fail(function(err){

            })
        }
    },
    showManagers: function(){
        var self = this;
        if (this.checkToken()) {
            app.showLoader();
            app.userList.fetch().done(function(){
                app.hideLoader();
                app.mainApplication.showRoot('managers');
            }).fail(function(err){
                
            })
        }
    },
    showFeedback: function(){
        var self = this;
        if (this.checkToken()) {
            app.showLoader();
            app.chatList.fetch().done(function(){
                app.hideLoader();
                app.mainApplication.showRoot('feedback');
            }).fail(function(err){

            })
        }
    },
    showChat: function(){
        var self = this;
        if (this.checkToken()) {
            app.showLoader();
            app.chatList.fetch({chat : true}).done(function(){
                app.hideLoader();
                app.mainApplication.showRoot('chat');
            }).fail(function(err){
                
            })
        }
    },
    parseCategories: function(){
        var parents = app.specializationList.filter(function(_spec){
            return !_spec.get('parent');
        })
        var children = app.specializationList.filter(function(_spec){
            return _spec.get('parent');
        });
        var parents2 = _.filter(children, function(_spec){
            return _spec.get('child').length > 0;
        })
        children = _.filter(children, function(_spec){
            return _spec.get('child').length == 0;
        })
        var put = [];
        parents.forEach(function(_parent){
            _parent.set({child: new app.types.SpecializationList(), level: 1});
        })
        parents2.forEach(function(_parent){
            _parent.set({child: new app.types.SpecializationList(), level: 2});
        })
        children.forEach(function(_spec){
            var parent = _.find(parents2, function(_parent){
                return _spec.get('parent').id == _parent.get('id')
            })
            if (parent) {
                _spec.set({child: new app.types.SpecializationList(), level : parent.get('level') + 1})
                parent.get('child').add(_spec);
                put.push(_spec.get('id'));
            } else {
                parent = _.find(parents, function(_parent){
                    return _spec.get('parent').id == _parent.get('id')
                });
                if (parent) {
                    _spec.set({child: new app.types.SpecializationList(), level : parent.get('level') + 1})
                    parent.get('child').add(_spec);
                    put.push(_spec.get('id'));
                } else {
                    alert('Этого не может быть');
                }
            }
        })
        parents2.forEach(function(_spec){
            var parent = _.find(parents, function(_parent){
                return _spec.get('parent').id == _parent.get('id');
            });
            if (parent) {
                parent.get('child').add(_spec);
            } else {
                alert('Этого не может быть');
            }
        })
        return parents;
    },
    logout: function(){
        delete app.token;
        localStorage.removeItem('umka-admin-token');
        app.appRouter.navigate('login', {trigger : true});
    },
    checkToken: function() {
        if (!app.token) {
            if (localStorage.getItem('umka-admin-token')) {
                app.token = localStorage.getItem('umka-admin-token');
                app.userName = localStorage.getItem('umka-admin-name');
                app.userId = localStorage.getItem('umka-admin-user-id');
                return true;
            } else {
                app.appRouter.navigate('login', {trigger : true});
                return false;
            }
        } else {
            return true;
        }
    }
});

app.appController = new app.types.AppController();