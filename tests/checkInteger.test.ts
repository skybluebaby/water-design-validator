import { describe, expect, test } from '@jest/globals';
import { checkInteger } from '../src';

describe('checkInteger module', () => {
  test('input undefined', () => {
    expect(checkInteger().passed).toBe(false);
  });
  test('input is string', () => {
    expect(checkInteger('a').passed).toBe(false);
  });
  test('rule is undefined', () => {
    expect(checkInteger(1).passed).toBe(true);
  });
  test('rule is undefined', () => {
    expect(checkInteger(1.1).passed).toBe(false);
  });
  test('rule is string', () => {
    expect(checkInteger(1, 'integer').passed).toBe(true);
  });
  test('rule is string', () => {
    expect(checkInteger(1.1, 'integer').passed).toBe(false);
  });
  test('rule is object', () => {
    expect(checkInteger(1, { type: 'integer' }).passed).toBe(true);
  });
  test('rule is object', () => {
    expect(checkInteger(1.1, { type: 'integer' }).passed).toBe(false);
  });
  test('rule.format=/b/', () => {
    expect(checkInteger(1, { format: /b/ }).passed).toBe(false);
  });
  test('rule.format=/[1]/', () => {
    expect(checkInteger(1, { format: /[1]/ }).passed).toBe(true);
  });
  test('rule.min=1', () => {
    expect(checkInteger(1, { min: 1 }).passed).toBe(true);
  });
  test('rule.min=2', () => {
    expect(checkInteger(1, { min: 2 }).passed).toBe(false);
  });
  test('rule.max=2', () => {
    expect(checkInteger(3, { max: 2 }).passed).toBe(false);
  });
  test('rule.max=3', () => {
    expect(checkInteger(3, { max: 3 }).passed).toBe(true);
  });
});
