//pseudo code:
//funtion called findKeyByValue that takes an object and a vale
//findKeyByValue will scan the object and return the first key that holds the given value
//if no key is found it should return undefined

//approach:
//iterate through an object
//find first occurance of the value given in the function
//return the key (string) associated with the value

//execution:
const assertEqual = (actual, expected) => {
  
  console.log(
    actual === expected
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

const findKeyByValue = (listObj, value) => {
  let keys = Object.keys(listObj);

  for(let category of keys) {
    if (listObj[category] === value) {
      return category;
    }
  }
}

//test cases:
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log('test', findKeyByValue(bestTVShowsByGenre, 'The Wire'));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestDogNamesByBreed = {
  collie: 'Ralph',
  retriever: 'Lola',
  german_sheppard: 'Luna',
  husky: 'Juno',
  pug: 'Blas',
  whippit: 'Penny',
  wiener: 'Andy',
  beagle: true,
  jack_russle: 5
}

assertEqual(findKeyByValue(bestDogNamesByBreed, "Juno"), "husky");
assertEqual(findKeyByValue(bestDogNamesByBreed, "Penny"), "whippit");
assertEqual(findKeyByValue(bestDogNamesByBreed, "Blas"), "pug");
assertEqual(findKeyByValue(bestDogNamesByBreed, "Andy"), "wiener");
assertEqual(findKeyByValue(bestDogNamesByBreed, 5), "jack_russle");
assertEqual(findKeyByValue(bestDogNamesByBreed, true), "beagle");
assertEqual(findKeyByValue(bestDogNamesByBreed, "Ava"), undefined);


//NOTE: this one took a minute, but I actually go it :)

module.exports = findKeyByValue;

