/* Factory Patterns:
-Simplifies object creation
-Used for creating different objects based on need
-Repository Creation [Hence, factory?]
*/

/* <-- Factory Example --> */
var repoFactory = function() {
  this.getRepo = function(repoType) {
    if (repoType === 'task') {
      var taskRepo = require('./taskRepository')();
      return taskRepo;
    }
    if (repoType === 'user') {
      var userRepo = required('./userRepository')();
      return userRepo;
    }
    if (repoType === 'project') {
      var projectRepo = require('./projectRepository')();
      return projectRepo;
    }
  };
};

module.exports = new repoFactory();
/* <--- Tada, Factory Complete ---> */
/* <-- Seems a bit cumbersome, unless used on larger projects:
and would be better using some simple cache system so as not to
to keep creating new variants upon use */
/* Later Study: Gulp uses this extensively, and not cumbersomely to make your life easier */
