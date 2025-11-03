'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('mahyar');
greeterHey('Steven');

// DESC Unnecessary to use
greet('hello')('mahyar');

// TODO writing above function using arrow function:

// NOTE not really suggested! but just for the practice term
const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};
const greeterHeyArr = greetArr('HEEEEY');
greeterHeyArr('mahyar ');
