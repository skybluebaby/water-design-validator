import { describe, expect, test } from '@jest/globals';
import checkString from '../src/checkString';

describe('checkString module', () => {
  test('is a string', () => {
    expect(checkString('a').passed).toBe(true);
  });
  test('is not a string', () => {
    expect(checkString().passed).toBe(false);
  });
  test('rule is string', () => {
    expect(checkString('a', 'string').passed).toBe(true);
  });
  test('is not required', () => {
    expect(checkString('').passed).toBe(true);
  });
  test('is required', () => {
    expect(checkString('', { required: true }).passed).toBe(false);
  });
  test('has rule.format', () => {
    expect(checkString('a', { format: /b/ }).passed).toBe(false);
  });
  test('has rule.format', () => {
    expect(checkString('a', { format: /a/ }).passed).toBe(true);
  });
  test('has rule.min', () => {
    expect(checkString('a', { min: 1 }).passed).toBe(true);
  });
  test('has rule.min', () => {
    expect(checkString('a', { min: 2 }).passed).toBe(false);
  });
  test('has rule.max', () => {
    expect(checkString('abc', { max: 2 }).passed).toBe(false);
  });
  test('has rule.max', () => {
    expect(checkString('abc', { max: 3 }).passed).toBe(true);
  });
});
