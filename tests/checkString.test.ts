import { describe, expect, test } from '@jest/globals';
import checkString from '../src/checkString';
import { success_code, fail_code } from '../src/constants';

describe('checkString module', () => {
  test('is a string', () => {
    expect(checkString('a').code).toBe(success_code);
  });
  test('is not a string', () => {
    expect(checkString().code).toBe(fail_code);
  });
  test('rule is string', () => {
    expect(checkString('a', 'string').code).toBe(success_code);
  });
  test('is not required', () => {
    expect(checkString('').code).toBe(success_code);
  });
  test('is required', () => {
    expect(checkString('', { required: true }).code).toBe(fail_code);
  });
  test('has rule.format', () => {
    expect(checkString('a', { format: /b/ }).code).toBe(fail_code);
  });
  test('has rule.format', () => {
    expect(checkString('a', { format: /a/ }).code).toBe(success_code);
  });
  test('has rule.min', () => {
    expect(checkString('a', { min: 1 }).code).toBe(success_code);
  });
  test('has rule.min', () => {
    expect(checkString('a', { min: 2 }).code).toBe(fail_code);
  });
  test('has rule.max', () => {
    expect(checkString('abc', { max: 2 }).code).toBe(fail_code);
  });
  test('has rule.max', () => {
    expect(checkString('abc', { max: 3 }).code).toBe(success_code);
  });
});
