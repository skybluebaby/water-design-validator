import { web_url_reg } from './constants';
import merge from './utils/merge';
import checkString from './checkString';
import { CheckUrl, StringRules } from './index.d';

const default_url_option = {
  format: web_url_reg,
  required: true,
};

/**
 * 检查输入参数是否是一个url
 * @param {string} input
 * @param {object} rules
 * @returns
 */
const checkUrl: CheckUrl = (input, rules) => {
  if (typeof rules === 'string') {
    rules = merge({ type: 'url' }, default_url_option);
  } else {
    rules = merge(rules, default_url_option);
  }

  return checkString(input, rules as StringRules);
};

export default checkUrl;
