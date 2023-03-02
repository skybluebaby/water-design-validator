import { describe, expect, test } from '@jest/globals';
import { sum, getObj } from '../src/sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('sobj module', () => {
  test('test obj', () => {
    const a = {};
    expect(getObj()).toEqual(a);
  });
});
