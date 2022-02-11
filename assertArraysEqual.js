const eqArrays = require("./eqArrays");

const assertArraysEqual = (actual, expected) => {
  console.log(
    eqArrays(actual, expected)
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

module.exports = assertArraysEqual;

