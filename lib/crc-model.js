'use strict';

const esrefactor = require('esrefactor');
const _ = require('lodash');

var defaultOptions = {
  collaborators   : [],
  context         : null,
  references      : [],
  identifier      : null,
  responsibilities: []
};

function setNonreferenctialIdentifier(crc, context) {
  let id, firstReference;
  /* istanbul ignore else */
  if (!crc.identifier) {
    let id = _.find(crc.references, {isReference: false});
    if (!id && context) {
      firstReference = _.first(crc.references);
      id = context.identify(firstReference.start);
    }
    crc.identifier = _.isNil(id) ? firstReference : id.identifier;
  }
}

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
    setNonreferenctialIdentifier(this, opts.context);
  }
};

module.exports = CrcModel;
