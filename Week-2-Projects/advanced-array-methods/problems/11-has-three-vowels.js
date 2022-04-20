/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

const checkVowels = (wordToCheck) => {
    const VOWELS = 'aeiou'
    let countVowels = wordToCheck.split('').filter(char => {
        return VOWELS.includes(char)
    });
    console.log(countVowels)
    return countVowels;
}

const hasThreeVowels = (string) => {
    let vowelList = checkVowels(string);
    let vowelCounter = 0;

    vowelList.forEach(vowel => {
        vowelCounter++;
    });

    if (vowelCounter > 3) {
        return true
    }
    return false
}


console.log(hasThreeVowels('delicious')); //  true
console.log(hasThreeVowels('bootcamp prep')); //  true
console.log(hasThreeVowels('bootcamp')); //  false
console.log(hasThreeVowels('dog')); //  false
console.log(hasThreeVowels('go home')); //  false


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
