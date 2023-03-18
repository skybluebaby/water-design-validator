import { describe, expect, test } from '@jest/globals';
import { checkNumber } from '../src';

describe('checkNumber module', () => {
  test('input undefined', () => {
    expect(checkNumber().passed).toBe(false);
  });
  test('input is number', () => {
    expect(checkNumber(1.1).passed).toBe(true);
  });
  test('rules is undefined', () => {
    expect(checkNumber(1).passed).toBe(true);
  });
  test('rules is undefined', () => {
    expect(checkNumber('1').passed).toBe(false);
  });
  test('rules is string', () => {
    expect(checkNumber(1, 'number').passed).toBe(true);
  });
  test('rules is string', () => {
    expect(checkNumber('1', 'number').passed).toBe(false);
  });
  test('rules is object', () => {
    expect(checkNumber(1, { type: 'number' }).passed).toBe(true);
  });
  test('rules is object', () => {
    expect(checkNumber('1', { type: 'number' }).passed).toBe(false);
  });
  test('rules.format=/b/', () => {
    expect(checkNumber(1, { format: /b/ }).passed).toBe(false);
  });
  test('rules.format=/[1]/', () => {
    expect(checkNumber(1, { format: /[1]/ }).passed).toBe(true);
  });
  test('rules.min=1', () => {
    expect(checkNumber(1, { min: 1 }).passed).toBe(true);
  });
  test('rules.min=2', () => {
    expect(checkNumber(1, { min: 2 }).passed).toBe(false);
  });
  test('rules.max=2', () => {
    expect(checkNumber(3, { max: 2 }).passed).toBe(false);
  });
  test('rules.max=3', () => {
    expect(checkNumber(3, { max: 3 }).passed).toBe(true);
  });
});
