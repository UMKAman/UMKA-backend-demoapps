var app = app || {};
app.types = app.types || {};

app.types.AppRouter = Backbone.Marionette.AppRouter.extend({
    controller: app.appController,
    appRoutes: {
        '(/)': 'showMain',
        'categories(/)': 'showCategories',
        'managers(/)': 'showManagers',
        'feedback(/)': 'showFeedback',
        'chat(/)': 'showChat',
        'login(/)': 'showLogin',
        'logout(/)': 'logout',
    }
});

app.appRouter = new app.types.AppRouter();