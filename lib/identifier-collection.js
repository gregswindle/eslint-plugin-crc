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

function filterBy(ast, predicate) {
  let nodes = [];
  let scopeManager = escope.analyze(ast);
  let currentScope = scopeManager.acquire(ast);
  estraverse.traverse(ast, {
    enter: function(node, parent) {
      if (predicate(node)) {
        nodes.push(_.clone(node));
        currentScope = scopeManager.acquire(node);
      }
    }
  });
  return nodes;
}

class IdentifierCollection {
  constructor(code, config) {
    this.code = _.toString(code);
    this.config = config || libCrc.astConfig;
    this.ast = espree.parse(this.code, this.config);
    this.context = new esrefactor.Context(this.code);
    this.nodes = this.groupByName(this.ast);
  }

  find(predicate) {
    return _.find(this.nodes, predicate);
  }

  getPrototypeOf(name) {
    let prototypePredicate = (node) => 'Identifier' === node.type && 'prototype' == node.name;
    let protos = filterBy(this.ast, prototypePredicate);
    let nodes = _.filter(protos, {name: name});
    //console.log(protos, nodes);
    return nodes;
  }

  groupByName(ast) {
    let nodes = [];
    let tree = ast || this.ast;
    let identifierPredicate = (node) => 'Identifier' === node.type;
    _.chain(filterBy(tree, identifierPredicate))
      .groupBy('name')
      .map((locs, name) => nodes.push(new CrcModel(name, [], [], {locs: locs})))
      .value();
    return nodes;
  }
}

module.exports = IdentifierCollection;
