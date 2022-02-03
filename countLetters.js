const assertEqual = (actual, expected) => {
  console.log(
    actual === expected
    ? "Assertion Passed: " + String.fromCodePoint(0x2705) + ` ${actual} === ${expected}`
    : "Assertion Failed: " + String.fromCodePoint(0x274C) + ` ${actual} !== ${expected}`
  );
}

const countLetter = (str) => {
  let letterCount = {};  // letter: countNumber a count of each occurance of each letter in the string; example, countLetters('LHL') should return results indicating that L appears twice, and H once.

  for (let character of str) {
    if (character !== ' ') {
      letterCount[character] = (letterCount[character] || 0) + 1;
    }  
  }
  return letterCount;
}
  
console.log(countLetter('The Piggy is the best'));

assertEqual(countLetter('The Piggy is the best')['g'], 2);
assertEqual(countLetter('The Piggy is the best')['h'], 2);
assertEqual(countLetter('The Piggy is the best')['T'], 1);
assertEqual(countLetter('One, two, 3. A, b, c')['3'], 1);
assertEqual(countLetter("The quick brown fox jumps over the lazy dog" )['the'], 1);