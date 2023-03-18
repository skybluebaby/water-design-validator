import { describe, expect, test } from '@jest/globals';
import { checkId } from '../src';

describe('checkId module', () => {
  test('rules is undefined', () => {
    expect(checkId(13456).passed).toBe(true);
  });
  test('rules is undefined', () => {
    expect(checkId('13456a').passed).toBe(false);
  });
  test('rules is id', () => {
    expect(checkId(13456, 'id').passed).toBe(true);
  });
  test('rules is id', () => {
    expect(checkId('13456a', 'id').passed).toBe(false);
  });
  test('rules is object', () => {
    expect(checkId(13456, { type: 'id' }).passed).toBe(true);
  });
  test('rules is object', () => {
    expect(checkId('13456a', { type: 'id' }).passed).toBe(false);
  });
  test('input is string', () => {
    expect(checkId('13456').passed).toBe(true);
  });
  test('input is string', () => {
    expect(checkId('13456', { type: 'id' }).passed).toBe(true);
  });
  test('input is not id', () => {
    expect(checkId('13456a', { type: 'id' }).passed).toBe(false);
  });
  test('input number-id but idType is string', () => {
    expect(checkId(13456, { type: 'id', idType: 'string' }).passed).toBe(false);
  });
  test('input number-id and idType is number', () => {
    expect(checkId(13456, { type: 'id', idType: 'number' }).passed).toBe(true);
  });
  test('input string-id and idType is string', () => {
    expect(checkId('13456', { type: 'id', idType: 'string' }).passed).toBe(
      true
    );
  });
  test('input string-id but idType is number', () => {
    expect(checkId('13456', { type: 'id', idType: 'number' }).passed).toBe(
      false
    );
  });
});
