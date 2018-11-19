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

ObjectName('Testing me', 'out!')

console.log(ObjectName.toString);//