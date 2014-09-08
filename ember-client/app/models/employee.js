import DS from "ember-data";

export default DS.Model.extend({
  fullName: DS.attr('string'),
  hourlyWage: DS.attr('string'),
  phoneNumber: DS.attr('string')
});
