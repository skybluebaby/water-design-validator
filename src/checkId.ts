import typeOf from './typeOf';
import merge from './utils/merge';
import composeResult from './utils/composeResult';
import { id_reg, fail_code, success_code } from './constants';
import { CheckId } from './index.d';

/**
 * 检查输入参数是否是一个id
 * @param {id} input
 * @param {object} rules
 * @returns
 */
const checkId: CheckId = (input, rules) => {
  const inputType = typeOf(input);
  if (typeof rules === 'string') {
    rules = merge({ type: 'id' });
  } else {
    rules = merge(rules);
  }
  if (!id_reg.test(input)) {
    return composeResult(fail_code, 'Expected an id type');
  }
  if (rules.idType && rules.idType === 'string' && inputType === 'number') {
    return composeResult(
      fail_code,
      'Expected a string-id but received a number-id'
    );
  }
  if (rules.idType && rules.idType === 'number' && inputType === 'string') {
    return composeResult(
      fail_code,
      'Expected a number-id but received a string-id'
    );
  }
  return composeResult(success_code);
};

export default checkId;
