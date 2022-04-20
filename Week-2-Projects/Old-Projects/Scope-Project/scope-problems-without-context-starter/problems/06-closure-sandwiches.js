/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:



Another Sandwich:




***********************************************************************/

const sandwichMaker = () => {
  // we assign a variable that will stay constant throughout, but be added to by the child function
  let ingredientString = 'One sandwich with tomato';

  // Our child function has paramaters where our arguments are passed through using the closure variable function call 'sandwich('spinach')'. 'Spinach' will get passed through using the item variable paramater.
  let sandwich = (item) => {
    // we will borrow our variable from the Parent function, and we will ADD the item which is equal to 'spinach' for the first variable function call.
    ingredientString += ' and ' + item;
    // we will return this to the parent function, with the item appended
    return ingredientString;
  }
  // this will return the result of the variable inside the parent function
  return sandwich;
}



let sandwich = sandwichMaker(); // => returns a function

// Right here we are calling our sandwitch function
console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"

// let sandwich2 = sandwichMaker(); // => returns a function
// console.log(sandwich2("pb")) // => "One sandwich with tomato and pb"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
