/* globals describe, it, expect */
'use strict';

var versus = require('..');

describe('versus(a, op, b)', function() {

  describe('works for valid `op`', function() {

    it('a == b', function() {
      expect(versus(1, '==', 1)).toBe(true);
      expect(versus(1, '==', 2)).toBe(false);
      expect(versus(2, '==', 1)).toBe(false);
      expect({ foo: 1 } == { foo: 1 }).toBe(false);
      expect(versus({ foo: 1 }, '==', { foo: 1 })).toBe(true);
      expect(versus({ foo: 1 }, '==', { foo: 2 })).toBe(false);
    });

    it('a === b', function() {
      expect(versus(1, '===', 1)).toBe(true);
      expect(versus(1, '===', 2)).toBe(false);
      expect(versus(2, '===', 1)).toBe(false);
      var a = { foo: 1 };
      expect(versus(a, '===', { foo: 1 })).toBe(false);
      expect(versus(a, '===', a)).toBe(true);
    });

    it('a != b', function() {
      expect(versus(1, '!=', 1)).toBe(false);
      expect(versus(1, '!=', 2)).toBe(true);
      expect(versus(2, '!=', 1)).toBe(true);
      expect({ foo: 1 } != { foo: 1 }).toBe(true);
      expect(versus({ foo: 1 }, '!=', { foo: 1 })).toBe(false);
      expect(versus({ foo: 1 }, '!=', { foo: 2 })).toBe(true);
    });

    it('a !== b', function() {
      expect(versus(1, '!==', 1)).toBe(false);
      expect(versus(1, '!==', 2)).toBe(true);
      expect(versus(2, '!==', 1)).toBe(true);
      var a = { foo: 1 };
      expect(versus(a, '!==', { foo: 1 })).toBe(true);
      expect(versus(a, '!==', a)).toBe(false);
    });

    it('a < b', function() {
      expect(versus(1, '<', 1)).toBe(false);
      expect(versus(1, '<', 2)).toBe(true);
      expect(versus(2, '<', 1)).toBe(false);
    });

    it('a > b', function() {
      expect(versus(1, '>', 1)).toBe(false);
      expect(versus(1, '>', 2)).toBe(false);
      expect(versus(2, '>', 1)).toBe(true);
    });

    it('a <= b', function() {
      expect(versus(1, '<=', 1)).toBe(true);
      expect(versus(1, '<=', 2)).toBe(true);
      expect(versus(2, '<=', 1)).toBe(false);
    });

    it('a >= b', function() {
      expect(versus(1, '>=', 1)).toBe(true);
      expect(versus(1, '>=', 2)).toBe(false);
      expect(versus(2, '>=', 1)).toBe(true);
    });

  });

  it('throws if invalid `op`', function() {
    expect(function() {
      versus(1, '=', 2);
    }).toThrow();
  });

});
