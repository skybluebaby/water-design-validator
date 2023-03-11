export interface ReturnCode {
  code: 'success' | 'fail';
  message: string;
  passed: boolean;
}

export interface StringRule {
  type?: 'string';
  required?: boolean;
  format?: RegExp;
  min?: number;
  max?: number;
}
export type CheckString = (
  input?: any,
  rule?: StringRule | 'string'
) => ReturnCode;
declare const checkString: CheckString;

export interface NumberRule {
  type?: 'number';
  format?: RegExp;
  min?: number;
  max?: number;
}
export type CheckNumber = (
  input?: any,
  rule?: NumberRule | 'number'
) => ReturnCode;
declare const checkNumber: CheckNumber;

interface IntegerRule extends Omit<NumberRule, 'type'> {
  type?: 'integer';
}
export type CheckInteger = (
  input?: any,
  rule?: IntegerRule | 'integer'
) => ReturnCode;
declare const checkInteger: CheckInteger;

interface IdRule {
  type?: 'id';
  idType?: 'string' | 'number';
}
export type CheckId = (input?: any, rule?: IdRule | 'id') => ReturnCode;
declare const checkId: CheckId;

interface UrlRule extends Omit<StringRule, 'type'> {
  type?: 'url';
}
export type CheckUrl = (input?: any, rule?: UrlRule | 'url') => ReturnCode;
declare const checkUrl: CheckUrl;
