/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string).
The function should return an array
the array should have value of the passed in argument
If location is my argument I want to put every value that has location as key in the arry


Examples:


*/

const valuePair = (obj1, obj2, key) => {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.includes(key) && key2.includes(key)) {
    return [obj1[key], obj2[key]];
  }

}



let object1 = {
  name: 'One',
  location: 'NY',
  age: 3
};
let object2 = {
  name: 'Two',
  location: 'SF'
};
console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]


// function valuePair(obj1, obj2, key) {
//   let key1 = Object.keys(obj1);
//   let key2 = Object.keys(obj2);
//   if (key2.includes(key) && key1.includes(key)) {
//     return [obj1[key], obj2[key]];

//   };



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
