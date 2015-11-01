'use strict';

const _ = require('lodash');
const env = _.extend({}, process.env);

env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  _.extend(env, require(`./environments/${env.NODE_ENV}.json`));
} catch (reason) {
  process.stderr.write(`[ENV] "./environments/${env.NODE_ENV}.json" not found\n`);
} finally {
  _.defaults(env, {
    NODE_ENV: 'development',
    HOST: '127.0.0.1',
    PORT: 3001,
    TIMEOUT: 1000,
    BASE_URL: 'http://127.0.0.1:3001'
  });
}

module.exports = env;
