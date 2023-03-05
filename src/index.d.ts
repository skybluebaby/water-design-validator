export type ReturnCode = {
  code: 'success' | 'fail';
  message: string;
  passed: boolean;
};

type StringRule = {
  type?: 'string';
  required?: boolean;
  format?: RegExp;
  min?: number;
  max?: number;
};
export type CheckString = (
  input?: any,
  rule?: StringRule | 'string'
) => ReturnCode;
declare const checkString: CheckString;

type NumberRule = {
  type?: 'number';
  format?: RegExp;
  min?: number;
  max?: number;
};
export type CheckNumber = (
  input?: any,
  rule?: NumberRule | 'number'
) => ReturnCode;
declare const checkNumber: CheckNumber;
