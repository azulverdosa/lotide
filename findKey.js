const assertEqual = (actual, expected) => {
  console.log(
    actual === expected
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
} 

const findKey = (object, callback) => {
  const values = Object.entries(object);

  const result = values.find(([key, value]) => callback(value));

  return result ? result[0] : undefined;
}

const solar ={
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const cb = value => value.stars === 2;


assertEqual(findKey(solar, cb), 'noma');