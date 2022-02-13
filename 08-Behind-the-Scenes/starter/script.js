'use strict';
/*

// SCOPING

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1997 && birthYear <= 2009) {
      var genZ = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Emir';

      // Reassigning outer scope's variable
      const str = `Oh, and you're a Gen-Z, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }
    // console.log(str); // Reference error
    console.log(genZ);
    // console.log(add(2, 3)); // Reference error (Only for strict mode)
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Ubeyde';
calcAge(2002);
// console.log(age); // Reference error
// printAge(); // Reference error

// HOISTING

// Variables
console.log(me); // undefined
// console.log(job); // Reference error
// console.log(year); // Reference error

var me = 'Ubeyde';
let job = 'student';
const year = '2002';

// Functions
console.log(addDeclaration(2, 3)); // 5
// console.log(addExpression(2, 3)); // Reference error
// console.log(addExpression2(2, 3)); // Type error: addExpression2 is not a function
// console.log(addArrow(2, 3)); // Reference error
// console.log(addArrow2(2, 3)); // Type error: addArrow2 is not a function

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};
var addExpression2 = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
var addArrow2 = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // undefined
};
calcAge(2002);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); // Window
};
calcAgeArrow(2002);

const ubeyde = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
ubeyde.calcAge();

const talha = {
  year: 2009,
};

talha.calcAge = ubeyde.calcAge;
talha.calcAge();

const f = ubeyde.calcAge;
f();

var firstName = 'Talha';
var year = 2009;

const ubeyde = {
  firstName: 'Ubeyde',
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isGenZ = function () {
    //   console.log(self);
    //   // console.log(this.year >= 1997 && this.year <= 2009);
    //   console.log(self.year >= 1997 && self.year <= 2009);
    // };
    // isGenZ();

    // Solution 2
    const isGenZ = () => {
      console.log(self);
      console.log(self.year >= 1997 && self.year <= 2009);
    };
    isGenZ();
  },

  greet: () => {
    // Arrow func -> Talha, 20; expression func -> Ubeyde, 20
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
ubeyde.greet();
ubeyde.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments); // Reference error
  return a + b;
};
addArrow(2, 5, 8);

let age = 19;
let oldAge = age;
age = 20;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Ubeyde',
  age: 20,
};
const friend = me;
friend.age = 19;
console.log('Friend: ', friend);
console.log('Me: ', me);

// Primitive type
let lastName = 'Ozdmr';
let oldLastName = lastName;
lastName = 'Ozdemir';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {}; // Type error -> Assigment to constant variable

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Store object
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

// Because arrays are objects
*/
