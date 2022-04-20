/*
Write a function `sumForEach(arr)` that accepts an array as an arg.
The function should return the total sum of all values in the array.
*/

//Solve this using Array 's `forEach()` method.

//Examples:

let sumForEach = (arr) => {
  let total = 0;
  arr.forEach((ele) => {
    total += ele;
  });
  return total;
}
console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumForEach;
} catch (e) {
  module.exports = null;
}
