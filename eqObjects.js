//pseudo code:
//

const assertEqual = (actual, expected) => {
  console.log(
    actual === expected
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

const eqObjects = function(object1, object2) {
  let obj1Arr = Object.keys(object1);
  let obj2Arr = Object.keys(object2);

  if(obj1Arr.length !== obj2Arr.length) {
    return false;
  } else {
    for (let keys of obj1Arr) {
      if(object1[keys] === object2[keys]) {
        return true;
      } else {
        return false;
      }
    } 
  } 
}

//test cases:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

console.log(eqObjects(ba, abc))