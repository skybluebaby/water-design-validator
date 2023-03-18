import typeOf from './typeOf';
import merge from './utils/merge';
import composeResult from './utils/composeResult';
import { fail_code, success_code } from './constants';
import { CheckArray } from './index.d';

/**
 * 检查输入参数是否是一个数组
 * @param {array} input
 * @param {object} rules
 * @returns
 */
const checkArray: CheckArray = (input, rules) => {
  const inputType = typeOf(input);
  if (typeof rules === 'string') {
    rules = merge({ type: 'array' });
  } else {
    rules = merge(rules);
  }
  if (inputType !== 'array') {
    return composeResult(
      fail_code,
      `Expected an array but received a ${inputType}`
    );
  }
  if (typeof rules.min === 'number' && input.length < rules.min) {
    return composeResult(
      fail_code,
      `This array length is expected greater than ${rules.min} but received ${input.length}`
    );
  }
  if (typeof rules.max === 'number' && input.length > rules.max) {
    return composeResult(
      fail_code,
      `This array length is expected less than ${rules.max} but received ${input.length}`
    );
  }
  return composeResult(success_code);
};

export default checkArray;
