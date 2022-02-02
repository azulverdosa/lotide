// const { tail } = require('lodash');

// const tailEnd = (arr) => {
//   const tailArr = tail(arr);
//   return tailArr;
// }

//pseudo code:
//create a function that returns every element except the first
//compare those return values for equality
//do not use _.tail from lodash

//approach: 
//slice() each array from index[1]
//compare resulting arrays using JSON.stringify
const tail = (arr) => {
  const tailArr = arr.slice(1);
  return tailArr;
}

const assertEqual = (arr1, arr2) => {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log("true");
  } else {
    console.log("false");
  }
}

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail(["Hello", "Lighthouse Labs", "Bootcamp"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1, 2, 3, 4]), [2, 3, 4,]);
assertEqual(tail([true, false, false, true]), [false, false, true]);
assertEqual(tail([true, false, [1, 2, 3, 4], true]), [false, [1, 2, 3, 4], true]);
assertEqual(tail([true, "hello", [1, 2, 3, 4], true]), [false, [1, 2, 3, 4], true]);

