'use strict';

const _ = require('lodash');

class CrcModel {
    constructor(name, options) {
        let opts;
        evaluateNameArg(name);
        opts = loadOptions(options);
        this.name = name;
        this.collaborators = opts.collaborators;
        this.references = opts.references;
        this.identifier = opts.identifier;
        this.responsibilities = opts.responsibilities;
        this.declaration = opts.declaration;
    }

    static factory(options, ast) {
        let params = _.first(options);
        params.references = _.chain(ast.tokens)
          .filter(token => {
              return token.value === params.identifier.name;
          })
          .sortBy(['start'])
          .value();
        return new CrcModel(params.identifier.name, params);
    }
}

function loadOptions(options) {
    let defaultOptions, opts;
    defaultOptions = {
        collaborators: [],
        context: null,
        declaration: null,
        identifier: null,
        references: [],
        responsibilities: []
    };
    opts = _.defaults(options, defaultOptions);
    return _.clone(opts);
}

function evaluateNameArg(name) {
    if (_.isNil(name)) {
        throw new TypeError('CrcModels must have a name.');
    }
}

module.exports = CrcModel;
