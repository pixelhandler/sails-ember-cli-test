import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberClientENV.locationType
});

Router.map(function() {
  this.resource('employee', function() {
    this.route('new');
    this.route('edit', {path: ':employee_id'});
  });
  this.route('location');
});

export default Router;
