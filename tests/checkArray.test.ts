import { describe, expect, test } from '@jest/globals';
import { checkArray } from '../src';

describe('checkArray module', () => {
  test('rules is undefined', () => {
    expect(checkArray([]).passed).toBe(true);
  });
  test('rules is undefined', () => {
    expect(checkArray('a').passed).toBe(false);
  });
  test('rules is array', () => {
    expect(checkArray([], 'array').passed).toBe(true);
  });
  test('rules is array', () => {
    expect(checkArray('a', 'array').passed).toBe(false);
  });
  test('rules is object', () => {
    expect(checkArray([], { type: 'array' }).passed).toBe(true);
  });
  test('rules is object', () => {
    expect(checkArray('a', { type: 'array' }).passed).toBe(false);
  });
  test('rules.min=1', () => {
    expect(checkArray([1], { min: 1 }).passed).toBe(true);
  });
  test('rules.min=2', () => {
    expect(checkArray([1], { min: 2 }).passed).toBe(false);
  });
  test('rules.max=2', () => {
    expect(checkArray([1, 2, 3], { max: 2 }).passed).toBe(false);
  });
  test('rules.max=3', () => {
    expect(checkArray([1, 2, 3], { max: 3 }).passed).toBe(true);
  });
});
