import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    save: function(model) {
      var router = this;
      model.save().then(function() {
        router.transitionTo('employee.edit', model);
      });
    }
  },
  model: function() {
    return this.store.find('employee');
  }
});
