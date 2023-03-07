import { describe, expect, test } from '@jest/globals';
import checkInteger from '../src/checkInteger';

describe('checkInteger module', () => {
  test('undefined is an integer', () => {
    expect(checkInteger().passed).toBe(false);
  });
  test('string is an integer', () => {
    expect(checkInteger('a').passed).toBe(false);
  });
  test('rule is string', () => {
    expect(checkInteger(1, 'integer').passed).toBe(true);
  });
  test('1 is an integer', () => {
    expect(checkInteger(1).passed).toBe(true);
  });
  test('0 is an integer', () => {
    expect(checkInteger(0).passed).toBe(true);
  });
  test('0.1 is an integer', () => {
    expect(checkInteger(0.1).passed).toBe(false);
  });
  test('has rule.format', () => {
    expect(checkInteger(1, { format: /b/ }).passed).toBe(false);
  });
  test('has rule.format', () => {
    expect(checkInteger(1, { format: /[1]/ }).passed).toBe(true);
  });
  test('has rule.min', () => {
    expect(checkInteger(1, { min: 1 }).passed).toBe(true);
  });
  test('has rule.min', () => {
    expect(checkInteger(1, { min: 2 }).passed).toBe(false);
  });
  test('has rule.max', () => {
    expect(checkInteger(3, { max: 2 }).passed).toBe(false);
  });
  test('has rule.max', () => {
    expect(checkInteger(3, { max: 3 }).passed).toBe(true);
  });
});
