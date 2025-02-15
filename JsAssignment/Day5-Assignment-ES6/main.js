const {area, rectangle, cylinder} = require('./method.js');
const {uniqueArray} = require('./uniqueArray.js');

// calculating area of circle, rectangle, cylinder
const radius = 5;//20;
const length = 10;//15;
const width = 4; //6;
const height = 7; //8;

console.log(`Area of Circle is ${area(radius)} of ${radius}`);
console.log(`Area of Rectangle is ${rectangle(length, width)} with length: ${length} and width: ${width}`);
console.log(`Area of Cylinder is ${cylinder(radius, height)} with radius: ${radius} and height: ${height}`);


// filtering unique elements in an array

const array = [1, 2, 3, 4, 5, 1, 2, 3, 6];

console.log(`The unique array is [${uniqueArray(array)}]`);