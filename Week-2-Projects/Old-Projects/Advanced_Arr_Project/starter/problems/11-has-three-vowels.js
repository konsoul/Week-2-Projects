/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:
*/


let hasThreeVowels = (string) => {
    let vowels = 'aeiou'
    let splitVowels = vowels.split('');
    let count = splitVowels.reduce((acc, curr) => {
        if (string.includes(curr)) {
            console.log(acc++);
        }
        return acc;
    }, 0);
    return count >= 3;
};

console.log(hasThreeVowels('delicious')); //  true
console.log(hasThreeVowels('bootcamp prep')); //  true
console.log(hasThreeVowels('bootcamp')); //  false
console.log(hasThreeVowels('dog')); //  false
console.log(hasThreeVowels('go home')); //  false




// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
