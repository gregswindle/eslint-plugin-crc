'use strict';

const esrefactor = require('esrefactor');
const _ = require('lodash');

var defaultOptions = {
  collaborators   : [],
  context         : null,
  declaration     : null,
  identifier      : null,
  references      : [],
  responsibilities: []
};

class CrcModel {
  constructor(name, options) {
    let opts;
    if (_.isNil(name)) {
      throw new TypeError('CrcModels must have a name.');
    }
    opts                  = _.defaults(options, defaultOptions);
    this.name             = name;
    this.collaborators    = opts.collaborators;
    this.references       = opts.references;
    this.identifier       = opts.identifier;
    this.responsibilities = opts.responsibilities;
    this.declaration      = opts.declaration;
  }
};

module.exports = CrcModel;
