const assertEqual = (actual, expected) => {
  // const isPassing = actual === expected;
  // console.log(`Assertion ${isPassing ? 'Passed' : 'Failed'}: ${String.fromCodePoint(isPassing ? 0x2705 : 0x274C)} ${actual} ${isPassing ? '=' : '!'}== ${expected}`);
  
  console.log(
    actual === expected
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
  
  // if (actual === expected) {
  //   console.log("Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`);
  // } else {
  //   console.log("Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`);
  // }
}

assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1, 1); 

