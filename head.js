const assertEqual = (actual, expected) => { 
  console.log(
    actual === expected
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

const _ = require('lodash');
// to just import the head method of lodash destructure:
// const { head } = require('lodash');
//  const headder = head(arr);
const head =(arr) => {
  const headder = _.head(arr);
  return headder;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


