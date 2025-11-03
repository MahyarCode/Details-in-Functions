// 'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

let x = 5;

const change = function () {
  x++;
};
change();
console.log(x);

// const checkIn = function (flightNum, passenger) {
//   // DESC primitive value
//   flightNum = 'LH999';
//   // DESC non-primitive value
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// const passport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// checkIn(flight, jonas);

// // DESC primitive values passed into an argument, are just a COPY of the original value.
// console.log(flight);
// // DESC However, for non-primitives, the value passed as argument, is a reference to the value. So, the function changes the original value.
// console.log(jonas);

// passport(jonas);
// checkIn(flight, jonas);

// console.log(flight);

// console.log(jonas);
