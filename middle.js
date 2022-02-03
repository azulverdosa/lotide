//pseudo code:
//create a function called middle
//middle takes an array and returns an arry with the middle most elements of the original array
//for arrays with 1 or 2 elements there is no middle -> return []
//arrays with odd number of elements -> return the single most element
//arrays with even number of elelments -> return the 2 middle most elements
//write test assertions using assertArraysEqual

//approach:
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
