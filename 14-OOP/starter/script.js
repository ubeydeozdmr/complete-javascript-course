'use strict';
/*
const date = new Date();

// ! //////////////////////////////////////////
// ! Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(date.getFullYear() - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// ? 1. New {} is created
// ? 2. function is called, this = {}
// ? 3. linked to prototype
// ? 4. function automaricly return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// ! //////////////////////////////////////////
// ! Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(date.getFullYear() - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// ! //////////////////////////////////////////
// ! Prototypal Inheritance on Built-In Objects

console.log(jonas);
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.dir(jonas.constructor);
console.dir(jonas.constructor.constructor);
console.dir(jonas.constructor.constructor.constructor);

console.dir(Person.prototype.constructor);
// Point backs to Person
// Prototype and constructor works antagonist

const arr = [3, 6, 6, 5, 6, 9, 9]; // * new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
// * //////////////////////////////////////////
// * Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
