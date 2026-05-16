// Console Methods in JavaScript

// Get all console methods list
console.log(Object.getOwnPropertyNames(console));

// 1. console.log()
// Used to print output

console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

// 2. Variables with console.log()

// Store value in variable
const x = 100;

// Print variable value
console.log(x);

// 3. console.error()
// Used to show error message

console.error('Alert');

// 4. console.warn()
// Used to show warning message

console.warn('Warning');

// 5. console.table()
// Display data in table format

console.table({
  name: 'Brad',
  email: 'brad@gmail.com',
});

// 6. console.group()
// Create grouped console output

console.group('Simple');

// Print variable inside group
console.log(x);

// Show error inside group
console.error('Alert');

// Show warning inside group
console.warn('Warning');

// End console group
console.groupEnd();

// Console is an object

const style = 'padding: 10px; background-color: white; color: green';

console.log('%c Hello', style);
