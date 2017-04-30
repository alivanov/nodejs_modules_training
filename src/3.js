const methods = require('./2');

console.log('hello from 3');
console.log('3', methods);

setTimeout(() => {
  console.log('timeout', methods);
}, 1000);

module.exports = {
  foo3() {
    console.log('Hello from Foo!');
  },
  test3() {
    console.log(module);
  },
};
