'use strict';

const _ = require('lodash');
const AstNode = require('./ast-node');

class CrcModel {
  constructor(name, responsibilities, collaborators, astNode) {
    if (_.isNil(name)) {
      throw new TypeError('CrcModels must have a name.');
    }
    this.name = name;
    this.responsibilities = responsibilities || [];
    this.collaborators = collaborators|| [];
    this.astNode = astNode || new AstNode();
  }
};

module.exports = CrcModel;
