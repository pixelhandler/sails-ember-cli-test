import DS from "ember-data";

export default DS.SailsRESTAdapter.extend({
  namespace: 'api/v1',
});
