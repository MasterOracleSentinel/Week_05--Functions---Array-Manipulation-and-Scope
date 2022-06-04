// Artis-Mickens, K.
// June 04, 2022
// ------------------
// Array Manipulation Activity - - Week #005
// String Manipulation
// (Week 5 - Functions: Array Manipulation And Scope)
// ------------------

//
// MIT xPRO - Professional Certificate in Coding: Full Stack Development with MERN - April 2022
//

//Write the sliceElements function that return the last three elements of any given array.

//Write the function spliceElements
//Write a function called spliceElements that would remove the last element of a given array and add 2 new elements at that position

//Write the splitElements function

//Write a function called splitElements that would convert a given string into an array of words.



// Step 1: use slice to find elements in an array
function sliceElements(givenArray) {
  //TODO: return last 3 elements of givenArray
  let holderForFunction = givenArray.slice(givenArray.length-3,givenArray.length);
  return holderForFunction;
}

// Step 2: use splice to find elements in an array
function spliceElements(givenArray, element1, element2) {
  //TODO: remove the last element of givenArray and add element1 and element2 at that position
  //console.log(givenArray);
  //console.log('length --> ' + givenArray.length);
  //console.log('length -1 --> ' + (givenArray.length-1));
  givenArray.splice(givenArray.length-1, 1, element1, element2);
  console.log(givenArray);
  return givenArray;
}

// Step 3: use splice to find elements in an array
function splitElements(givenString) {
  //TODO: convert givenString into an array of words
  const spliffs = str.split(' ');
  return spliffs;
}

//Uncomment these line to see results for step 1
//console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); // should return ["MIT Certificate", 4, 5]
//console.log(sliceElements([1, 2, [3, 4], "JavaScript"])); // should return [2, [3, 4], "JavaScript"]

//Uncomment these line to see results for Step 2
//var arr = [1, 2, "MIT Certificate", 4, 5];
//console.log(arr);
//console.log(spliceElements(arr, "JavaScript", 101)); // should return [1, 2, "MIT Certificate", 4, "JavaScript", 101]

//Uncomment these line to see results for Step 3
 var str = "MIT Certificate loves JavaScript";
 console.log(splitElements(str)); // should return ["MIT", "Certificate", "loves", "JavaScript"]

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { sliceElements, spliceElements, splitElements };
}
