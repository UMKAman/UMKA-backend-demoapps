var app = app || {};
app.types = app.types || {};

app.types.SpecializationBodyView = Backbone.Marionette.View.extend({
    template: '#specialization-body-template',
    className: 'content-wrapper',
    regions: {
        body: {
            el: '#accordion',
            replaceElement: true
        }
    },
    onRender: function () {
        this.showChildView('body', new app.types.SpecializationListView({ collection: this.collection }));
    },
    templateContext: function () {
        return {
            level: this.getOption('level')
        }
    },
    events: {
        'click .addSpec': 'addSpec'
    },
    addSpec: function (e) {
        e.stopPropagation();
        $('#for-modal').html(new app.types.AddSpecializationView({ parentView: this, parent: 0 }).render().$el);
        $('#add-specialization-modal').modal('show');
    },
    createSpec: function (spec) {
        var self = this;
        app.showLoader();
        $.ajax({
            url: '/specialization/',
            method: 'POST',
            processData: false,
            contentType: false,
            data: spec
        }).done(function (data) {
            data.level = 1;
            data.child = new app.types.SpecializationList();
            self.collection.add(data);
            app.hideLoader();
            alert('Категория добавлена');
        }).fail(function (err) {

        })
    }
})

app.types.SpecializationEmptyListView = Backbone.Marionette.View.extend({
    template: _.template('Нет категорий')
})

app.types.SpecializationListView = Backbone.Marionette.CollectionView.extend({
    childView: app.types.SpecializationView,
    emptyView: app.types.SpecializationEmptyListView
})