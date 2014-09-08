import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberClientENV.locationType
});

Router.map(function() {
  this.route('employee');
  this.route('location');
});

export default Router;
