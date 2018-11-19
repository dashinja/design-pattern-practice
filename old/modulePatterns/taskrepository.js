var repo = function () {
  return {
    get: function (id) {
      console.log('getting task ' + id);
      return {
        name: 'new task from db'
      }
    },

    save: function (task) {
      console.log('Saving ' + task.name + ' to the db');
    }
  }
}

module.exports = repo();