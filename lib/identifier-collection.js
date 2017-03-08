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
const CrcModelFactory = libCrc.crcModelFactory

class IdentifierCollection {
  constructor(code, config) {
    this.code = _.toString(code);
    this.config = config || libCrc.astConfig;
    this.ast = espree.parse(this.code, this.config);
    this.context = new esrefactor.Context(this.code);
    this.models = this.groupBy('name', CrcModelFactory.isDeclaration);
    this.associateCollaborators();
  }

  associateCollaborators() {
    var declarations, nodes, scopeManager, currentScope;
    declarations = {};

    _.map(this.models, (model) => {
      declarations[model.name] = _.pick(model.declaration, ['start', 'end']);
    });
    scopeManager = escope.analyze(this.ast);
    currentScope = scopeManager.acquire(this.ast);
    estraverse.traverse(this.ast, {
      enter: (node, parent) => {
        if (CrcModel.isModel(node, this)) {
          if (!CrcModelFactory.inOwnDeclarationScope(node, this)) {
            CrcModelFactory.getModelDeclaredInRange(node, declarations, this);
          }
          currentScope = scopeManager.acquire(node);
        }
      }
    });
    //console.log(JSON.stringify(this.models, null, 1));
    return nodes;
  }

  filterBy(predicate, node) {
    let nodes, scopeManager, currentScope;
    nodes = [];
    scopeManager = escope.analyze(this.ast);
    currentScope = scopeManager.acquire(this.ast);
    estraverse.traverse(this.ast, {
      enter: (node, parent) => {
        if (!_.isNil(node) && predicate(node, this)) {
          nodes.push(CrcModelFactory.getCrcModelOptions(node, parent));
          currentScope = scopeManager.acquire(node);
        }
      }
    });
    return nodes;
  }

  find(predicate) {
    let crc = _.find(this.models, predicate);
    //console.log(crc);
    return crc;
  }

  // TODO: This method is not yet implemented.
  // REVIEW: This smells weird here. The IdentifierCollection is becoming a factory aggregator.
  getPrototypeOf(name) {
    let prototypePredicate, protos, nodes;
    prototypePredicate = (node) => 'Identifier' === node.type &&
      'prototype' === node.name;
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
        models.push(CrcModelFactory.create(opts, this.context))
      })
      .value();
    return models;
  }

}

module.exports = IdentifierCollection;
