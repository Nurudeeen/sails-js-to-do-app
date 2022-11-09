module.exports = {


  friendlyName: 'Create',


  description: 'Create task.',


  inputs: {
    task: {
      type: 'string',
      required: true,
    },
    time: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    incorrect: {
      statusCode: 403,
      description: 'task create error' // this will not go in response
    },
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {
    var newTask = await Task.create({
      task: inputs.task,
      time: inputs.time,
      isDone: false,
    })
    .intercept('E_UNIQUE', (err) => {
      return exits.incorrect({
        message: 'invalid',
        err: err
      })}).fetch();

    if (!newTask) {
      return exits.incorrect({
        message: 'invalid, problem creating task'
      });
    }
    // All done.
      return exits.success({
      message: 'Task has been created successfully.',
      data: newTask
    });
  }


};
