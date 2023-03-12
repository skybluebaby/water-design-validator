import { describe, expect, test } from '@jest/globals';
import { checkUrl } from '../src';

describe('checkUrl module', () => {
  test('input undefined', () => {
    expect(checkUrl().passed).toBe(false);
  });
  test('rule is undefined', () => {
    expect(checkUrl('http://www.baidu.com').passed).toBe(true);
  });
  test('rule is undefined', () => {
    expect(checkUrl('www.baidu.com').passed).toBe(false);
  });
  test('rule is string', () => {
    expect(checkUrl('http://www.baidu.com', 'url').passed).toBe(true);
  });
  test('rule is string', () => {
    expect(checkUrl('baidu.com', 'url').passed).toBe(false);
  });
  test('rule is object', () => {
    expect(checkUrl('http://www.baidu.com', { type: 'url' }).passed).toBe(true);
  });
  test('rule is object', () => {
    expect(checkUrl('www.baidu.com', { type: 'url' }).passed).toBe(false);
  });
});
