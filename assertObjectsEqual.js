const eqArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const eqObjects = function(object1, object2) {
  let obj1Arr = Object.keys(object1);
  let obj2Arr = Object.keys(object2);

  if(obj1Arr.length === obj2Arr.length) {
    for (let key of obj1Arr) {
      // if (JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  console.log(
    eqObjects(actual, expected)
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${inspect(actual)} === ${inspect(expected)}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${inspect(actual)} !== ${inspect(expected)}`
  );
}
//test cases:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ba, ab);
assertObjectsEqual(ba, abc);