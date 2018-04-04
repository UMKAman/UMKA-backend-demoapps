var app = app || {};
app.types = app.types || {};

app.types.AddSpecializationView = Backbone.Marionette.View.extend({
    template: '#add-specialization-template',
    className: 'modal fade',
    attributes: {
        id: 'add-specialization-modal',
        tabindex: '-1',
        role: 'dialog',
        'aria-labelledby': 'myModalLabel'
    },
    events: {
        'hidden.bs.modal': 'remove',
        'shown.bs.modal': 'colorInit',
        'click .add': 'addSpec'
    },
    colorInit: function () {
        jscolor.installByClassName('jscolor');
    },
    addSpec: function (e) {
        e.stopPropagation();
        var color = this.$('.jscolor').val();
        var name = this.$('.name').val();
        var nameEn = this.$('.nameEn').val();
        var pic = this.$('#pic-input')[0].files[0];

        var self = this;
        if (color && name) {
            var formData = new FormData();
            formData.append('color', '#' + color);
            formData.append('name', name);
            formData.append('nameEn', nameEn);
            formData.append('parent', this.getOption('parent'));
            if (pic) {
                formData.append('pic', pic);
            }
            self.getOption('parentView').createSpec(formData);
            this.$el.modal('hide');
        } else {
            alert('Не указано имя или цвет');
        }
    }
})