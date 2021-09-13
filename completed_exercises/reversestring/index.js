// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // // //the most simple solution, turn the string into array an the apply reverse Js function
  // const arr = str.split(""); //divide the string into individual letters
  // //reverse the array elements
  // arr.reverse();
  // //join the elements again
  // return arr.join("");
  return str;

  //return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }
