'use strict';

var versus = function(a, op, b) {
  switch (op) {
  case '==':
    return a == b;
  case '===':
    return a === b;
  case '!=':
    return a != b;
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
