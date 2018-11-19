/* Singletons are used to RESTRICT an object to ONE INSTANCE of that object...
across the ENTIRE application

Benefits:
-Remembers the last time you used it
-Hands the same instance back
*/

/* <--- Example Start ---> */

var TaskRepo = (function() {
  var taskRepo;
  function createRepo() {
    var taskRepo = new Object('Task');
    return taskRepo;
  }
  return {
    getInstance: function() {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  };
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
  console.log('Same TaskRepo!');
}

/* Another Benefit:
Because Node.js uses CommonJS, in node (or Angular even) one needn't
necessarily use the getInstance() type stuff:
https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_caching */

/* <-- Node Specific --> */
