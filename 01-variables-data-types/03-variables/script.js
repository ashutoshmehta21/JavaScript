// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

// console.log(age); // Error

let age = 30;
console.log(age);

// console.log(age2); // Undefined

var age2 = 31;
console.log(age2);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// let 1name = 'Brad'; // Error
let name1 = 'Brad';
// let name+ = 'Brad'; // Error

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

// Re-assigning Variables

age = 31;

console.log(age);

let score;
score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// x = 200 // Error

// const score1; // Error

const arr = [1, 2, 3, 4, 6, 7];

arr.push(5);

console.log(arr);

const person = {
  name: 'Brad',
};

person.name = 'John';

person.email = 'brad@gmail.com';

console.log(person);

// Declare multiple value at once

let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
