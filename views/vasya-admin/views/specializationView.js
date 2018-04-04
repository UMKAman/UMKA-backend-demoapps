var app = app || {};
app.types = app.types || {};

app.types.SpecializationView = Backbone.Marionette.View.extend({
    className: 'panel panel-default',
    template: '#specialization-template',
    regions: {
        child: {
            el: '.for-children'
        }
    },
    events: {
        'change .jscolor': 'updateColor',
        'click .save': 'saveSpec',
        'click .delete': 'deleteSpec',
        'click .addSpec': 'addSpec'
    },
    onRender: function () {
        if (this.model.get('level') < 3) {
            this.showChildView('child', new app.types.SpecializationBodyView({ collection: this.model.get('child') }));
        }
    },
    onAttach: function () {
        jscolor.installByClassName('jscolor');
    },
    updateColor: function (e) {
        e.stopPropagation();
        this.$('#spec-' + this.model.get('id')).css('background-color', '#' + this.$('.jscolor').val());
    },
    saveSpec: function (e) {
        e.stopPropagation();
        var color = this.$('.jscolor').val();
        var name = this.$('.name').val();
        var nameEn = this.$('.nameEn').val();
        var pic = this.$('#pic-input')[0].files[0];

        var self = this;
        if (color && name) {
            if (!pic) {
                app.showLoader();
                this.model.save({
                    color: '#' + color,
                    name: name,
                    nameEn: nameEn
                }, { wait: true }).done(function () {
                    app.hideLoader();
                    self.$('#header-' + self.model.id).html(name);
                    alert('Сохранено');
                }).fail(function (err) {

                });
            } else {
                var formData = new FormData();
                formData.append('color', '#' + color);
                formData.append('name', name);
                formData.append('nameEn', nameEn);
                formData.append('pic', pic);
                app.showLoader();
                $.ajax({
                    url: '/specialization/' + self.model.get('id'),
                    method: 'PUT',
                    processData: false,
                    contentType: false,
                    data: formData
                }).done(function (data) {
                    self.model.set({
                        color: data.color,
                        name: data.name,
                        pic: data.pic
                    })
                    app.hideLoader();
                    self.$('#header-' + self.model.id).html(name);
                    self.$('.for-image').html('<img src="' + self.model.get('pic') + '" class="img-responsive">')
                    alert('Сохранено');
                }).fail(function (err) {

                })
            }
        } else {
            alert('Не указано имя или цвет');
        }
    },
    deleteSpec: function (e) {
        e.stopPropagation();
        if (this.model.get('child').length > 0) {
            alert('Сначала нужно удалить подкатегории');
        } else {
            app.showLoader();
            this.model.destroy({ wait: true }).done(function () {
                app.hideLoader();
                alert('Удалено');
            }).fail(function (err) {

            })
        }
    },
    addSpec: function (e) {
        e.stopPropagation();
        $('#for-modal').html(new app.types.AddSpecializationView({ parentView: this , parent : this.model.get('id')}).render().$el);
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
            data.level = self.model.get('level') + 1;
            data.child = new app.types.SpecializationList();
            self.model.get('child').add(data);
            app.hideLoader();
            alert('Категория добавлена');
        }).fail(function (err) {

        })
    }
})