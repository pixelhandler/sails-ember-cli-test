/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    fullName: {
      type: 'string',
      defaultsTo: ''
    },

    hourlyWage: { // in cents
      type: 'integer',
      defaultsTo: 0
    },

    phoneNumber: {
      type: 'string',
      defaultsTo: ''
    }

  }
};
