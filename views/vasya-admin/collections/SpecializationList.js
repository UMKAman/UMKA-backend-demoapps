var app = app || {};
app.types = app.types || {};

app.types.SpecializationList = Backbone.Collection.extend({
    model: app.types.Specialization,
    url: '/specialization'
})

app.specializationList = new app.types.SpecializationList();