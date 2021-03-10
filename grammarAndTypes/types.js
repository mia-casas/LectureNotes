// *******
// Types
// *******

/*
Boolean: true or false ONLY
*/

let on = true;
console.log(true);

let off = false;
console.log(false);

/*
Null: empty value; it  has the capacity to be filled but it currently is not;
Undefined: currently has no value assigned; acts as the means to create the bucket;
*/

let emptyBucket = null;
emptyBucket = "water";
console.log(emptyBucket);

/* Numbers
- In JS numbers are literally just numbers
- add, subtract, multiply, divide
- decimals
*/

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let a = Number('123');
console.log(a);

//naN - not a number

/*
Strings
- any value in between a set of quotes or back ticks
-denoted by "  " or '  ' or `    `
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo)

let addition = 1050 + 100;
console.log(addition);
let concatenation = '1050' + '100';
console.log(concatenation);

console.log(typeof addition);
console.log(typeof concatenation);

/*
Objects
-can be denoted by {}
-store two things: key and value
-we can access these values by digging into the object with dot notation (object.value)z

*/

/*
Arrays
let list = [ 'item 1', 'item 2', 'item 3']
            [0]         [1]        [2]
-dig into array with array[0]
*/

let burritos = ['large', 4, true]
