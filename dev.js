// eslint-disable-next-line import/no-extraneous-dependencies
require('babel-register');
require('./src/hacks');

const m1 = require('./src/main');
const m2 = require('./src/2');
const m3 = require('./src/3');

console.log('main', m3);
m1.foo1();
m2.foo2();
