export default class FunctionSchema {
  constructor(rules = [], context = {}, value = null, args = []) {
    this.rules = [...rules, (el) => typeof el === 'function'];
    this.context = context;
    this.value = value;
    this.args = args;
  }

  isValid(func) {
    if (this.value) {
      return func.call(this.context, ...this.args) === this.value;
    }
    return this.rules.every((rule) => rule(func) === true);
  }

  callWith(context) {
    return new FunctionSchema(this.rules, context, this.value, this.args);
  }

  expect(value) {
    return new FunctionSchema(this.rules, this.context, value, this.args);
  }

  arguments(...args) {
    return new FunctionSchema(this.rules, this.context, this.value, args);
  }
}
