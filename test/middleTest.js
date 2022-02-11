const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual")

//test cases:
const evenArr = ['Juno', 'is', 'the', 'best', 'piggy', 'ever!'];
console.log(middle(evenArr));
assertArraysEqual(evenArr, ['Juno', 'is', 'the', 'best', 'piggy', 'ever!']);

const oddArr = [1, 4, 6, [2, 23, 3], 0, 8, 6];
console.log(middle(oddArr));
assertArraysEqual(oddArr, [1, 4, 6, [2, 23, 3], 0, 8, 6]);

const twoArr = [true, false];
console.log(middle(twoArr));
assertArraysEqual(twoArr, [true, false]);

const emptyArr = [];
console.log(middle(emptyArr));
assertArraysEqual(emptyArr, []);