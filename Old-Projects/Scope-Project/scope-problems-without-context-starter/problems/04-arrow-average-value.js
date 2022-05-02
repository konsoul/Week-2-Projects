/***********************************************************************
Write a function usig fat arrow syntax, `arrowAvgValue(array)` that takes i an
array of numbers and returns the average number. Assign the below function to a
variable usig the const keyword.

Examples:


***********************************************************************/

const arrowAvgValue = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element / array.length;
  }
  return sum;
}

console.log(arrowAvgValue([10, 20])); // => 15
console.log(arrowAvgValue([2, 3, 7])); // => 4
console.log(arrowAvgValue([100, 60, 64])); // => 74.66666666666667

/**************DO NOT MODIFY ANYTHiG UNDER THIS  LiE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
