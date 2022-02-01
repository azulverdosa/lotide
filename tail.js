const { tail } = require('lodash');

const tailEnd = (arr) => {
  const tailArr = tail(arr);
  return tailArr;
}

const assertEqual = (arr1, arr2) => {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log("true");
  } else {
    console.log("false");
  }
}

assertEqual(tailEnd(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tailEnd(["Hello", "Lighthouse Labs", "Bootcamp"]), ["Lighthouse", "Labs"]);
assertEqual(tailEnd([1, 2, 3, 4]), [2, 3, 4,]);
assertEqual(tailEnd([true, false, false, true]), [false, false, true]);
assertEqual(tailEnd([true, false, [1, 2, 3, 4], true]), [false, [1, 2, 3, 4], true]);
assertEqual(tailEnd([true, "hello", [1, 2, 3, 4], true]), [false, [1, 2, 3, 4], true]);

