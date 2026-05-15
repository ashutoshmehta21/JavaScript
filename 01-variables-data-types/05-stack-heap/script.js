// Values are stored on the stack

const name = 'John';
console.log(name);

let newName = name;
newName = 'Johnathan';

console.log(name, newName);

// Reference values are stored on the heap

const person = {
  name: 'Brad',
  age: 40,
};

console.log(person);

let newperson = person;
newperson.name = 'Bradley';

console.log(newperson);
