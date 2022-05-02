/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:
*/

// let unique = (array) => {
//     let arr = [];
//     array.filter((ele) => {
//         if (!arr.includes(ele)) {
//             arr.push(ele)
//         }
//     });
//     return arr;
// }

// function unique(arr) {
//     // arg: array of letters or numbers
//     // return: array of arr  minus duplicates
//     return arr.reduce((accl, ele) => {
//         if (!accl.includes(ele)) {
//             accl.push(ele)
//         }
//         return accl;
//     }, []);
// }

let unique = (array) => {
    console.log(array);
    let noDuplicates = array.reduce((acc, curr) => {
        console.log(acc);

    }, 0)
    return noDuplicates;
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']



// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
