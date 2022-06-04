// Artis-Mickens, K.
// June 04, 2022 @05:23
// ------------------
// Working with ES6 Functions - - Week #005
// Arrow Function - ES6
// Working With Fat Arrows In ES6 Activity
//
// (Week 5 - Functions: Anonymous Functions)
// ------------------

//
// MIT xPRO - Professional Certificate in Coding: Full Stack Development with MERN - April 2022
//

/*

GOAL: 
    Create and use anonymous functions in JavaScript
    Identify the different JavaScript syntax variations


convert the function in the arrowfunction.js file into ES6 functions

fat arrow notation manuevers

*/



/*function addFive(num) {
  return num + 5;
}*/

let addFive = num => (num + 5)
// TODO: Convert addFive() to arrow function



/*function divideBy(x, y) {
  return x / y;
}*/
// TODO: Convert divideBy() to arrow function
let divideBy = (x,y) => (x/y)

/*function logToConsole() {
  let msg = "MIT Coding Certificate";
  console.log(msg);
}*/
// TODO: Convert logToConsole() to arrow function
let logToConsole = () => {
  let message = "MIT Coding Certificate";
  console.log(msg);
}
