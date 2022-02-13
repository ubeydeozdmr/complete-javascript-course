'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // Doesn't work
// const private = 534; // Doesn't work
// const if = 23; // Doesn't work

function logger() {
    console.log('My name is Ubeyde');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(2002);

// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(2002);

console.log(age1, age2);

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2002, "Ubeyde"));
console.log(yearsUntilRetirement(2009, "Talha"));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (year) {
    return 2022 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2002, 'Ubeyde'));
console.log(yearsUntilRetirement(2009, 'Talha'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (p1, p2, p3) => (p1 + p2 + p3) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log(`Draw (${avgDolphins} vs ${avgKoalas})`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);
checkWinner(100, 200);
checkWinner(123, 122);

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const yrs = new Array(1991, 1984, 2008, 2020);
console.log(yrs);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; // It causes an error

const firstName = 'Ubeyde';
const ubeyde = [firstName, 'Emir', 'Ozdemir', 2022 - 2002, 'Student', friends];
console.log(ubeyde);
console.log(ubeyde.length);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // Last element
console.log(friends);
console.log(newLength);

friends.unshift('John'); // First element
console.log(friends);

//Remove elements
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
friends.push(23);

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23)); // 23 -> true ; '23' -> false ; because of coercion

if (friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}

let tip, percentTip, total;
function calcTip(bill) {
    (bill >= 50 && bill <= 300) ? percentTip = 15 : percentTip = 20;
    tip = bill * (percentTip / 100);
    total = bill + tip;
    console.log(`Bill: ${bill}, Tip: ${tip}, Total: ${total}`)
}

const bills = [calcTip(125), calcTip(555), calcTip(44)];

const ubeyde = {
    firstName: 'Ubeyde',
    lastName: 'Ozdemir',
    age: 2022 - 2002,
    job: 'Student',
    friends: ['Michael', 'Steven', 'Peter']
};

console.log(ubeyde);

console.log(ubeyde.lastName);
console.log(ubeyde['lastName']);

const nameKey = 'Name';
console.log(ubeyde['first' + nameKey]);
console.log(ubeyde['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Ubeyde? Choose between firstName, lastName, age, job and friends');

if (ubeyde[interestedIn]) {
    console.log(ubeyde[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

ubeyde.location = 'Turkey';
ubeyde['twitter'] = '@ubeydeozdmr';
console.log(ubeyde);

// Challenge
// Jonas has 3 friends and his best friend is called Michael

const jonas = {
    firstName: 'Jonas',
    friends: ['Michael', 'Steven', 'Peter']
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`);

const ubeyde = {
    firstName: 'Ubeyde',
    lastName: 'Ozdemir',
    birthYear: 2002,
    job: 'Student',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: false,
    // calcAge: function (birthYear) {
    //     console.log(this); // this automaticly detects ubeyde object.
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    }
};

console.log(ubeyde.calcAge());
console.log(ubeyde.age);
console.log(ubeyde.age);
console.log(ubeyde.age);

function getSummary() {
    const birthYear = 1991;
    const age = 2022 - birthYear;
    const job = 'teacher'
    const hasDriversLicense = true;
    let toBe;
    hasDriversLicense ? toBe = 'a' : toBe = 'no';
    return `Jonas is a ${age} years old ${job} and he has ${toBe} driver's license.`;
}

console.log(getSummary());

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

// function calcBMI(mass, height) {
//     const BMI = mass / height ** 2;
//     return BMI;
// }

// const markBMI = calcBMI(mark.mass, mark.height);
// const johnBMI = calcBMI(john.mass, john.height);
// console.log(markBMI, johnBMI);

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (markBMI < johnBMI) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is lower than ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is equals to ${john.fullName}'s (${john.bmi})!`);
}

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2022 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1971, 1991, 2002, 2009];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'number') continue;
    console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2022 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`FOR: Lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/