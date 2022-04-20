/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

let myEvery = function (array, cb) {
    let booleanArray = array.map(ele => {
        return cb(ele);
    });
    // Using set we can iterate over an object and store each object into the new Set. If the iterable has all the same elements, it will narrow it down to one single ele. We can then use length to see if it is equal to 1, and if it is, we know all elements in the array are the same.
    return new Set(booleanArray).size === 1;
};

// let isEven = function (num) {
//     return num % 2 === 0;
// };

// let hasO = function (string) {
//     return string.includes('o');
// };

// console.log(myEvery([4, 8, 6, 10], isEven)); // true
// console.log(myEvery([4, 7, 6, 10], isEven)); // false
// console.log(myEvery(['book', 'door'], hasO)); // true
// console.log(myEvery(['book', 'door', 'pen'], hasO)); // false




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
