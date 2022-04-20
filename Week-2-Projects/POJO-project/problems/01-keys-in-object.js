/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

const keysInObject = (obj) => {
  let newArray = [];
  for (let keys in obj) {
    newArray.push(keys);
  }
  return newArray;
}

// function keysInObject(obj) {
//   return Object.keys(obj)
// }


let foods = {
  apple: 'tart',
  lemon: 'sour',
  mango: 'sweet'
}

let animals = {
  dog: 'Wolfie',
  cat: 'Jet',
  bison: 'Bilbo'
}

console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
console.log(keysInObject(foods)); // => ["apple", "lemon", "mango"]




// function keysInObject(obj) {
//   let keyArray = []
//   for (let key in obj) {
//     keyArray.push(key);
//   }
//   return keyArray;
// }
// /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = keysInObject;
