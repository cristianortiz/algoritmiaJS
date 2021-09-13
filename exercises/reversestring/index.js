// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseSimple(str) {
  //the most simple solution, turn the string into array an the apply reverse Js function
  const arr = str.split(""); //divide the string into individual letters
  //reverse the array elements
  arr.reverse();
  //join the elements again
  return arr.join("");
  //this is the short way
  //return str.split("").reverse().join("");
}
//using a simple loop
function reverseLoop(str) {
  //temp variable
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
//using the most complicated method
function reverse(str) {
  //turn the string into an array
  const arr = str.split("");
  //use reduce helper function to join again in string form after of reverse the string
  return arr.reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
