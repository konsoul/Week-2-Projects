/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!
***********************************************************************/
// Examples:

// you'll need to change the parameters!

let restSum = (...nums) => {
  let addSum = nums.reduce((acc, curr) => {
    return acc + curr;
  });
  return addSum;
}





console.log(restSum(3, 5, 6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 14
console.log(restSum(0)); // => 0


// function restSum(...nums) {
//   let addSum = nums.reduce((acc, curr) => {
//     return acc + curr;

//   });
//   return addSum;
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
