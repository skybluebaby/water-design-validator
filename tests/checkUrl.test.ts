import { describe, expect, test } from '@jest/globals';
import checkUrl from '../src/checkUrl';

describe('checkUrl module', () => {
  test('rule is undefined', () => {
    expect(checkUrl('http://www.baidu.com').passed).toBe(true);
  });
  test('rule is url', () => {
    expect(checkUrl('http://www.baidu.com', 'url').passed).toBe(true);
  });
  test('rule is object', () => {
    expect(checkUrl('http://www.baidu.com', { type: 'url' }).passed).toBe(true);
  });
  test('input is string', () => {
    expect(checkUrl('13456', { type: 'url' }).passed).toBe(false);
  });
});
