import merge from './utils/merge';
import composeResult from './utils/composeResult';
import checkNumber from './checkNumber';
import { success_code, fail_code } from './constants';
import { CheckInteger, NumberRules } from './index.d';

/**
 * 检查输入参数是否是一个整型数字
 * @param {number} input
 * @param {object} rules
 * @returns
 */
const checkInteger: CheckInteger = (input, rules) => {
  if (typeof rules === 'string') {
    rules = merge({ type: 'integer' });
  } else {
    rules = merge(rules);
  }
  const result = checkNumber(input, rules as NumberRules);
  if (result.code === success_code && !Number.isInteger(input)) {
    return composeResult(fail_code, 'The number is expected an integer');
  }
  return result;
};

export default checkInteger;
