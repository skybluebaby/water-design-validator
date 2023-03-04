import typeOf from './typeOf';
import merge from './utils/merge';
import composeResult from './utils/composeResult';
import { success_code, fail_code } from './constants';
import { CheckString } from './index.d';

const default_string_options = {
  required: false,
};

/**
 * 检查输入参数是否为字符串
 * @param {string} input
 * @param {object} rules
 * @returns
 */
const checkString: CheckString = (input, rules) => {
  const inputType = typeOf(input);
  if (typeof rules === 'string') {
    rules = merge({ type: 'string' }, default_string_options);
  } else {
    rules = merge(rules, default_string_options);
  }

  if (inputType !== 'string') {
    return composeResult(
      fail_code,
      `Expected a string but received a ${inputType}`
    );
  }

  if (rules.required && input === '') {
    return composeResult(fail_code, `This ${rules.type} is required`);
  }

  if (
    rules.format &&
    typeOf(rules.format) === 'regexp' &&
    !rules.format.test(input)
  ) {
    return composeResult(
      fail_code,
      `This string does not pass the verification rule of ${rules.format}`
    );
  }

  if (typeof rules.min === 'number' && input.length < rules.min) {
    return composeResult(
      fail_code,
      `This string length is expected greater than ${rules.min} but received ${input.length}`
    );
  }

  if (typeof rules.max === 'number' && input.length > rules.max) {
    return composeResult(
      fail_code,
      `This string length is expected less than ${rules.max} but received ${input.length}`
    );
  }

  return composeResult(success_code);
};

export default checkString;
