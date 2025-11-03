'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// DESC Higher order function: a function that receives a function as an argument (the argument function called: "callback function")
const transformer = function (str, fn) {
  // DESC 'fn' is a callback function
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the WORST !', upperFirstWord);
transformer('Javascript is the WORST !', oneWord);
