'use strict';

var deepEqual = require('deep-equal');

var versus = function(a, op, b) {
  switch (op) {
  case '==':
    return deepEqual(a, b);
  case '===':
    return a === b;
  case '!=':
    return !deepEqual(a, b);
  case '!==':
    return a !== b;
  case '<':
    return a < b;
  case '>':
    return a > b;
  case '<=':
    return a <= b;
  case '>=':
    return a >= b;
  }
  throw new Error('invalid operator');
};

module.exports = versus;
