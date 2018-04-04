var app = app || {};
app.types = app.types || {};

app.types.ChatView = Backbone.Marionette.View.extend({
    template: '#chat-template',
    className: 'row',
    templateContext: function(){
        var userName;
        var date;
        if (this.model.get('user')) {
            userName = this.model.get('user').name;
        } else {
            userName = this.model.get('master').user.user.name;
        }
        date = moment(this.model.get('createdAt')).format('YYYY-MM-DD');
        return {
            userName: userName,
            date: date
        }
    },
    events: {
        'click .details' : 'details',
        'click .accept' : 'accept'
    },
    details: function(e){
        e.stopPropagation();
        var self = this;
        this.model.fetch().done(function(){
            $('#for-modal').html(new app.types.FeedbackDetailsView({model: self.model}).render().$el);
            $('#feedback-details-modal').modal('show');
        }).fail(function(){

        })
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
        }).fail(function(){

        })
    }
})