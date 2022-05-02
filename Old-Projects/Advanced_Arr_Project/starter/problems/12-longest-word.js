/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:
*/


let longestWord = (sentence) => {
    let splitSent = sentence.split(' ')
    let longWord = '';
    splitSent.forEach((ele, index) => {
        if (ele.length > longWord.length) {
            longWord = ele;
        }
    });
    return longWord;
}



console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''




// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
