/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
of objects as the first parameter and a string as the second. The
`keyInObjectArray` function will return `true` if any of the objects contains
the `keyString` as a key within them, and `false` if not.
Examples:
// ***********************************************************************/

let keyInObjectArray = (objArray, keyString) => {
  // set a variable to false because we can't return from a forEach
  let bool = false;
  // loop through each index of the array, which are objects.
  objArray.forEach(object => {
    // take each object, and break them into an array of keys, then index over them to get our indexes, if it doesn't exist indexOf will return a -1.
    if (Object.keys(object).indexOf(keyString) > -1) {
      bool = true;
    }
  });
  return bool;
}



let objArray = [{
  name: "Rupert"
}, {
  age: 42
}, {
  planet: "Earth",
  system: "Milky Way"
}];






console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false








// let keyInObjectArray = (objArray, keyString) => {
//   let answer = false;
//   objArray.forEach((ele) => {
//     if (Object.keys(ele).indexOf(keyString) > -1) {
//       answer = true;
//     }
//   });
//   return answer;
// }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
