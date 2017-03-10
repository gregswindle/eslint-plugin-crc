'use strict';

const _ = require('lodash');

/**
 Represents a Class-Responsibility-Collaboration model, which expresses the
 scope of an object's behaviors -- responsibilities -- and the objects it depends
 on to fulfill its responsibilities (collaborators).
 */
class CrcModel {
    /**
     Instantiate a Class-Responsibility-Collaboration model.
     @param {string} name - The source code identifier of the class or object to be modeled
     @param {object} [options] - A parameter object that optionally sets all of the CrcModel's properties.
     @param {array} [options.collaborators] - A collection of zero or more CrcModels that this object depends on.
     @param {array} [options.references] - A collection of zero or more espree Tokens representing where this object is used in the source code.
     @param {object} [options.identifier] - An Espress Identifier object.
     @param {array} [options.responsibilities] - A list of data this object must maintain and/or operations it must perform.
     @param {object} [options.declaration] - The espree Identifier that represents "where" this object was declared into being.
     */
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

    /**
     @function factory
     @memberOf CrcModel
     @static
     Generates a CrcModel with additional (yet optional) abstract syntax tree data.
     @param {object} options - A parameter object that optionally sets all of the CrcModel's properties.
     @param {string} options.name -The source code identifier of the class or object to be modeled
     @param {array} [options.collaborators] - A collection of zero or more CrcModels that this object depends on.
     @param {array} options.references - A collection of zero or more espree Tokens representing where this object is used in the source code.
     @param {object} [options.identifier] - An Espress Identifier object.
     @param {array} [options.responsibilities] - A list of data this object must maintain and/or operations it must perform.
     @param {object} [options.declaration] - The espree Identifier that represents "where" this object was declared into being.
     @param {object} ast - The espree abstract syntax tree used to analyze the codebase.
     */
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
