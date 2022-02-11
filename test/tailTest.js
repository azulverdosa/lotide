// const assertArraysEqual = require("../assertArraysEqual")
// const eqArrays = require("../eqArrays");

// test cases:
// assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// assertArraysEqual(tail(["Hello", "Lighthouse Labs", "Bootcamp"]), ["Lighthouse", "Labs"]);
// assertArraysEqual(tail([1, 2, 3, 4]), [2, 3, 4,]);
// assertArraysEqual(tail([true, false, false, true]), [false, false, true]);
// assertArraysEqual(tail([true, false, [1, 2, 3, 4], true]), [false, [1, 2, 3, 4], true]);
// assertArraysEqual(tail([true, "hello", [1, 2, 3, 4], true]), [false, [1, 2, 3, 4], true]);


const {describe, it} = require('mocha');

const assert = require("chai").assert;
const tail = require("../tail.js")

describe("#tail", () => {
  it("returns new array containing all array values from original array except first value", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4,]);
  });

  it("returns new array containing all array values from original array except first value", () => {
    assert.deepEqual(tail([true, false, false, true]), [false, false, true]);
  });

  it("returns new array containing all array values from original nested array except first value", () => {
    assert.deepEqual(tail([true, "hello", [1, 2, 3, 4], true]), ["hello", [1, 2, 3, 4], true]);
  });

  it("returns new array containing all array values from original deeply nested array except first value", () => {
    assert.deepEqual(tail(['🍍', [['🍎', ['🍑']], [[['🍒']], '🍌']]]), [[['🍎', ['🍑']], [[['🍒']], '🍌']]]);
  });
});

