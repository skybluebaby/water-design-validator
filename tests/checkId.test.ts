import { describe, expect, test } from '@jest/globals';
import checkId from '../src/checkId';

describe('checkId module', () => {
  test('rule is undefined', () => {
    expect(checkId(13456).passed).toBe(true);
  });
  test('rule is id', () => {
    expect(checkId(13456, 'id').passed).toBe(true);
  });
  test('rule is object', () => {
    expect(checkId(13456, { type: 'id' }).passed).toBe(true);
  });
  test('input is string', () => {
    expect(checkId('13456', { type: 'id' }).passed).toBe(true);
  });
  test('input is not id', () => {
    expect(checkId('13456a', { type: 'id' }).passed).toBe(false);
  });
  test('input id number and idType is string', () => {
    expect(checkId(13456, { type: 'id', idType: 'string' }).passed).toBe(false);
  });
  test('input id number and idType is number', () => {
    expect(checkId(13456, { type: 'id', idType: 'number' }).passed).toBe(true);
  });
  test('input id string and idType is string', () => {
    expect(checkId('13456', { type: 'id', idType: 'string' }).passed).toBe(
      true
    );
  });
  test('input id string and idType is number', () => {
    expect(checkId('13456', { type: 'id', idType: 'number' }).passed).toBe(
      false
    );
  });
});
