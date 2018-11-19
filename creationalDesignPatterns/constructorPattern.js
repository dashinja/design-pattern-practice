/* the "New" Keywork:
-Creates a new object
-Links to an object prototype
-Binds 'this' to the new object scope
-Implicitly returns 'this' */

function ObjectName(param1, param2) {
  this.param1 = param1
  this.param2 = param2
  this.toString = function () {
    return this.param1 + ' ' + this.param2
  }
}

const Human = function (name) {
  this.name = name
}

Human.prototype.HasFeelings = {
    'anger': "I'm angry!",
    'happy': "I'm happy!",
    'tired': "I need to rest.",
    'sleepy': "I'm so sleepy."
  }

Human.prototype.Speaks = {
  'anger': "Ugh! You make me so mad!",
  'happy': "Wow, everything is so lovely",
  'tired': "I... can't... do anything...right... now...",
  'sleep': "snooooorrrrrreee...."
}

Human.prototype.Gender = {
  'male': 'male',
  'female': 'female'
}

const person1 = new Human('Byron')

console.log(`${person1.HasFeelings.anger} ${person1.Speaks.anger}`);

console.log(`My name is ${person1.name} and I want you to know that ${person1.HasFeelings.happy}`)

const cedric = new Human('Cedric')

console.log(`Cedric said: "${cedric.Speaks.tired} ${cedric.HasFeelings.tired}`);