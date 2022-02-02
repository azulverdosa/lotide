//pseudo code:
//create a function named without 
//without() will remove unwanted elements of the original array and returns a subset of a the original array


//approach:
//instructed to import assertArraysEqual function & eqArrays function from respective files - original notes available in original files
//
const assertArraysEqual = (actual, expected) => {  
  console.log(
    JSON.stringify(actual) === JSON.stringify(expected)    
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

const eqArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

//test cases
console.log('--- assertArraysEqual');
assertArraysEqual(true, false);
assertArraysEqual(324, false);

console.log('--- eqArrays');
eqArrays([1, 2, 3], [1, 2, 3]) 
eqArrays([1, 2, 3], [3, 2, 1]) 
eqArrays(["1", "2", "3"], ["1", "2", "3"]) 
eqArrays(["1", "2", "3"], ["1", "2", 3]) 

