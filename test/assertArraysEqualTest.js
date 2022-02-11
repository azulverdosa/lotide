const assertArraysEqual = require("../assertArraysEqual")
const eqArrays = require("../eqArrays");

//test cases:
console.log('--- assertEqual');
assertArraysEqual("lighthouse Labs", "Bootcamp"); //false
assertArraysEqual(1, "1");  //false
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false
assertArraysEqual(true, false); //false

//NOTE: Benny showed me how to leverage eqArrays in assertArraysEqual