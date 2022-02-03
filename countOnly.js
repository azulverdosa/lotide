//pseudo code:
//create a function that takes an array(to filter through) and object(to use as parameters for filter)
//returns an object of everything the input object listed 
  //items should be elemts from the array that match keys from the object that hole the value of truthy 
    //omit anything with a value truthy who's key does match an element in the array
//function should report back how many instances of each item were found in allItems - object
  // return a proper report on all the strings found in the input array, and their respective counts.

//approach:
//array = allItems
//object = itemsToCount

//execution:
const assertEqual = (actual, expected) => {
  console.log(
    actual === expected
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for(const item of allItems) {
    if (itemsToCount[item]) {
      results[item] = (results[item] || 0) + 1;
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);