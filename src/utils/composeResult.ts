/**
 * 合并结果
 * @param code 成功或失败的code
 * @param message 成功或失败的消息
 * @returns
 */
export default function composeResult(code: 'success' | 'fail', message = '') {
  return { code, message };
}
