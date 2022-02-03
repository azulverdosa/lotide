//pseudo code:
//create a function called middle
//middle takes an array and returns an arry with the middle most elements of the original array
//for arrays with 1 or 2 elements there is no middle -> return []
//arrays with odd number of elements -> return the single most element
//arrays with even number of elelments -> return the 2 middle most elements
//write test assertions using assertArraysEqual

//approach:
//instructed to import assertArraysEqual function & eqArrays function from respective files - original notes available in original files
//find middle values (math) note -> replaced repeating code with a variable
//return values note - instead of push I used -> return ['items', 'in', 'an', 'array']
//test wuth assertArraysEqual

//execution:
const eqArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const assertArraysEqual = (actual, expected) => {
  console.log(
    eqArrays(actual, expected)
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

const middle = (arr) => {
  let middleIndex = arr.length / 2;
  
  if (arr.length <= 2 ){
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[Math.floor(middleIndex)]];
  }
}

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

