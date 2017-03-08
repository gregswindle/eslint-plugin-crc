'use strict';

const requireDir = require('require-dir');
const _ = require('lodash');
const libCrc = requireDir('.', {
  recurse: true,
  camelcase: true
});

const IdentifierCollections = libCrc.identifierCollection;

class CrcModelFormatter {
  constructor(template) {
    this.template = template || null;
  }

  format(crcModels) {
    let crcModelTemplate = _.template(this.template);
    return crcModelTemplate(crcModels);
  }
}

module.exports = CrcModelFormatter;
