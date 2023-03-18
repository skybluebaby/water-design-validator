/**
 * 校验数据类型
 * @param {any} input 输入
 * @returns {string}
 * @member 简单数据类型 string, number, boolean, undefined, null, bigint
 * @member 复杂数据类型 function, object, symbol, set, map, regexp, date
 */
const typeOf = (input?: any): string => {
  const typeStr = Object.prototype.toString.call(input).toLowerCase();
  return typeStr.slice(8, -1);
};

export default typeOf;
