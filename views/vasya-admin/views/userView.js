var app = app || {};
app.types = app.types || {};

app.types.UserView = Backbone.Marionette.View.extend({
    template: '#user-template',
    className: 'row',
    initialize: function(){
        this.model.on('change', this.render, this);
        this.model.on('change', this.triggerAdd, this);
    },
    events: {
        'click .removeAdmin' : 'removeAdmin',
        'click .makeAdmin' : 'makeAdmin',
        'click .makeManager' : 'makeManager',
        'click .removeManager' : 'removeManager'
    },
    removeAdmin: function(){
        app.showLoader();
        var formData = new FormData();
        formData.append('isAdmin', false);
        var self = this;
        $.ajax({
            url: '/user/' + this.model.get('id'),
            method: 'PUT',
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", "Bearer " + app.token)
            }
        }).done(function(data){
            app.hideLoader();
            self.model.set({"isAdmin" : false});
            app.userList.add(self.model, {merge : true});
            if (app.userSearch && app.userSearch.get(self.model.get('id'))) {
                app.userSearch.add(self.model, {merge : true});
            }
            app.userList.trigger('userUpdate', self.model);
        }).fail(function(err){

        })
    },
    makeAdmin: function(){
        app.showLoader();
        var formData = new FormData();
        formData.append('isAdmin', true);
        var self = this;
        $.ajax({
            url: '/user/' + this.model.get('id'),
            method: 'PUT',
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: function(request) {
                
                request.setRequestHeader("Authorization", "Bearer " + app.token)
            }
        }).done(function(data){
            app.hideLoader();
            self.model.set({isAdmin : true});
            app.userList.add(self.model, {merge : true});
            if (app.userSearch && app.userSearch.get(self.model.get('id'))) {
                app.userSearch.add(self.model, {merge : true});
            }
        }).fail(function(err){

        })
    },
    removeManager: function(){
        app.showLoader();
        var formData = new FormData();
        formData.append('isManager', false);
        var self = this;
        $.ajax({
            url: '/user/' + this.model.get('id'),
            method: 'PUT',
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", "Bearer " + app.token)
            }
        }).done(function(data){
            app.hideLoader();
            self.model.set({"isManager" : false});
            app.userList.add(self.model, {merge : true});
            if (app.userSearch && app.userSearch.get(self.model.get('id'))) {
                app.userSearch.add(self.model, {merge : true});
            }
            app.userList.trigger('userUpdate', self.model);
        }).fail(function(err){

        })
    },
    makeManager: function(){
        app.showLoader();
        var formData = new FormData();
        formData.append('isManager', true);
        var self = this;
        $.ajax({
            url: '/user/' + this.model.get('id'),
            method: 'PUT',
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: function(request) {
                
                request.setRequestHeader("Authorization", "Bearer " + app.token)
            }
        }).done(function(data){
            app.hideLoader();
            self.model.set({isManager : true});
            app.userList.add(self.model, {merge : true});
            if (app.userSearch && app.userSearch.get(self.model.get('id'))) {
                app.userSearch.add(self.model, {merge : true});
            }
        }).fail(function(err){

        })
    }
})