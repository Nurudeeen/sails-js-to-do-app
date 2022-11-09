/**
 * Task.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
fetchRecordsOnUpdate: true,
  attributes: {
    
    task: {
      type: 'string',
      required: true,
    },
    time: {
      type: 'string',
      required: true
    },
    isDone: {
      type: 'boolean',
      required: true,
    },

  },

};

