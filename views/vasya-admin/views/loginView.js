var app = app || {};
app.types = app.types || {};

app.types.LoginView = Backbone.Marionette.View.extend({
    template: '#login-template',
    className: 'row col-md-6 col-md-offset-3',
    events: {
        'click .signin': 'signin',
        'click .getCode': 'getCode',
    },
    getCode: function (e) {
        e.preventDefault();
        var self = this;
        if (this.$('#inputLogin').val()) {
            $.ajax({
                method: 'post',
                url: '/auth',
                data: {
                    phone: this.$('#inputLogin').val(),
                }
            }).done(function (data) {
                if (data) {
                    self.$('#inputPassword').val(data.code);
                } else {
                    alert('чтото не так');
                }
            }).fail(function (err) {
                alert('чтото не так');
            })
        } else {
            alert('Введите номер телефона');
        }
    },
    signin: function (e) {
        e.preventDefault();
        var self = this;
        if ($('#inputPassword').val() && $('#inputLogin').val()) {
            $.ajax({
                url: '/auth',
                method: 'post',
                data: {
                    phone: $('#inputLogin').val(),
                    password: $('#inputPassword').val(),
                    device: 'web',
                    fireToken: 'no token'
                }
            }).done(function (data) {
                if (data.jwt) {
                    localStorage.setItem('umka-admin-token', data.jwt);
                    localStorage.setItem('umka-admin-name', data.user.name);
                    localStorage.setItem('umka-admin-user-id', data.user.id);
                    app.appRouter.navigate('/', { trigger: true });
                } else {
                    alert('чтото не так');
                }
            }).fail(function (err) {
                alert('чтото не так');
            })
        } else {
            alert('Номер телефон или код подтверждения не введен');
        }
    }
})