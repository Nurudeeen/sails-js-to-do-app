const { task } = require("grunt");

module.exports = {


  friendlyName: 'Update',


  description: 'Update task.',


  inputs: {
    id: {
      type: 'string',
    },
  },


  exits: {
    redirect: {
      responseType: 'redirect'
    },
    notFound: {
      description: 'No task with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {
    var task = await Task.findOne({ id: inputs.id });
    if (!task) { throw 'notFound'; }

    var updatedTask = await Task.update({
      id: inputs.id
    }).set({isDone:true});

   
    // All done.
    return exits.success({
      message: 'Task has been done.',
      data: updatedTask
    });

  }


};
