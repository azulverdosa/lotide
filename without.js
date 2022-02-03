//pseudo code:
//create a function named without 
//without() will remove unwanted elements of the original array and returns a subset of a the original array
//without will take 2 arguments: a source array and an array with items to remove from the source array
//the array returned will be a new array
//use assertArraysEqual to write test cases
//write a test case to ensure no mutationin the original (source) array

//approach:
//instructed to import assertArraysEqual function & eqArrays function from respective files - original notes available in original files
//use filter()
  //filter source array
  //check if each item in source are included in itemsToRemove
  //if included - filter out
//use assertArraysEqual as test to compare copy of source string to string used in the without function to check for equality

//execution:
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

const without = (source, itemsToRemove) => {
  return source.filter(element => !itemsToRemove.includes(element));
}

//test cases
const num = [1, 2, 3];
without(num, [1]) // => [2, 3]
assertArraysEqual(num, [1, 2, 3]);

const bool = [false, true, false, true];
without(bool, [true]);
assertArraysEqual(bool, [false, true, false, true]);

const stringOfNum = ["1", "2", "3"];
without(stringOfNum, [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(stringOfNum, ["1", "2", "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//NOTE: unsure why eqArrays function was needed