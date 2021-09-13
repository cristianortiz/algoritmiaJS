// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  /*  first turn the string into an object to get the following structure
    'Hello there!' => {"H":1,"e":3,"l":2,"o":1," ":1,"t":1,"h":1,"r":1,"!":1}
    this object split the string in individual characters and counts the times who 
    every character repeats itself in the original string  */
  //long way
  const charMap = {};
  const charMap2 = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  //short way
  for (let char of str) {
    charMap2[char] = charMap2[char] + 1 || 1;
  }
  //iterate an object special for loop and return the most repeated character
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
  console.log(charMap);
}

module.exports = maxChar;
