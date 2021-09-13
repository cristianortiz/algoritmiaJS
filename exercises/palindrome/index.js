// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//simple solution using the reversed problem solution
function palindromeLoop(str) {
  //temp variable and simple loop
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  //split the str into array, using reverse function and join again
  const reversed2 = str.split("").reverse().join("");
  //if the reversed is equal to original str then str is a palindrome and returns true
  return str === reversed2;
  //   if (str === reversed) return true;
  //   else return false;
}
//using every array helper, not the optimal solution but you can explain
//why is not optimal and propose alternative solutions
function palindrome(str) {
  //turn string into array and appy a check condition for every value of the array
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;
