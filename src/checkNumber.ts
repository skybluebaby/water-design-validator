import typeOf from './typeOf';
import merge from './utils/merge';
import composeResult from './utils/composeResult';
import { fail_code, success_code } from './constants';
import { CheckNumber } from './index.d';

/**
 * 检查输入参数是否是一个数字
 * @param {number} input
 * @param {object} rules
 * @returns
 */
const checkNumber: CheckNumber = (input, rules) => {
  const inputType = typeOf(input);
  if (typeof rules === 'string') {
    rules = merge({ type: 'number' });
  } else {
    rules = merge(rules);
  }

  if (inputType !== 'number') {
    return composeResult(
      fail_code,
      `Expected a number but received a ${inputType}`
    );
  }

  if (
    rules.format &&
    typeOf(rules.format) === 'regexp' &&
    !rules.format.test(input)
  ) {
    return composeResult(
      fail_code,
      `This number does not pass the verification rule of ${rules.format}`
    );
  }

  if (typeof rules.min === 'number' && input < rules.min) {
    return composeResult(
      fail_code,
      `This number is expected greater than ${rules.min} but received ${input}`
    );
  }

  if (typeof rules.max === 'number' && input > rules.max) {
    return composeResult(
      fail_code,
      `This number is expected less than ${rules.max} but received ${input}`
    );
  }

  return composeResult(success_code);
};

export default checkNumber;
