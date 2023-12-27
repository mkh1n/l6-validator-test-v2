import StringSchema from './StringSchema.js';
import ObjectSchema from './ObjectSchema.js';
import FunctionSchema from './FunctionSchema.js';

export default class Validator {
  constructor() {
    this.rules = [];
  }

  string() {
    return new StringSchema();
  }

  object() {
    return new ObjectSchema();
  }

  function() {
    return new FunctionSchema();
  }
}
