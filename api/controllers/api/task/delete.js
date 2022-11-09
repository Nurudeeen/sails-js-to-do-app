module.exports = {


  friendlyName: 'Delete',


  description: 'Delete task.',


  inputs: {
    id: {
      type: 'string',
    }
  },


  exits: {
    success: {
      description: 'Task Deleted.',
    },
    redirect: {
      responseType: 'redirect'
    },
    invalid: {
      statusCode: 409,
      description: 'Invalid requiest'
    },
  },


  fn: async function (inputs, exits) {

  var task = await Task.destroy({
      id: inputs.id
  }).fetch();
  if (!task) {
    return exits.invalid({
      message: 'invalid'
    });
  }
  return exits.success({
      message: 'Task has been deleted successfully.',
      data: task
    })
  }


};
