require('./main');

const path = require.resolve('./main');
require.cache[path].exports.foo1 = () => {
  console.log('hacked!!!');
};
