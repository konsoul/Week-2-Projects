/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/

function commonValues(obj1, obj2) {
    let newArray = [];
    let obj1ValuesArray = Object.values(obj1);
    let obj2ValuesArray = Object.values(obj2);

    obj1ValuesArray.forEach(ele => {
        if (obj2ValuesArray.includes(ele)) {
            newArray.push(ele);
        }
    })
    return newArray

}


// const cat = {
//     color: 'white',
//     legs: 4,
//     favoriteFood: 'sushi'
// };
// const bunny = {
//     color: 'white',
//     favoriteFood: 'carrots'
// };
// const human = {
//     hobbies: ['running', 'painting'],
//     legs: 4,
//     favoriteFood: 'sushi'
// };
// const vehicle = {
//     wheels: 4,
//     color: 'red'
// };

// console.log(commonValues(cat, bunny)); // prints ['white']
// console.log(commonValues(cat, human)); // prints [4, 'sushi']
// console.log(commonValues(human, vehicle)); // prints [4]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
