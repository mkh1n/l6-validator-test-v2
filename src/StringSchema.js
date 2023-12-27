export default class StringSchema {
  constructor(rules = []) {
    this.rules = [...rules, (el) => typeof el === 'string'];
  }

  isValid(el) {
    return this.rules.every((func) => func(el) === true);
  }

  hasSpaces() {
    return new StringSchema([...this.rules, (el) => el.includes(' ')]);
  }
}
