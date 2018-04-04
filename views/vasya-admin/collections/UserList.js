var app = app || {};
app.types = app.types || {};

app.types.UserList = Backbone.Collection.extend({
    model: app.types.User,
    url: '/user',
    fetch: function(options) {
        var options = options || {};
        if (options.criteria) {
            var criteria = {phone: {
                contains: encodeURIComponent(options.criteria)
            }}
            options.url = '/user?where=' + JSON.stringify(criteria);
        } else {
            options.url = '/user?where={"or": [{"isManager": true},{"isAdmin": true}]}';
        }
        return Backbone.Collection.prototype.fetch.call(this, options);
    }
})

app.userList = new app.types.UserList();