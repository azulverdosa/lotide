const tail = require("../tail.js")
const assertArraysEqual = require("../assertArraysEqual")
const eqArrays = require("../eqArrays");

console.log(tail(["Hello", "Lighthouse Labs", "Bootcamp"]));

//test cases:
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail(["Hello", "Lighthouse Labs", "Bootcamp"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([1, 2, 3, 4]), [2, 3, 4,]);
assertArraysEqual(tail([true, false, false, true]), [false, false, true]);
assertArraysEqual(tail([true, false, [1, 2, 3, 4], true]), [false, [1, 2, 3, 4], true]);
assertArraysEqual(tail([true, "hello", [1, 2, 3, 4], true]), [false, [1, 2, 3, 4], true]);