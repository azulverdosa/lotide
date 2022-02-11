//pseudo code:
//

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

//test cases:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true, 'first');

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false, 'second');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true, 'third');

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false, 'fourth');


module.exports = eqObjects;

