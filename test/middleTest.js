// const middle = require("../middle");
// const assertArraysEqual = require("../assertArraysEqual")

// //test cases:
// const evenArr = ['Juno', 'is', 'the', 'best', 'piggy', 'ever!'];
// console.log(middle(evenArr));
// assertArraysEqual(evenArr, ['Juno', 'is', 'the', 'best', 'piggy', 'ever!']);

// const oddArr = [1, 4, 6, [2, 23, 3], 0, 8, 6];
// console.log(middle(oddArr));
// assertArraysEqual(oddArr, [1, 4, 6, [2, 23, 3], 0, 8, 6]);

// const twoArr = [true, false];
// console.log(middle(twoArr));
// assertArraysEqual(twoArr, [true, false]);

// const emptyArr = [];
// console.log(middle(emptyArr));
// assertArraysEqual(emptyArr, []);

const {describe, it} = require("mocha");

const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns two middle values from even numbered array ", () => {
    assert.deepEqual(middle(['Juno', 'is', 'the', 'best']), ['is', 'the']);
  });

  it("returns empty array from array with only two values",() => {
    assert.deepEqual(middle([true, false]), []);
  });

  it("returns empty array from empty array",() => {
    assert.deepEqual(middle([]), []);
  });

  it("returns single middle value from odd numbered array",() => {
    assert.deepEqual(middle([1, 4, 6, [2, 23, 3], 0, 8, 6]), [[2, 23, 3]]);
  });
});