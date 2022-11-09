module.exports = {


  friendlyName: 'Index',


  description: 'Index task.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    var allTasks = await Task.find({});
    return allTasks;

  }


};
