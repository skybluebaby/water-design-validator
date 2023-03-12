import { describe, expect, test } from '@jest/globals';
import { checkObject } from '../src';

describe('checkObject module', () => {
  test('input undefined', () => {
    expect(checkObject().passed).toBe(false);
  });
  test('input is object', () => {
    expect(checkObject({}).passed).toBe(true);
  });
  test('rule is undefined', () => {
    expect(checkObject('').passed).toBe(false);
  });
  test('rule is undefined', () => {
    expect(checkObject({ name: 'zs' }).passed).toBe(true);
  });
  test('rule is string', () => {
    expect(checkObject('', 'object').passed).toBe(false);
  });
  test('rule is string', () => {
    expect(checkObject({}, 'object').passed).toBe(true);
  });
  test('rule is object', () => {
    expect(checkObject({}, { type: 'object' }).passed).toBe(true);
  });
  test('rule is object', () => {
    expect(checkObject(123, { type: 'object' }).passed).toBe(false);
  });
});
