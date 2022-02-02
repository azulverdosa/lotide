//pseudo code breakdown:
//create function eqArrays
//eqArrays takes in 2 arrays, compares their quality and returns true or false based on perfect match

//approach: 
//instructed to impot assertEqual function from assertEqual.js - original assertEqual notes available in assertEqual.js file
//tails.js  asked us to create a function that compares the tails of arrays I used that code as a base for eqArrays

//exicution:
const assertEqual = (actual, expected) => {  
  console.log(
    actual === expected
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

const eqArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

//test cases:
console.log('--- eqArrays');
eqArrays([1, 2, 3], [1, 2, 3]) //true
eqArrays([1, 2, 3], [3, 2, 1]) //false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) //true
eqArrays(["1", "2", "3"], ["1", "2", 3]) //false

//test cases:
console.log('--- assertEqual & eqArrays');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
