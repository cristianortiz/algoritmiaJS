// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //turning into string then split it in an array, then reverse and join again
  const digit = n.toString().split("").reverse().join("");
  //turn into int again and apply the orignal int sign
  return parseInt(digit) * Math.sign(n);
  //return Math.sign(n.toString().split("").reverse().join(""));
}

module.exports = reverseInt;
