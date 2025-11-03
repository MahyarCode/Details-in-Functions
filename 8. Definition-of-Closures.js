'use strict';

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
booker();
booker();
booker();
booker();

// NOTE a closure makes a function remember all the variables that existed at the function's birthplace. So, it carries all the variables from the execution context that popped off from the callstack (it means the secureBooking() ends after we called it.)

// DESC a function that always has access to the variable environment of the execution context in which the function was created.

// NOTE in above example: booker() function was created, so, it was born in the execution context of secureBooking(). Therefore, booker gets access to the 'passengerCount = 0' variable environment.

/* NOTE Closure definitions

DESC Closure: Variable Environment attached to the function, exactly as it was at the time and place the function was created.
/////
DESC Formal definition of Closure: a closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.
/////
DESC Less Formal definition of Closure: a closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope (even if that outer scope is gone), which preserves the scope chain throughout time.
/////
DESC More Less Formal definition of Closure: a closure makes sure that a function doesn't lose connection to variables that existed at the function's birth place.
/////
DESC Much Less Formal definition of Closure: a closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created. So, when the variable can't be found in the function scope, javascript will look into the backpack and take the missing variable from there.
/////

IT IS JUST AN INTERNAL PROPERTY OF A FUNCTION
WE DON'T HAVE TO MANUALLY CREATE CLOSURES. THIS IS A JAVASCRIPT FEATURE THAT HAPPENS AUTOMATICALLY. WE CAN'T EVEN ACCESS CLOSED-OVER VARIABLES EXPLICITY. A CLOSURE IS NOT A TANGIBLE JAVASCRIPT OBJECT !!!!! 
WE CAN ONLY OBSERVE IT HAPPENS...
*/

console.dir(booker);
