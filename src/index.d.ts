export interface ReturnCode {
  code: 'success' | 'fail';
  message: string;
  passed: boolean;
}

export interface StringRules {
  type?: 'string';
  required?: boolean;
  format?: RegExp;
  min?: number;
  max?: number;
}
export type CheckString = (
  input?: any,
  rules?: StringRules | 'string'
) => ReturnCode;
declare const checkString: CheckString;

export interface NumberRules {
  type?: 'number';
  format?: RegExp;
  min?: number;
  max?: number;
}
export type CheckNumber = (
  input?: any,
  rules?: NumberRules | 'number'
) => ReturnCode;
declare const checkNumber: CheckNumber;

interface IntegerRules extends Omit<NumberRules, 'type'> {
  type?: 'integer';
}
export type CheckInteger = (
  input?: any,
  rules?: IntegerRules | 'integer'
) => ReturnCode;
declare const checkInteger: CheckInteger;

interface IdRules {
  type?: 'id';
  idType?: 'string' | 'number';
}
export type CheckId = (input?: any, rules?: IdRules | 'id') => ReturnCode;
declare const checkId: CheckId;

interface UrlRules extends Omit<StringRules, 'type'> {
  type?: 'url';
}
export type CheckUrl = (input?: any, rules?: UrlRules | 'url') => ReturnCode;
declare const checkUrl: CheckUrl;

interface ObjectRules {
  type?: 'object';
}
export type CheckObject = (
  input?: any,
  rules?: ObjectRules | 'object'
) => ReturnCode;
declare const checkObject: CheckObject;

interface ArrayRules {
  type?: 'array';
  min?: number;
  max?: number;
}
export type CheckArray = (
  input?: any,
  rules?: ArrayRules | 'array'
) => ReturnCode;
declare const checkArray: CheckArray;
