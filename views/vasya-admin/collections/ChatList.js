var app = app || {};
app.types = app.types || {};

app.types.ChatList = Backbone.Collection.extend({
    url: '/chat',
    fetch: function (options) {
        var options = options || {};
        if (options.chat) {
            var criteria = {
                manager: app.userId
            }
        } else {
            var criteria = {
                or: [
                    {
                        master: null
                    },
                    {
                        user: null
                    }
                ],
                manager: null
            };
        }
        options.url = '/chat?where=' + JSON.stringify(criteria) + '&admin=true';
        return Backbone.Collection.prototype.fetch.call(this, options);
    }
})

app.chatList = new app.types.ChatList();