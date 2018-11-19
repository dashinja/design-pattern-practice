/* A way of encapsulating similar methods.
It creates a toolbox of functions to use.
*/

/*Basically just an Object Literal*/
var Module = {
  method: function(){},
  nextMethod: function(){}
}

/* Now, encapsulated - that is wrapped in a function!
Just like you see below */

var Module = function() {
  var privateVar = 'I am private...'
  return {
    method: function () {
    },
    nextMethod: function () {
    }
  }
}

/* A module is often used as a one off thing, like a service for a db as example,
you don't make new instances of it etc. */

/*Example section below*/

/* <--- This is just setup using a constructor function -->> */
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

Human.prototype.toString = function nameToString() {
  return this.name
}

Human.prototype.hasFeelings = {
    'anger': "I'm angry!",
    'happy': "I'm happy!",
    'tired': "I need to rest.",
    'sleepy': "I'm so sleepy."
  }

Human.prototype.speaks = {
  'anger': "Ugh! You make me so mad!",
  'happy': "Wow, everything is so lovely",
  'tired': "I... can't... do anything...right... now...",
  'sleep': "snooooorrrrrreee...."
}

Human.prototype.gender = {
  'male': 'male',
  'female': 'female'
}
/* <-- Ending Setup with Constructor Function -- > */

/* <-- Below starts Module Pattern Training --> */


const moodChange = function(person) {
  // const person = new Human (person.toString())

  return {
    makeAngry: function () {
     console.log(person.hasFeelings.anger); 
    },
    makeHappy: function () {
      console.log(`My name is ${person.name} and ${person.hasFeelings.happy} ${person.speaks.happy}`);
    }
  }
}

const Byron = new Human('Byron')
moodChange(Byron).makeHappy()