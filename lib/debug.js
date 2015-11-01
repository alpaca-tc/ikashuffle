'use strict';

const debug = require('debug');
const env = require('../config/environment');
let enabled = false;

if (['development'].indexOf(env.NODE_ENV) > -1) {
  enabled = 'ikashuffle:*';
}

if (enabled) {
  console.log(`debug enable: ${enabled}`); // eslint-disable-line
}

module.exports = (label) => {
  return debug(`ikashuffle:${label}`);
}
