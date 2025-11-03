'use strict';
/* 
NOTE 
IIFE (Immediately Invoked Function Expression)
functions that we only need them to execute ONCE!!!!
*/

const runOnce = function () {
  console.log('this will never run again');
};
runOnce();
// OR
(function () {
  console.log('this will never run again, too.');
})();
// DESC the structure: (function expression)()

(() => console.log('this will ALSO never run again'))();
//DESC the structure: (arrow function)()
