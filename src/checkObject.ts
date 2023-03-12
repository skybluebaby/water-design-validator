import typeOf from './typeOf';
import merge from './utils/merge';
import composeResult from './utils/composeResult';
import { fail_code, success_code } from './constants';
import { CheckObject } from './index.d';

/**
 * 检查输入参数是否是一个对象
 * @param {object} input
 * @param {object} rules
 * @returns
 */
const checkObject: CheckObject = (input, rules) => {
  const inputType = typeOf(input);
  if (typeof rules === 'string') {
    rules = merge({ type: 'object' });
  } else {
    rules = merge(rules);
  }
  if (inputType !== 'object') {
    return composeResult(
      fail_code,
      `Expected a string but received a ${inputType}`
    );
  }
  // if (typeOf(rules.properties) === 'object') {
  //   checker(input, rules.properties, { key, errors });
  // }
  return composeResult(success_code);
};

export default checkObject;
