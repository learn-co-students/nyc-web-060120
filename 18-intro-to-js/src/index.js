console.log("Welcome to Mod 3")
// alert("hey there")

/*
 **Questions


 **Why JS?

  - three pillars - Coffee Dad Twitter
  - 1. DOM Manipulation - what the user sees on the web page
  - 2. Event handling - doing something when certain things happen in the browser
  - 3. Fetch - making HTTP requests to an external data source

  - Single Page Applications 
    - a dynamic web application experience that doesn't require a page reload
    - all the DOM manipulation and network requests are handled by JS

 
 **What is JS?

 - ECMAScript
  - European Computer Manufacturing Association
 - browser engines


 **How JS?

  - how to load JS into an HTML document
  - inline script tags in our html
  - local js files we bring in through the src attribute of a script tag
  - remote js files...


 **Some data types
 - null
  - essentially the same as "nil" in Ruby

 
 - Number
  - only the one Number class
  - 0 is falsey

 
 - String
  - can use "" or ''
  - template literal `` - this allows us to interpolate things into the straing
  - Ruby
    - "#{something} is great"
  - JS
    - `${something} is great`


 - Object Literals
  - equivalent to a Hash in Ruby
  - has dot notion get/set as well

 
 - Array



 - undefined
  - represents the as-of-yet defined value of something


 **Functions



*/

// function declaration
function sayHi(name){
  return `Hi there ${name}`
}

// function expression
let sayHello = function(name){
  return `Hello there ${name}`
}

// arrow functions
let sayHowdy = (name) => {
  return `Howdy ${name}`
}