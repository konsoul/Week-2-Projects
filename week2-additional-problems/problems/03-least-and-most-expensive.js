/*
Least and Most Expensive Toys:
    Write a function that accepts an object that represents a catalog of toys with their names and prices.
    The toyNames of the object are names of each toy, and the corresponding value is its price.
    The function should return an array where the first element is the name of the least expensive toy,
    and the second element is the name of the most expensive toy. You may assume there will always be
    one most and least expensive toy.

    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
*/

function leastAndMostExpensive(catalog) {
    // Here we delare to helper variables to store our shit
    let min, max

    // We split our catalog into an array and loop through it where each element is our toyName
    Object.keys(catalog).forEach(toyName => {
        // If there is no value in min, reassign 'min' variable to the current toyName. If catalog[min] is greater than catalog[toyName], reassign 'min' again to the toyName
        if (!min || catalog[min] > catalog[toyName]) min = toyName;
        // If there is no value in max, reassign 'max' variable to the current toyName.
        if (!max || catalog[max] < catalog[toyName]) max = toyName;

    });

    return [min, max]
}


const catalog1 = {
    'ball': 5,
    'jumprope': 3,
    'yo-yo': 10,
    'trading cards': 12
}
const catalog2 = {
    'skateboard': 50,
    'bicycle': 100,
    'doll': 10,
    'puzzle': 20
}
console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastAndMostExpensive;
} catch (e) {
    module.exports = null;
}
