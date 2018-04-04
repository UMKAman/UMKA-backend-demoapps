var app = app || {};
app.types = app.types || {};

app.types.ChatManagerView = Backbone.Marionette.View.extend({
    template: '#chat-manager-template',
    className: 'row',
    initialize: function(){
        this.model.on('chatEnd', this.render, this);
    },
    templateContext: function () {
        var userName;
        var date;
        var city;
        var gender;
        var phone;
        var lastMsg = '';
        if (this.model.get('user')) {
            userName = this.model.get('user').name;
            city = this.model.get('user').city;
            gender = this.model.get('user').gender;
            phone = this.model.get('user').phone;
        } else {
            var user;
            if (!this.model.get('master').user.name) user = this.model.get('master').user.user;
            else user = this.model.get('master').user;
            userName = user.name;
            city = user.city;
            gender = user.gender;
            phone = user.phone;
        }
        if (this.model.get('messages').length > 0) {
            if (this.model.get('messages')[0].ownerUser != app.userId && this.model.get('messages')[0].ownerUser.id != app.userId) {
                lastMsg += 'Пользователь: ';
            } else {
                lastMsg += 'Менеджер: ';
            }
            lastMsg += decodeURI(this.model.get('messages')[0].text);
        } else {
            lastMsg += 'Нет сообщений';
        }
        return {
            userName: userName,
            city: city,
            gender: gender,
            phone: phone,
            lastMsg: lastMsg,
        }
    },
    events: {
        'click .details' : 'details'
    },
    details: function(e){
        e.stopPropagation();
        var self = this;
        this.model.fetch().done(function(){
            $('#for-modal').html(new app.types.ChatManagerDetailsView({model: self.model}).render().$el);
            $('#chat-manager-details-modal').modal('show');
        }).fail(function(){

        })
    }
})