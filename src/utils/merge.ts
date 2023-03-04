// 合并
const merge = (obj = {}, defaults?: any) => {
  for (const key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
};

export default merge;
