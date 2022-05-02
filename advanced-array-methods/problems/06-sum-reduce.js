/*

Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.

Examples:

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0

*/


const sumWithReduce = (nums) => {
  return nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

// console.log(sumWithReduce([10, 3, 5, 2])); // 20
// console.log(sumWithReduce([])); // 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumWithReduce;
} catch (e) {
  module.exports = null;
}
