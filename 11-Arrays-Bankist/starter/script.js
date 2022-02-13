'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // use slice() for create a copy of array
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovement = new Intl.NumberFormat(acc.locale, {
      style: 'currency',
      currency: 'USD',
    }).format(mov);

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMovement}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = acc.balance + ' €';
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + '€';

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(outcomes) + '€';

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, _, arr) => {
      // console.log(arr);
      return int >= 1; // * 0.84 has excluded
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = interest + '€';
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  // ? Display movements
  displayMovements(acc.movements);

  // ? Display balance
  calcDisplayBalance(acc);

  // ? Display summary
  calcDisplaySummary(acc);
};

// ! Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // ? Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // ? Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // ? Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // ? Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // ? Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // ? Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // ? Add movement
    currentAccount.movements.push(amount);

    // ? Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // ? Delete account
    accounts.splice(index, 1);

    // ? Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(movements); // !!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(deposits);

const depositsFor = new Array();
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i + 1}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
// console.log(balance2);

// ? Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);

const eurToUsd = 1.1;
// console.log(movements);

// ? PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(i, arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

/*
console.log(movements);

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
// console.log(movementsUSD);

const movementsUSDfor = new Array();
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDarrow);

const movementsDescriptions = movements.map(
  (m, i) =>
    `Movement ${i + 1}: You ${m > 0 ? 'deposited' : 'withdrew'} ${Math.abs(m)}`

  // if (mov > 0) return `Movement ${i + 1}: You deposited ${mov}`;
  // else return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
);
console.log(movementsDescriptions);
*/
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = [...dogsJulia].slice(1, -2);
  console.log(dogsJuliaCorrected);
  const dogs = [...dogsJuliaCorrected, ...dogsKate];
  console.log(dogs);
  dogs.forEach(function (year, i) {
    year >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${year} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  // console.log(humanAges);

  const adults = humanAges.filter(age => age >= 18);
  // console.log(adults);

  // const averageOld = adults.reduce((acc, age) => (acc += age), 0) / adults.length;
  // console.log(averageOld);

  const average = adults.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );
  // console.log(average)

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

const calcAverageHumanAgeRewrote = ages => {
  const humanAges = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length);
  return humanAges;
};

// ? FINAL SECTION
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// ? 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// ? 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// ? 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// ? 4.
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// ? 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// ? 6.
// current > recommended * 0.9 && current < recommended * 1.1;
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(checkEatingOkay);

// ? 7.
console.log(dogs.filter(checkEatingOkay));

// ? 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

/*
const avg1Rewrote = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2Rewrote = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1Rewrote, avg2Rewrote);

const firstWithDrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithDrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//! ///////////////////////////////////////////////
// !!! LECTURES
/*
! ARRAY FUNDAMENTALS

let arr = ['a', 'b', 'c', 'd', 'e'];

? SLICE (The original array is preserved)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

? SPLICE (The original array is mutated)
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

? REVERSE (The original array is mutated)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

? Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

? Join
console.log(letters.join(' - '));

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

? Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));
// console.log(arr[-1]); // * undefined
console.log('ubeyde'.at(0));
console.log('ubeyde'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    movement > 0
    .   ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
    : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}

console.log('--- FOREACH ---');
movements.forEach(function (movement, i) {
    movement > 0
    .   ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
    : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
});

* 0: function(200)
* 1: function(450)
* 2: function(400)
* ...

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

? Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value) {
  console.log(`${value}: ${value}`);
});

console.log(movements);

// ? EQUALITY
console.log(movements.includes(-130));

// ? SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// ? EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// ? Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); // * Depth of flat = 2

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// ? flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// ? flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// ? Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// ? Numbers
console.log(movements);

// * return < 0, A, B (keep order)
// * return > 0, B, A (switch order)

// ? Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// ? Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// ? Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// ? Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});

// ? 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// ? 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// * Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// ? 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// ? 4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'in', 'with', 'is'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/
