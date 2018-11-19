//Creational Design Patterns

//Constructor Pattern, used to create new objects with their own object scope
// the "new" keyword 1) Creates a brand new object  2) Links to an object prototype
// 3) Binds 'this' to the new object scope  4) Implicitly returns 'this'

function ObjectName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function () {
    return this.param1 + ' '  + this.param2;
  }
}

var Task = function(name) {
  this.name = name;
  this.completed = false;
}
// example creation
//   this.complete = function() {
//     console.log('completing task: ' + Task.name);
//     this.completed = true;
//   }

//   this.save = function() {
//     console.log('saving Task: ' + this.name);
//   }
// } 

//Adapting our task constructor/object into a prototype means of a constructor

Task.prototype.complete = function() {
  console.log('completing task: ' + Task.name);
  this.completed = true;
  }

Task.prototype.save = function() {
  console.log('saving Task: ' + this.name);
  }

module.exports = Task;



