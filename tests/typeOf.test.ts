import { describe, expect, test } from '@jest/globals';
import { typeOf } from '../src';

describe('typeOf module', () => {
  test('typeof string', () => {
    expect(typeOf('a')).toBe('string');
  });
  test('typeof number', () => {
    expect(typeOf(1)).toBe('number');
  });
  test('typeof boolean', () => {
    expect(typeOf(true)).toBe('boolean');
  });
  test('typeof undefined', () => {
    expect(typeOf()).toBe('undefined');
  });
  test('typeof null', () => {
    expect(typeOf(null)).toBe('null');
  });
  test('typeof bigint', () => {
    expect(typeOf(10n)).toBe('bigint');
  });
  test('typeof function', () => {
    expect(typeOf(function () {})).toBe('function');
  });
  test('typeof object', () => {
    expect(typeOf({})).toBe('object');
  });
  test('typeof set', () => {
    expect(typeOf(new Set())).toBe('set');
  });
  test('typeof map', () => {
    expect(typeOf(new Map())).toBe('map');
  });
  test('typeof regexp', () => {
    expect(typeOf(/a/)).toBe('regexp');
  });
  test('typeof date', () => {
    expect(typeOf(new Date())).toBe('date');
  });
});
