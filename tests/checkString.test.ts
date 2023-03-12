import { describe, expect, test } from '@jest/globals';
import { checkString } from '../src';

describe('checkString module', () => {
  test('input undefined', () => {
    expect(checkString().passed).toBe(false);
  });
  test('input is string', () => {
    expect(checkString('a').passed).toBe(true);
  });
  test('rule is string', () => {
    expect(checkString('a', 'string').passed).toBe(true);
  });
  test('rule is object', () => {
    expect(checkString('a', { type: 'string' }).passed).toBe(true);
  });
  test('is not required', () => {
    expect(checkString('').passed).toBe(true);
  });
  test('rule.required=true', () => {
    expect(checkString('', { required: true }).passed).toBe(false);
  });
  test('rule.required=true', () => {
    expect(checkString('1', { required: true }).passed).toBe(true);
  });
  test('rule.format=/b/', () => {
    expect(checkString('a', { format: /b/ }).passed).toBe(false);
  });
  test('rule.format=/a/', () => {
    expect(checkString('a', { format: /a/ }).passed).toBe(true);
  });
  test('rule.min=1', () => {
    expect(checkString('a', { min: 1 }).passed).toBe(true);
  });
  test('rule.min=2', () => {
    expect(checkString('a', { min: 2 }).passed).toBe(false);
  });
  test('rule.max=2', () => {
    expect(checkString('abc', { max: 2 }).passed).toBe(false);
  });
  test('rule.max=3', () => {
    expect(checkString('abc', { max: 3 }).passed).toBe(true);
  });
});
