console.log("Script is running");
// Declaring variables and assigning values

// 'const' is declaration keyword for a variable that cannot be reassigned (constant)
const firstName = "Ben";

// 'let' is declaration keyword for a variable that can be reassigned
let age1 = 24;
let daysOld = age1 * 365;
// 'var' is declaration keyword for a variable that can be reassigned (similar to let)
var city = "Birmingham";

console.log(firstName); // expected to print "Ben"
console.log(daysOld); // expected to print 24 * 365

const daysInAYear = 365; // thisIsInCamelCase
let feedback = "This is some feedback";

feedback = "This is some different feedback";

// Primitive Data Types in JS

// String
("string");

// Number
12;
12.99;

// Boolean
true;
false;

// Null and Undefined
null; // the absence of a value
undefined; // a value that was never defined, or was defined and taken away

// BigInt
12345678901234567890n;

// Symbol
("unique");

// Practice assigning these values to variables
let isOnline = true; // boolean
const planets = 8; // number
let slogan = "Here is the slogan"; // string
let sleep = null; // null
let data; // undefined

sleep = 8;
data = "some data";

// Two slashes = Comments that ignored by the computer

// Age in years
let age2 = 24;

// Variable names = Identifiers

// 'prompt()' is a function that prompts the user to enter a value
let first = prompt("What's your first name?");
let last = prompt("What's your last name?");
let age = prompt("What's your age?");

// Log the output to see their values
console.log(first);
console.log(last);

// When 'adding' strings, the term is called concatenation, ex: "Ben" + "Bryant"
// let fullName = first + " " + last;

// String Interpolation, enables placeholders => ${}
let fullName = `${first} ${last} is ${age} years old`;

console.log("`${first} ${last} is ${age} years old`");
console.log(fullName);

// Operators

// Arithmetic Operators

1 + 1 // expect 2, because of addition
1 - 1 // expect 0, because of subtraction
2 * 2 // expect 4, because of multiplication
10 / 2 // expect 5, because of division
11 % 2 // expect 1, because of division remainder (called the modulus symbol)
2 ** 3 // expect 8, because of exponentiation

// Assignment Operators

let number = 1;
number += 2; // 3
number -= 2; // 1
number *= 2; // 2
number /= 2; // 1
number %= 2; // 1
number **= 2; // 1

console.log(number);

console.log("Script is done");

