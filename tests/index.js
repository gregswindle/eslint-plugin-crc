'use strict';

require('babel-register');
const requireIndex = require('requireindex');
const crc = require('require-dir')('../lib', {camelcase: true});
const specs = require('require-dir')('.', {camelcase: true});
