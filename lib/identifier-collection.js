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
function isIdentifierReference(node, parent) {

  switch (parent.type) {
    /* istanbul ignore next: this might be deleted...need to dig deeper
    case "LabeledStatement":
    case "BreakStatement":
    case "ContinueStatement":
    case "ArrayPattern":
    case "RestElement":
    case "ImportSpecifier":
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "CatchClause":
      return false;
    */
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ClassDeclaration":
    case "ClassExpression":
    case "VariableDeclarator":
      return parent.id !== node;

    case "Property":
    case "MethodDefinition":
      return (
        parent.key !== node ||
        parent.computed ||
        parent.shorthand
      );

    // case "AssignmentPattern":
    //   return parent.key !== node;

    default:
      return true;
  }
}

function cloneNode(node, parent) {
  let clonedNode = _.clone(node);
  clonedNode.isReference = isIdentifierReference(node, parent);
  clonedNode.parent = _.clone(parent);
  return clonedNode;
}

class IdentifierCollection {
  constructor(code, config) {
    this.code = _.toString(code);
    this.config = config || libCrc.astConfig;
    this.ast = espree.parse(this.code, this.config);
    this.context = new esrefactor.Context(this.code);
    this.nodes = this.groupByName(this.ast);
  }

  associateCollaborators() {
    // TODO: simplify and optimize. All "top-level" identifiers declare their
    //       "range", as well as their references. Check whether each identifier
    //       has references occurring within the range of another identifier.
    //       If they do, then they're "collaborators." More detail is needed,
    //       but it's a start.
    let names, collaborators, collaboratorPredicate, self;
    names = _.chain(this.nodes).map('name').value();
    self = this;
    collaborators = {};
    _.forEach(names, function (name, idx) {
      collaboratorPredicate = (node) => _.includes(names, node.name);
      collaborators[name] = self.filterBy(collaboratorPredicate);
    });
    console.log(_.size(collaborators));
  }

  filterBy(predicate, node) {
    let nodes, scopeManager, currentScope, tree;
    nodes = [];
    tree = node || this.ast;
    scopeManager = escope.analyze(tree);
    currentScope = scopeManager.acquire(tree);
    estraverse.traverse(tree, {
      enter: function(node, parent) {

        if (!_.isNil(node) && predicate(node)) {
          console.log('node', node);
          nodes.push(cloneNode(node, parent));
          currentScope = scopeManager.acquire(node);
        }
      }
    });
    return nodes;
  }

  find(predicate) {
    return _.find(this.nodes, predicate);
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

  groupByName() {
    let nodes, tree, identifierPredicate;
    nodes = [];
    identifierPredicate = (node) => 'Identifier' === node.type;
    _.chain(this.filterBy(identifierPredicate))
      .groupBy('name')
      .map((references, name) => nodes.push(
        new CrcModel(name, {
          context: this.context,
          references: references
        })
      ))
      .value();
    return nodes;
  }
}

module.exports = IdentifierCollection;
