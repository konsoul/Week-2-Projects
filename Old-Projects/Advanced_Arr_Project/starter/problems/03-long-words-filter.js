/*

Write a function `longWords(words)` that takes in an array of words.
The function should return an array containing only the words that are longer
than 5 characters.

Solve this using Array's `filter()` method.

Examples:
*/

let longWords = (words) => {
  let longerWords = words.filter((ele) => {
    return ele.length > 5;
  });
  return longerWords;
}


console.log(longWords(['bike', 'skateboard', 'scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka', 'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]



// your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longWords;
} catch (e) {
  module.exports = null;
}
