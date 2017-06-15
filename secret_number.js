'use strict';
module.exports = function() {
  var secretNumber = 0;
  var randomNumber = Math.random() * (1000000);
  return function() {
    secretNumber = randomNumber;
    return secretNumber;
  };
};