/*jshint esversion: 6 */
'use strict';
module.exports = function() {
  const SECRET_NUMBER = Math.floor(Math.random() * (1000001));
  return function() {
    return SECRET_NUMBER;
  };
};