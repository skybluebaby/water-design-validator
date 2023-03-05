import { success_code, fail_code } from '../constants';

const passedRes = {
  [success_code]: true,
  [fail_code]: false,
};

/**
 * 合并结果
 * @param code 成功或失败的code
 * @param message 成功或失败的消息
 * @returns
 */
export default function composeResult(code: 'success' | 'fail', message = '') {
  return { code, message, passed: passedRes[code] };
}
