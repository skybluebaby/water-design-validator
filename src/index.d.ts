export type ReturnCode = {
  code: 'success' | 'fail';
  message: string;
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
