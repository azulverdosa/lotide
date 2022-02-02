//pseudo code:
//implement function(assertArrayEqual) that takes 2 arrays and console.log() an appropriate message
//instruction notes: Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

//approach:
//import eqArrays from eqArrays.js file - original notes available in eqArrays.js file
//replace === check with eqArrays function as comparison
//call function below declaration to ensure accuracy

//exicution:
const assertEqual = (actual, expected) => {  
  console.log(
    JSON.stringify(actual) === JSON.stringify(expected)    
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

//test cases:
console.log('--- assertEqual');
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, "1"); 
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [3, 2, 1]);
assertEqual(["1", "2", "3"], ["1", "2", "3"]);
assertEqual(["1", "2", "3"], ["1", "2", 3]);
assertEqual(true, false);
