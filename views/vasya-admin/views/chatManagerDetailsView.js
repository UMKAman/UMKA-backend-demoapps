var app = app || {};
app.types = app.types || {};

app.types.ChatManagerDetailsView = Backbone.Marionette.View.extend({
    template: '#chat-manager-details-template',
    className: 'modal fade',
    attributes: {
        id: 'chat-manager-details-modal',
        tabindex: '-1',
        role: 'dialog',
        'aria-labelledby': 'myModalLabel'
    },
    events: {
        'hidden.bs.modal': 'closeModal',
        'click #btn-chat': 'sendMsg',
        'shown.bs.modal' : 'scrollChat'
    },
    templateContext: function () {
        var userName;
        var date;
        var city;
        var gender;
        var phone;
        if (this.model.get('user')) {
            userName = this.model.get('user').name;
            city = this.model.get('user').city;
            gender = this.model.get('user').gender;
            phone = this.model.get('user').phone;
        } else {
            userName = this.model.get('master').user.name;
            city = this.model.get('master').user.city;
            gender = this.model.get('master').user.gender;
            phone = this.model.get('master').user.phone;

        }
        date = moment(this.model.get('createdAt')).format('YYYY-MM-DD');

        msgs = [];
        var msgs = [];

        this.model.get('messages').forEach(function (_message) {
            var str = '';
            var user = true;
            if (_message.ownerUser == app.userId) user = false;
            str += '<li class="';
            if (user) {
                str += 'left ';
            } else {
                str += 'right ';
            }
            str += 'clearfix"><div class="chat-body clearfix"><div class="header">';
            if (user) {
                str += '<strong class="primary-font">' + userName + '</strong>';
                str += '<small class="pull-right text-muted">' + moment(_message.createdAt).format('YYYY-MM-DD HH:mm') + '</small>';
            } else {
                str += '<small class="text-muted">' + moment(_message.createdAt).format('YYYY-MM-DD HH:mm') + '</small>';
                str += '<strong class="pull-right primary-font">Менеджер</strong>';
            }
            str += '</div><p>' + decodeURI(_message.text);
            if (_message.pic) {
                str += '<br><img src="' + _message.pic + '" class="img-responsive">';
            }
            str += '</p></div></li>'
            msgs.push(str);
        });
        return {
            userName: userName,
            date: date,
            city: city,
            gender: gender,
            phone: phone,
            msgs: msgs,
        }
    },
    sendMsg: function (e) {
        e.stopPropagation();
        var msg = this.$('#btn-input').val();
        if (msg) {
            app.showLoader();
            var self = this;
            var formData = new FormData();
            formData.append('chat', this.model.get('id'));
            formData.append('text', encodeURI(msg));
            $.ajax({
                url: '/chatmessage',
                method: 'POST',
                processData: false,
                contentType: false,
                data: formData,
                beforeSend: function (request) {
                    request.setRequestHeader("Authorization", "Bearer " + app.token)
                }
            }).done(function(data){
                app.hideLoader();
                self.model.get('messages').push(data);
                var str = '<li class="right clearfix">'
                str += '<div class="chat-body clearfix">'
                str += '<div class="header">'
                str += '<small class=" text-muted">' + moment(data.createdAt).format('YYYY-MM-DD HH:mm') + '</small>';
                str += '<strong class="pull-right primary-font">Менеджер</strong>';
                str += '</div>';
                str += '<p>';
                str += decodeURI(data.text);
                str += '</p>'
                str += '</div>';
                str += '</li>';
                self.$('.chat').append(str);
                self.$('.panel-body').scrollTop(self.$('.panel-body')[0].scrollHeight);
                self.$('#btn-input').val('');
            }).fail(function(err){

            })
        } else {
            alert('Введите сообщение');
        }
    },
    closeModal: function(e){
        e.stopPropagation();
        this.model.set({messages : [this.model.get('messages')[this.model.get('messages').length - 1]]});
        this.model.trigger('chatEnd');
        this.remove();
    },
    scrollChat: function(){
        this.$('.panel-body').scrollTop(this.$('.panel-body')[0].scrollHeight);
    }
})