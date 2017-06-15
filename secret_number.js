'use strict';

module.exports = function() {
  var secretNumber = 0;
  return function() {
    secretNumber = Math.random() * (1000000 - 0);
    return secretNumber;
  };
};