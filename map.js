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

const words = ['Piggy', 'Andy', 'Meow', 'MiniMeow', 'Mermeow', 'AvaCado'];
const numbers = [1, 2, 3, 4, 5 , 6, 7];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

console.log(map(words, word => word[0]));
console.log(map(words, word => word.toUpperCase()));
console.log(map(numbers, number => number * 2));

assertArraysEqual(map(words, word => word[0]), [ 'P', 'A', 'M', 'M', 'M', 'A' ]);
assertArraysEqual(map(words, word => word.toUpperCase()), [ 'PIGGY', 'ANDY', 'MEOW', 'MINIMEOW', 'MERMEOW', 'AVACADO' ]);
assertArraysEqual(map(numbers, number => number * 2), [2,  4,  6, 8, 10, 12, 14]);

const map1 = (words.map(word => word[0], words.map(word => word.toUpperCase()), numbers.map(number => number * 2)));
console.log(map1);