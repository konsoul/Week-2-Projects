/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/



const shortestWord = (sentence) => {
  let shortestWordLength = sentence.split(' ').length;
  let shortestWord = ''

  sentence.split(' ').reverse().forEach(word => {
    if (word.length < shortestWordLength) {
      shortestWordLength = word.length
      shortestWord = word;
    }

  });
  return shortestWord;

}


console.log(shortestWord('what a wonderful life')); // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy')); // 'do'


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
