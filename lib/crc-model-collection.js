'use strict';

const requireDir = require('require-dir');
const espree = require('espree');
const estraverse = require('estraverse');
const _ = require('lodash');
const libCrc = requireDir('.', {
    recurse: true,
    camelcase: true
});
const CrcModel = libCrc.crcModel;
const CrcModelFactory = libCrc.crcModelFactory;

class CrcModelCollection {
    constructor(code, config) {
        this.code = _.toString(code);
        this.config = config || libCrc.astConfig;
        this.ast = espree.parse(this.code, this.config);
        this.models = this.groupBy('name', CrcModelFactory.isDeclaration);
        this.associateCollaborators();
    }

    associateCollaborators() {
        let getModel = (node) => {
            if (!_.isNil(node) && _.has(node, 'name')) {
                return this.find({name: node.name});
            }
            return (void 0);
        };
        estraverse.traverse(this.ast, {
            enter: (node) => {
                let model = getModel(node);
                if (model && !CrcModelFactory.inOwnDeclarationScope(node, model)) {
                    CrcModelFactory.getModelDeclaredInRange(node, this);
                }
            }
        });
    }

    filterBy(predicate) {
        let nodes = [];
        estraverse.traverse(this.ast, {
            enter: (node) => {
                if (!_.isNil(node) && predicate(node, this)) {
                    nodes.push(CrcModelFactory.getCrcModelOptions(node));
                }
            }
        });
        return nodes;
    }

    find(predicate) {
        return _.find(this.models, predicate);
    }

  // TODO: This method is not yet implemented.
  // REVIEW: This smells weird here. The CrcModelCollection is becoming a factory aggregator.
    // getPrototypeOf(name) {
    //     let prototypePredicate, protos, nodes;
    //     prototypePredicate = (node) => 'Identifier' === node.type && 'prototype' === node.name;
    //     protos = this.filterBy(prototypePredicate);
    //     nodes = _.filter(protos, {
    //         name: name
    //     });
    //     return nodes;
    // }

    groupBy(property, predicate) {
        let options, models = [];
        options = _.values(_.omitBy(this.filterBy(predicate), _.isNil));
        _.chain(options)
          .groupBy(property)
          .map((opts) => {
              models.push(CrcModel.factory(opts, this.ast));
          })
          .value();
        return models;
    }

}

module.exports = CrcModelCollection;
