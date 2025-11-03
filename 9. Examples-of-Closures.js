'use strict';
// TODO Example #1
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

// assigned by g
g();
f();
console.dir(f);

// re-assigned by h
h();
f();
console.dir(f);

/* TODO Example #2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  console.log(`Will start boarding in ${wait} seconds.`);

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`there are 3 groups, each will ${perGroup} passengers`);
  }, wait * 1000);
};

boardPassengers(102, 3);
*/
