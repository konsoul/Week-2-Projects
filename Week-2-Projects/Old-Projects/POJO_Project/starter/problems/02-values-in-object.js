/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:
***********************************************************************/

let valuesInObject = (obj) => {
  let valuesArray = [];
  for (let keys in obj) {
    valuesArray.push(obj[keys])
  }
  return valuesArray;
}


let animals = {
  dog: "Wolfie",
  cat: "Jet",
  bison: "Bilbo"
}
let foods = {
  apple: "tart",
  lemon: "sour",
  mango: "sweet"
}
console.log(valuesInObject(animals)); // => ["Wolfie", "Jet", "Bilbo"]
console.log(valuesInObject(foods)); // => ["tart", "sour", "sweet"]



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
