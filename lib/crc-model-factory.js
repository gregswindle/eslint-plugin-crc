'use strict';

const _ = require('lodash');
const CrcModel = require('./crc-model');

class CrcModelVisitor {
  static isDeclaration(node) {
    let declarators = [
      'FunctionDeclaration',
      //'FunctionExpression',
      //'ArrowFunctionExpression',
      'ClassDeclaration',
      'ClassExpression',
      'VariableDeclaration',
      'VariableDeclarator'
    ];
    return _.includes(declarators, node.type)
  }

  static getCrcModelOptions(node, parent) {
    let clonedNode, options;
    if (_.has(node, 'id') && !_.isNil(node.id.name)) {
      clonedNode = _.clone(node);
      options = {
        declaration: _.pick(clonedNode, ['type', 'start', 'end', 'loc', 'range']),
        identifier: _.get(clonedNode, 'id'),
        name: _.get(clonedNode, 'id.name')
      };
    }
    return options;
  }

  static create(options, context) {
    let params, id;
    params = _.first(options);
    id = context.identify(params.identifier.start);
    params.references = id ? id.references : [];
    return new CrcModel(params.identifier.name, params);
  }

  static getModelDeclaredInRange(node, declarations, idCollection) {
    let crc, START;
    crc = null;
    START = 0;
    _.forEach(declarations, (declaration, name) => {
      let isDeclaredRange = _.inRange(node.range[START], declaration.start, declaration.end);
      if (isDeclaredRange) {
        crc = idCollection.find({
          name: name
        });
        crc.collaborators.push(node);
        //console.log(`${crc.name} collaborates with ${node.name}`);
        //return crc;
      }
    });
    return crc;
  }

  static inOwnDeclarationScope(node, idCollection) {
    let crc = idCollection.find({
      name: node.name
    });
    return crc ?
      _.inRange(node.start, crc.declaration.start, crc.declaration.end) :
      false;
  }
}

module.exports = CrcModelVisitor;
