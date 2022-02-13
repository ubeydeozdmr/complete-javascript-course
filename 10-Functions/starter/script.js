'use strict';

/*
const bookings = new Array();

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  * ES5
  //   numPassengers ||= 1;
  //   price ||= 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const ubeyde = {
  name: 'Ubeyde Emir Özdemir',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  passenger.passport === 24739479284
    ? alert('Checked in')
    : alert('Wrong passport!');
};

// checkIn(flight, ubeyde);
// console.log(flight, ubeyde);

* Is the same as doing
// const flightNum = flight;
// const passenger = ubeyde;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(ubeyde);
checkIn(flight, ubeyde);

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// ? Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', oneWord);
transformer('Javascript is the best', upperFirstWord);

// ? JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Ubeyde');
greeterHey('Talha');

greet('Hello')('Ubeyde');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greeterHeyArrow = greetArrow('Hey');
greeterHeyArrow('Ubeyde');
greeterHeyArrow('Talha');

greetArrow('Hello')('Ubeyde');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: new Array(),
  //   book: function(flightNum, name) {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: this.iataCode + flightNum, name });
  },
};

lufthansa.book(239, 'Ubeyde Emir Özdemir');
lufthansa.book(635, 'Talha Emre Özdemir');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: new Array(),
};

const book = lufthansa.book;

// * Does NOT work
// book(23, 'Sarah Williams');

// ? Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: new Array(),
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// ? Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// ? Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(23, 'Steven Williams');
bookLX(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 123);
bookEW23('Ubeyde Emir Özdemir');
bookEW23('Talha Emre Özdemir');

// ? With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// ? Partial applications

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // bind(addTax, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // ? Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // ? Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    switch (type) {
      case 'array':
        console.log(this.answers);
        break;
      case 'string':
        console.log(`Poll results are ${this.answers.join(', ')}`);
        break;
    }

    // if (type === 'array') {
    //   console.log(this.answers);
    // } else if (type === 'string') {
    //   console.log(`Poll results are ${this.answers.join(', ')}`);
    // }
  },
};

// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// ? IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// * ReferenceError
// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 23;
}

// * ReferenceError
// console.log(isPrivate);
console.log(notPrivate);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(secureBooking);
console.dir(booker);

// ? Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// ? Re-assigning f function
h();
f();
console.dir(f);

// ? Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
