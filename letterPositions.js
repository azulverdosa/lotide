//pseudo code:
//create a function that returns the indeces in the string where a charachter is from

//approach:
//listen to Benny and turn the string into an array
//listen to Benny and use forEach instead of a loop
//use code from countOnly.js

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

const letterPositions = (sentence) => {
  const results = {};

  sentence
    .split('')
    .forEach((letter, index) => {
      if (letter !== ' ') {
        results[letter] = (results[letter] || []).concat(index); //NOTE: this still trips me up
      }
    });

  return results
}

const piggy = 'The Piggy is the best';

assertArraysEqual(letterPositions(piggy).g, [6, 7]);
assertArraysEqual(letterPositions(piggy).e, [2, 15, 18]);
assertArraysEqual(letterPositions(piggy).T, [0]);
assertArraysEqual(letterPositions(piggy).P, [4]);