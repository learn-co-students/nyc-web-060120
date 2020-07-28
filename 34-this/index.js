console.log("this is so much fun!")

/************ Function called on an Object ***************/

// `this` references the object executing the current function

const dog = {
  name: "Perky",
  returnThis: function(){
    console.log("This: ", this)
  },
  sayName: function(){
    console.log(`Hi my name is ${this.name}`)
  }
}


/************ Simple Function Call ***********************/
// in a simple function call, `this` will be the window object

function sayThis(){
  console.log("This: ", this)
}

window.name = "Winslow"

function sayName(){
  console.log(`Hi my name is ${this.name}`)
}


/************ Bind/Call/Apply ****************************/
// thisArg is an object we want to be used as the `this` object in a given context

const steven = {
  name: "Steven"
}

function sayNameLocationTime(location, time){
  console.log(`Hi, my name is ${this.name} and it's ${time} and I'm in ${location}`)
}

// sayNameLocationTime.call(steven, "LIC", "1:51") // => call and comma both start with "C"

// sayNameLocationTime.apply(steven, ["LIC", "1:52"]) // => apply and array both start with "A"

const boundFunction = sayNameLocationTime.bind(steven, "LIC", "1:57")
// boundFunction()

/************ Function Called with New Keyword ***********/
// 

class Dog {
  constructor(name, breed){
    this.name = name
    this.breed = breed
  }
}

// function dog(name, breed){
//   this.name = name
//   this.breed = breed
// }

const neikko = new Dog("Neikko", "mostly rat")


/************ Arrow Functions ****************************/

// arrow functions DO NOT get their own `this`, they get it from the parent context
// cannot use `call`, `apply`, or `bind` with arrow function
// arrow functions are great candidates to be used inside objects if you need to reference the calling object
// the behavior of arrow functions with regard to this is more predictable


const houdini = {
  name: "Houdini",
  returnThis: this,
  sayNameTraditional: function(){
    console.log(`Hi my name is ${this.name}`)
  },
  sayNameArrow: () => {
    console.log(`Hi my name is ${this.name}`)
  },
  otherFunction: function (){
    const thing = () => {
      console.log("Name: ", this.name)
    }

    thing()
  }
}




























