var app = app || {};
app.types = app.types || {};

var _sync = Backbone.sync;
Backbone.sync = function (method, model, options) {
    options.headers = {
        'Authorization' : 'Bearer ' + app.token,
    }
    return _sync.call(this, method, model, options);
}

app.showLoader = function () {
    $('#fade').css('display', 'block');
    $('#modal').css('display', 'block');
}
app.hideLoader = function () {
    $('#fade').css('display', 'none');
    $('#modal').css('display', 'none');
}

app.types.MainApplication = Backbone.Marionette.Application.extend({
    region: '.wrapper',
    onStart: function(){
        Backbone.history.start({pushState: true, root: '/admin'});
    },
    showLogin: function(){
        if (this.getView()) this.getView().remove();
        this.showView(new app.types.LoginView());
    },
    showRoot: function(page){
        if (this.getView()) this.getView().remove();
        this.showView(new app.types.RootView({page : page}));
    }
});

app.mainApplication = new app.types.MainApplication();
app.mainApplication.start();