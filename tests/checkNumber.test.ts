import { describe, expect, test } from '@jest/globals';
import checkNumber from '../src/checkNumber';

describe('checkNumber module', () => {
  test('undefined is a number', () => {
    expect(checkNumber().passed).toBe(false);
  });
  test('string is a number', () => {
    expect(checkNumber('a').passed).toBe(false);
  });
  test('rule is string', () => {
    expect(checkNumber(1, 'number').passed).toBe(true);
  });
  test('is a number', () => {
    expect(checkNumber(1).passed).toBe(true);
  });
  test('has rule.format', () => {
    expect(checkNumber(1, { format: /b/ }).passed).toBe(false);
  });
  test('has rule.format', () => {
    expect(checkNumber(1, { format: /[1]/ }).passed).toBe(true);
  });
  test('has rule.min', () => {
    expect(checkNumber(1, { min: 1 }).passed).toBe(true);
  });
  test('has rule.min', () => {
    expect(checkNumber(1, { min: 2 }).passed).toBe(false);
  });
  test('has rule.max', () => {
    expect(checkNumber(3, { max: 2 }).passed).toBe(false);
  });
  test('has rule.max', () => {
    expect(checkNumber(3, { max: 3 }).passed).toBe(true);
  });
});
