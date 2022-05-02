/*

    Write a function bestStudent() that takes any number of student objects, each with names for keys, and total points for values.
    The function should.
    If no students are passed to the function, return null;
    See below for how student objects are structured.



    // return the name of the student with the most points

    const student1 = { name: "Geoff", points: 50 };
    const student2 = { name: "Justin", points: 1000 };
    const student3 = { name: "Tom", points: 568 };
    const student4 = { name: "Emily", points: 700 };
    const student5 = { name: "Corina", points: 750 };

    console.log(bestStudent(student1, student2, student3, student4, student5)) // returns "Justin"

  // a.) function should return the name of the student with the most points

//      Algorithm :
//      algorithm is a repeatable set of steps
//      =============================================================
//      is 0 > 50, no so our name is 'Geoff' and number is 50
//      is 50 > 1000 no, our name is 'Justin' and number is 1000
//      is 1000 > 568, yes, our name is 'Justin' and number is 1000
//      is 1000 > 700, yes, our name is 'Justin' and number is 1000
//      is 1000 > 750, yes, our name is 'Justin' and number is 1000
//      1000 > The last number and our name is 'Justin' and number is 1000

*/

const bestStudent = (...studentArray) => {
    let highestName = studentArray[0]


    studentArray.forEach(object => {
        if (object.points > highestName.points) {
            highestName = object

        }
    });
    return highestName.name;

}


const student1 = {
    name: "Geoff",
    points: 50
};
const student2 = {
    name: "Justin",
    points: 1000
};
const student3 = {
    name: "Tom",
    points: 568
};
const student4 = {
    name: "Emily",
    points: 700
};
const student5 = {
    name: "Corina",
    points: 750
};

console.log(bestStudent(student1, student2, student3, student4, student5)) // returns "Justin"






// const bestStudent = (...objects) => {
//     let largestObject = objects.pop();


//     objects.forEach(studentObject => {
//         if (studentObject.points > largestObject.points) {
//             largestObject = studentObject;
//         }
//     });

//     return largestObject.name;
// }


// let pointsArray = [];
// let nameArray = []
// let winner = '';
// let largest = 0;

// objects.forEach(object => {
//     for (let keys in object) {
//         if (object[keys] > largest) {
//             largest = object[keys]
//             pointsArray.push(object.points)
//             nameArray.push(object.name)
//         }
//     }
// });

// pointsArray.forEach(point => {
//     if (point >= largest) {
//         largest = point
//         winner = nameArray.pop()
//     }

// });
// console.log(pointsArray);
// console.log(nameArray)
// return winner;
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = bestStudent;
} catch (e) {
    module.exports = null;
}
