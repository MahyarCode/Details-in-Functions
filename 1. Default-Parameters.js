'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1
  //   price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// DESC set default values for numPassengers & price
createBooking('LH123');
// DESC set values equal to defined arguments
createBooking('LH223', 2, 800);
// DESC dynamic parameter ( price = 199 * numPassengers)
createBooking('LH323', 2);
createBooking('LH423', 5);
// DESC skip a parameter
createBooking('LH523', undefined, 1000);
