/*jshint esversion: 6 */
'use strict';
module.exports = function() {
  let secretNumber = Math.floor(Math.random() * (1000001));
  return function() {
    return secretNumber;
  };
};