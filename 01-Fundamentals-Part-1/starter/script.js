/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
if (js === 'amazing') alert('JavaScript is FUN!');

console.log('Ubeyde');
console.log(23);

let firstName = "Ubeyde";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions

let ubeyde_ozdemir = "UO";
let $function = 27;

let person = "ubeyde";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

//The above is better than the below

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof true);
console.log(typeof JavaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Ubeyde');

JavaScriptIsFun = 'YES!';
console.log(typeof JavaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 19;
age = 20;

const birthYear = 2002;
// birthYear = 2001; // It causes an error

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Ozdemir';
console.log(lastName);

// Math operators
const now = 2022;
const ageUbeyde = now - 2002;
const ageTalha = now - 2009;
console.log(ageUbeyde, ageTalha);

console.log(ageUbeyde * 2, ageUbeyde / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Ubeyde';
const lastName = 'Ozdemir';
console.log(firstName + ' ' + lastName);

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comprasion operators
console.log(ageUbeyde > ageTalha); // >, <, >=, <=

console.log(ageTalha >= 18);

const isFullAge = ageTalha >= 18;

console.log(now - 1991 > now - 2018);

const now = 2022;
const ageUbeyde = now - 2002;
const ageTalha = now - 2009;

console.log(now - 2002 > now - 2009);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageUbeyde + ageTalha) / 2
console.log(ageUbeyde, ageTalha, averageAge);

// CODING CHALLENGE-1

let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

markBMI = weightMark / heightMark ** 2;
johnBMI = weightJohn / heightJohn ** 2;

console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log("Mark has a higher BMI than John");
} else if (markBMI < johnBMI) {
    console.log("Mark has a lower BMI than John");
} else {
    console.log("Mark and John have equal BMIs");
}

let markHigherBMI = markBMI > johnBMI
if (markHigherBMI) console.log(markHigherBMI);

const firstName = 'Ubeyde';
const job = 'student';
const birthYear = 2002;
const year = 2022;

const ubeyde = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(ubeyde);

const ubeydeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ubeydeNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2002;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// CODING CHALLENGE-2

let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

markBMI = weightMark / heightMark ** 2;
johnBMI = weightJohn / heightJohn ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
} else if (markBMI < johnBMI) {
    console.log(`Mark's BMI ${markBMI} is lower than John's BMI ${johnBMI}`);
} else {
    console.log(`Mark's BMI ${markBMI} is equals to John's BMI ${johnBMI}`);
}

// Type conversion
const inputYear = '2002';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Ubeyde'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 20 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ubeyde'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 20) { // 20 === 20
    console.log('Cool! 20 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 20 or 7 or 9');
}

if (favourite !== 20) console.log('Why not 20?');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

let averageDolphins = (97 + 112 + 101) / 3;
let averageKoalas = (109 + 95 + 106) / 3;
console.log('Dolphins: ', averageDolphins);
console.log('Koalas: ', averageKoalas);

if ((averageDolphins > averageKoalas) && averageDolphins >= 100) {
    console.log("Winner: Dolphins");
} else if ((averageDolphins < averageKoalas) && averageKoalas >= 100) {
    console.log("Winner: Koalas");
} else if ((averageDolphins == averageKoalas) && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log("Draw");
} else {
    console.log("No winner");
}

const day = 'Monday';

switch (day) {
    case 'Monday': // day === 'Monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
        break;
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
        break;
    case 'Sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
        break;
}

if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday') {
    //
} else if (day === 'Thursday') {
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('Record videos');
} else if (day === 'Saturday') {
    //
} else if (day === 'Sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Ubeyde'
console.log(`I'm ${2037 - 1991} years old ${me}`);

const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

let tipPercentage;
let bill = 275;
bill >= 50 && bill <= 300 ? tipPercentage = 15 : tipPercentage = 20;
let tip = bill * tipPercentage / 100;

let total = bill * (100 + tipPercentage) / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
*/