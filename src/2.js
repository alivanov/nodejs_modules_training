const methods = require('./3');

console.log('hello from 2');
console.log('3', methods);
module.exports = {
  foo2() {
    console.log('Hello from Foo!');
  },
  test2() {
    console.log(module);
  },
};
