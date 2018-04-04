var app = app || {};
app.types = app.types || {};

app.types.FeedbackDetailsView = Backbone.Marionette.View.extend({
    template: '#feedback-details-template',
    className: 'modal fade',
    attributes: {
        id: 'feedback-details-modal',
        tabindex: '-1',
        role: 'dialog',
        'aria-labelledby': 'myModalLabel'
    },
    events: {
        'hidden.bs.modal': 'remove',
        'click .accept' : 'accept'
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
            var str = moment(_message.createdAt).format('YYYY-MM-DD HH:mm');
            str += ': ';
            if (_message.text) {
                str+= decodeURI(_message.text);
            }
            if (_message.pic) {
                str += '<br><img src="' + _message.pic + '" class="img-responsive">';
            }
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
    accept: function(e){
        e.stopPropagation();
        app.showLoader();
        var formData = new FormData();
        var self = this;
        formData.append('manager', app.userId);
        $.ajax({
            url: '/chat/' + this.model.get('id'),
            method: 'PUT',
            processData: false,
            contentType: false,
            data: formData,
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", "Bearer " + app.token)
            }
        }).done(function(){
            app.hideLoader();
            alert('Пользователь добавлен в переписки');
            app.chatList.remove(self.model);
            self.$el.modal('hide');
        }).fail(function(){

        })
    }
})