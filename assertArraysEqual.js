//pseudo code:
//implement function(assertArrayEqual) that takes 2 arrays and console.log() an appropriate message
//instruction notes: Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

//approach:
//import eqArrays from eqArrays.js file - original notes available in eqArrays.js file
//replace === check with eqArrays function as comparison
//call function below declaration to ensure accuracy

//exicution:
const eqArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const assertArraysEqual = (actual, expected) => {
  console.log(
    eqArrays(actual, expected)
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

//test cases:
console.log('--- assertEqual');
assertArraysEqual("lighthouse Labs", "Bootcamp"); //false
assertArraysEqual(1, "1");  //false
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false
assertArraysEqual(true, false); //false
