import typeOf from './typeOf';
import merge from './utils/merge';
import composeResult from './utils/composeResult';
import { fail_code, success_code } from './constants';
import { CheckObject } from './index.d';

/**
 * 检查输入参数是否是一个纯正的对象
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
      `Expected a plain object but received a ${inputType}`
    );
  }
  return composeResult(success_code);
};

export default checkObject;
