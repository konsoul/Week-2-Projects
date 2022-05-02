/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:
***********************************************************************/

let arrayConverter = (array) => {
  let obj = {};
  array.forEach(char => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  })
  return obj;
}



console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato:}




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;

// function arrayConverter(array) {
//   let arrayObject = {};

//   for (let i = 0; i < array.length; i++) {
//     let key = array[i];

//     if (arrayObject[key] === undefined) {
//       arrayObject[key] = 1;
//     } else {
//       arrayObject[key] += 1;
//     }
//   }
//   return arrayObject;
// }
