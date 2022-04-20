/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
restSum(0); // => 0
***********************************************************************/

// you'll need to change the parameters!
function restSum(...nums) {
  return nums.reduce((acc, curr) => {
    return acc + curr;
  });
  // your code here
}


// console.log(restSum(3, 5, 6)); // => 14
// console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 14
// console.log(restSum(0)); // => 0
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
