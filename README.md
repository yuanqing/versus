# versus.js [![npm Version](http://img.shields.io/npm/v/versus.svg?style=flat)](https://www.npmjs.org/package/versus) [![Build Status](https://img.shields.io/travis/yuanqing/versus.svg?style=flat)](https://travis-ci.org/yuanqing/versus) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/versus.svg?style=flat)](https://coveralls.io/r/yuanqing/versus)

> Compare two variables with the comparison operator specified as a string.

## Usage

```js
versus(1, '==',  2); //=> false
versus(1, '===', 2); //=> false
versus(1, '!=',  2); //=> true
versus(1, '!==', 2); //=> true
versus(1, '<',   2); //=> true
versus(1, '>',   2); //=> false
versus(1, '<=',  2); //=> true
versus(1, '>=',  2); //=> false
```

This is [just a silly-simple switch case](https://github.com/yuanqing/versus/blob/master/index.js) abstracted into a reusable module.

## API

### versus(a, op, b)

Returns a boolean, the result of comparing `a` and `b` using the comparison operator `op` specified as a string. Throws an error if `op` is not a [valid comparison operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators).

- `a`, `b` &mdash; The two variables to be compared.
- `op` &mdash; One of `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, or `>=`.

## Installation

Install via [npm](https://www.npmjs.org/):

```bash
$ npm i --save versus
```

## Changelog

- 0.1.0
  - Initial release

## License

[MIT license](https://github.com/yuanqing/versus/blob/master/LICENSE)
