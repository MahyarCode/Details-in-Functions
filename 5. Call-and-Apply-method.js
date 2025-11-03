'use strict';

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}`, name });
  },
};

lufthansa.book(239, 'Mahyar Code');
lufthansa.book(400, 'Jack Sparrow');
console.log(lufthansa);

// DESC now we want to apply 'book' method (defined in lufthansa) in eurowings airline.
const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// TODO how to apply the 'book' method in lufthansa in eurowings object ?

const book = lufthansa.book;

// FIXME
// book(23, 'Jennifer Anniston') for eurowings airline

// TODO fixing it using the 'call' method
book.call(eurowings, 23, 'Jennifer Anniston');
console.log(eurowings);
// DESC 'call' method: it gives the new object and set 'this' keyword to the new object.

// TODO do the same thing with 'apply' method
const flightData = [580, 'MAHYAR CODE'];
book.apply(eurowings, flightData);
// book.call(eurowings, ...flightData)
console.log(eurowings);
// DESC the 'apply' receives the array of arguments instead of receiving each of them separately.

// TODO do the same operation with 'bind' method

// book.call(lufthansa, 49, 'Jennifer Anniston');
const bookEW = book.bind(eurowings);
bookEW(26, 'Steven Willliam');
console.log(eurowings);
// DESC the 'bind' receives only the object and created a new function for that specific object. by calling it, it works for the new object.

// NOTE we can create specific functions for each airline:
// const bookEW = book.bind(eurowings); already defined
const bookLH = book.bind(lufthansa);

// NOTE and also for each flightNumber in each airline:
const bookEW23 = book.bind(eurowings, 23);
// DESC the object and the first argument of book() are already set
bookEW23('Mattew Perry'); // it now only needs the name.

// NOTE the above operation is something called: "partial application": parts of the arguments of the function are already applied.

//////////////////////////////////////

// DESC using the method to create a callback function and use it.
lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.plane++;
  console.log(this.plane);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

/////////////////////////////////////
// DESC partial application:

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// DESC since we don't have any objects to pass the 'this' keyword to it, we set the first argument to 'null'.
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + (value * 0.23)
console.log(addVAT(500));

// TODO re-writing the above example with function returns function format

const addVAT2 = rate => {
  return function (value) {
    console.log(value + rate * value);
  };
};

const add = addVAT2(0.23);
add(500);
