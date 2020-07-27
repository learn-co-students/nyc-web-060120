console.log("functions & stuff")

/*

1. SCOPE

  a. Global Scope
  b. Function Scope
  c. Block Scope

2. HOISTING

3. VARIABLE DECLARATION

4. FIRST CLASS FUNCTIONS

  a. callbacks
  b. closures
  c. higher order functions

*/

// ---------------------------------------------------------------------------------------------------------------------------------

// 1. SCOPE
/* Lexical Scoping means that in a nested group of functions, 
the inner function have access to the variables and other resources of their parent scope.
*/

  // a. Global Scope
  // variables declared in the global scope are visible to any nested function in the same scope

  // let name = "Steven"
  
  // const sayHi = () => {
  //   console.log(`Hi there ${name}`)
  // }

  // b. Function Scope
  // variables declared in function scope are visible within the function and any nested functions inside of it, but not visible from outside of the function
  
  // const sayHi = () => {
  //   const teacher = "Steven"

  //   function thing() {
  //     console.log(`Hi there ${teacher}`)
  //   }

  //   thing()
  // }

  // console.log(teacher) //=> raises a reference error

  // c. Block Scope

  // {
  //   const dog = "Perky"
  // }

  // console.log(dog) //=> raises a reference error

// ---------------------------------------------------------------------------------------------------------------------------------
// 2. HOISTING
/* 
when JS is being compiled, certain functions and variables are "hoisted" to the top of whatever scope they're in - variable definitions don't come along for the ride
*/

// variables declared with `var` are hoisted, `let` and `const` are not

// console.log(dog)

// var dog = "Perky"

// console.log(dog)

//-------------------

// bark()

// function bark(){
//   console.log("I declare barking!!!")
// }

// let bark = function(){ console.log("Bark")} // => won't get hoisted
// let bark = () => console.log("bark bark") // => won't get hoisted

// let something = function(){...} // => function expression
// let otherThing = () => {...} // => arrow funtion
// function yetAnotherThing(){...} // => function declaration

// ---------------------------------------------------------------------------------------------------------------------------------
// 3. VARIABLE DECLARATION
  // a. var
  // don't use
  // allows for both redefinition and redeclaration of variable

  // var student = "Ramona"
  // var student = "Oliver"
  // student = "Sebastien"


  // b. let
  // let allows for redefinition, but not redeclaration

  // let pony = "Benny"
  // let pony = "Rosie" // => will raise an error
  // pony = ['horse1', 'horse2']

  // c. const
  // const does not allow redeclaration or redefinition
  // will allow for modification of objects the variable points to 
  // e.g., add things to an array, change properties in an object

  // const tree = {
  //   species: "oak",
  //   height: 16
  // }
  // tree.age = 20
  // tree.species = 5

// ---------------------------------------------------------------------------------------------------------------------------------
// 4. FIRST CLASS FUNCTIONS

  /* 
  languages are said to treat functions as first class citizens 
  when they treat functions like other objects, meaning they can be
  assigned to variables, they can be passed around as arguments,
  or they can be assigned as properties inside objects.
  */

  // a. callbacks 
  // passing a function in as an argument to another function
  // create my own implementation of the map function

  // const myMap = (array, callback) => {
  //   const newArray = []
    
  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i]
  //     const newValue = callback(element)
  //     newArray.push(newValue)
  //   }
    
  //   return newArray
  // }




  // b. higher order functions
  // functions that accept functions as parameters or that return other functions




  // c. closures
  // a closure is when a function is able to remember and access its
  // scope even when that function is executing outside of its original scope
  // a function with a backpack, a function with baggage

  // function multiplier(x){
  //   return function(y) {
  //     return x * y
  //   }
  // }

  // // these remember the x value they had access to when they were declared
  // const doubler = multiplier(2) 
  // const tripler = multiplier(3)

  // doubler (4) // => returns 8
  // tripler(4) // => returns 12

