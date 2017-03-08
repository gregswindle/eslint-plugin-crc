'use strict';

const requireDir = require('require-dir');
const esrefactor = require('esrefactor');
const espree = require('espree');
const escope = require('escope');
const estraverse = require('estraverse');
const fs = require('fs');
const _ = require('lodash');
const libCrc = requireDir('.', {
  recurse: true,
  camelcase: true
});
const CrcModel = libCrc.crcModel;

/**
 * Checks that a given identifier node is a reference or not.
 *
 * This is used to detect the first throwable node in a `try` block.
 *
 * @param {ASTNode} node - An Identifier node to check.
 * @returns {boolean} `true` if the node is a reference.
 */

function isDeclaration(node) {
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

function getCrcModelOptions(node, parent) {
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

function createCrcModel(options, context) {
  let params, id;
  params = _.first(options);
  id = context.identify(params.identifier.start);
  params.references = id ? id.references : [];
  return new CrcModel(params.identifier.name, params);
}

class IdentifierCollection {
  constructor(code, config) {
    this.code = _.toString(code);
    this.config = config || libCrc.astConfig;
    this.ast = espree.parse(this.code, this.config);
    this.context = new esrefactor.Context(this.code);
    this.models = this.groupBy('name', isDeclaration);
    this.associateCollaborators();
  }

  associateCollaborators() {
    let START = 0,
      declarations = {};
    _.map(this.models, (model) => {
      declarations[model.name] = _.pick(model.declaration, ['start', 'end']);
    });
    let getModelDeclaredInRange = (node) => {
      let crc = null;
      _.forEach(declarations, (declaration, name) => {
        let isDeclaredRange = _.inRange(node.range[0], declaration.start, declaration.end);
        if (isDeclaredRange) {
          crc = this.find({name: name});
          crc.collaborators.push(node);
          console.log(`${crc.name} collaborates with ${node.name}:`, crc.collaborators);
          //return crc;
        }
      });
      return crc;
    }
    let nodes, scopeManager, currentScope, inOwnDeclarationScope;
    nodes = [];
    scopeManager = escope.analyze(this.ast);
    currentScope = scopeManager.acquire(this.ast);
    inOwnDeclarationScope = (node) => {
      let crc = this.find({
        name: node.name
      });
      if (crc) {
        return _.inRange(node.start, crc.declaration.start, crc.declaration.end);
      }
      return false;
    }
    var self = this;
    console.log(declarations);
    estraverse.traverse(this.ast, {
      enter: function(node, parent) {
        if (self.isModel(node)) {
          if (!inOwnDeclarationScope(node)) {
            getModelDeclaredInRange(node);
          }
          currentScope = scopeManager.acquire(node);
        }
      }
    });
    console.log(JSON.stringify(this.models, null, 1));
    return nodes;

    // let c = _
    //   .chain(this.models)
    //   .filter(model => !_.isEmpty(model.references))
    //   .map(model => _.flatten(model.references))
    //   .flatten()
    //   // LOOP through each model's reference and return its own, non-referential range.
    //   //
    //   // .map(reference => {
    //   //   _.forEach(declarations, (declaration, modelName) => {
    //   //     let collaborates = _.inRange(declaration.start, reference.range);
    //   //     console.log(`_.inRange(${declaration.start}, ${reference.range}): ${collaborates}`);
    //   //     if (collaborates) {
    //   //       let crc = this.find({name: modelName});
    //   //       //crc.collaborators.push(reference);
    //   //     }
    //   //   })
    //   // })
    //   .value();
    // console.log(c, declarations);
  }

  filterBy(predicate, node) {
    let nodes, scopeManager, currentScope;
    nodes = [];
    scopeManager = escope.analyze(this.ast);
    currentScope = scopeManager.acquire(this.ast);
    estraverse.traverse(this.ast, {
      enter: function(node, parent) {
        if (!_.isNil(node) && predicate(node)) {
          nodes.push(getCrcModelOptions(node, parent));
          currentScope = scopeManager.acquire(node);
        }
      }
    });
    return nodes;
  }

  find(predicate) {
    return _.find(this.models, predicate);
  }

  // TODO: This method is not yet implemented.
  // REVIEW: This smells weird here. The IdentifierCollection is becoming a factory aggregator.
  getPrototypeOf(name) {
    let prototypePredicate, protos, nodes;
    prototypePredicate = (node) => 'Identifier' === node.type && 'prototype' === node.name;
    protos = this.filterBy(prototypePredicate);
    nodes = _.filter(protos, {
      name: name
    });
    return nodes;
  }

  groupBy(property, predicate) {
    let options, models = [];
    options = _.values(_.omitBy(this.filterBy(predicate), _.isNil));
    _.chain(options)
      .groupBy(property)
      .map(opts => {
        models.push(createCrcModel(opts, this.context))
      })
      .value();
    return models;
  }

  isModel(node) {
    return !_.isNil(node) && _.has(node, 'name') && this.find({
        name: node.name
      }) ?
      true :
      false;
  }
}

module.exports = IdentifierCollection;
