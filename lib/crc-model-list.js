
const CrcModel = require('./crc-model');
const CrcModelVisitor = require('./crc-model-visitor');
const _ = require('lodash');
const astConfig = require('./ast-config');
const espree = require('espree');
const estraverse = require('estraverse');
const templates = require('require-dir')('./templates', {
    recurse: true,
    camelcase: true
});


(function() {
     /**
      *
      * Traverses the [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
      * to identify collaborators and associate them the objects that depend on
      * them.
      *
      * @param {CrcModelList} crcModelList An array of CrcModels.
      *
      * @returns {void}
      */
    const associateCollaborators = function (crcModelList) {
        const getModel = (node) => {
            if (!_.isNil(node) && _.has(node, 'name')) {
                return crcModelList.find({name: node.name});
            }
            return null;
        };
        estraverse.traverse(crcModelList.ast, {
            enter: (node) => {
                const model = getModel(node);
                if (model && !CrcModelVisitor.inOwnDeclarationScope(node, model)) {
                    CrcModelVisitor.getModelDeclaredInRange(node, crcModelList);
                }
            }
        });
    };

    const crcModelPrototypeVisitor = {

         /**
          *
          * Find a `CrcModel`'s prototype when expressed with `Object.create`
          *
          * @param {CrcModel} crcModel  The `CrcModel` whose prototype you need.
          * @param {CrcModelList} crcModelList The array of `CrcModels` to which the `CrcModel` in question belongs.
          *
          * @returns {CrcModel|Error} The `CrcModel`'s prototype or an `Error` if a prototype does not exist for it.'
          */
        getPrototypeByObjectCreate: (crcModel, crcModelList) => {
             // Definition 1: Object.create
            let crcPrototype;
            try {
                let predicate = _.set(
                     templates.getPrototypeOfExpressionStatement,
                     'expression.left.object.name',
                     crcModel.name
                 );
                const expressionStatement = _.find(crcModelList.ast.body, predicate);
                predicate = templates.getPrototypeOfMemberExpression;
                const memberExpression =
                    _.find(expressionStatement.expression.right.arguments, predicate);
                const name = _.get(memberExpression, 'object.name');
                crcPrototype = crcModelList.find({name});
            }
            catch (err) {
                crcPrototype = err;
            }
            return crcPrototype;
        },

         /**
          *
          * Find a `CrcModel`'s prototype when expressed with `extends`.
          *
          * @param {CrcModel} crcModel  The `CrcModel` whose prototype you need.
          * @param {CrcModelList} crcModelList The array of `CrcModels` to which the `CrcModel` in question belongs.
          *
          * @returns {CrcModel|Error} The `CrcModel`'s prototype or an `Error` if a prototype does not exist for it.'
          */
        getPrototypeByClassExtends: (crcModel, crcModelList) => {
             // Definition 3: class extends
            let crcPrototype;
            try {
                const predicate = _.set(templates.getPrototypeOfClassExpression, 'id.name', crcModel.name);
                const classDeclaration = _.find(crcModelList.ast.body, predicate);
                const name = _.get(classDeclaration, 'superClass.name');
                crcPrototype = crcModelList.find({name});
            }
            catch (err) {
                crcPrototype = err;
            }
            return crcPrototype;
        },
         /**
          *
          * Find a `CrcModel`'s prototype when expressed with the `new` keyword.
          *
          * @param {CrcModel} crcModel  The `CrcModel` whose prototype you need.
          * @param {CrcModelList} crcModelList The array of `CrcModels` to which the `CrcModel` in question belongs.
          *
          * @returns {CrcModel|Error} The `CrcModel`'s prototype or an `Error` if a prototype does not exist for it.'
          */
        getPrototypeByNewExpression: (crcModel, crcModelList) => {
            let crcPrototype;
            try {
                const predicate = templates.getPrototypeOfNewExpression;
                _.first(predicate.declarations).id.name = crcModel.name;
                const newExpression = _.find(crcModelList.ast.body, predicate);
                const name = _.get(
                    _.first(newExpression.declarations),
                    'init.callee.name'
                  );
                crcPrototype = crcModelList.find({name}).superClass;
            }
            catch (err) {
                crcPrototype = err;
            }
            return crcPrototype;
        },
         /**
          *
          * Traverses a `CrcModelList`'s AST to find and assign object prototypes
          * to each `CrcModel#superClass` property.
          *
          * @param {CrcModelList} crcModelList An array of `CrcModels`.
          *
          * @returns {void}
          */
        visit: (crcModelList) => {
            _.forEach(crcModelList.models, (model) => {
                const prototype = crcModelList.getPrototypeOf(model);
                model.superClass = prototype;
            });
        }
    };

    /**
     * Generates an ordered list of `CrcModels` based on source code strings or
     * buffers.
     */
    class CrcModelList {

      /**
       * Create a hadow of `CrcModelList`.
       *
       * @param {string|buffer} code   The source code to be analyzed.
       * @param {object} [astParsingOptions] [Espree parsing options](https://github.com/eslint/espree/blob/master/espree.js#L624) defining how to tokenize the AST.
       *
       * @returns {CrcModelList} A list of `CrcModels` and their relationships with one another.
       */
        constructor(code, astParsingOptions = astConfig) {
            this.code = _.toString(code);
            this.astParsingOptions = astParsingOptions;
            this.ast = espree.parse(this.code, this.astParsingOptions);
            this.models = this.groupBy('name', CrcModelVisitor.isDeclaration);
            associateCollaborators(this);
            crcModelPrototypeVisitor.visit(this);
        }

      /**
       * Traverses the ast, returning an array of all elements predicate returns
       * truthy for.
       *
       * @param {function|object} predicate The function or identity invoked per
       * iteration.
       *
       * @returns {array} Returns a new, filtered array of zero or more CrcModels.
       */
        filterBy(predicate) {
            const nodes = [];
            estraverse.traverse(this.ast, {
                enter: (node) => {
                    if (!_.isNil(node) && predicate(node, this)) {
                        nodes.push(CrcModelVisitor.getCrcModelOptions(node));
                    }
                }
            });
            return nodes;
        }

      /**
       * Iterates over the CrcModels collection, returning the first element
       * predicate returns truthy for.
       *
       * @param {function|object} predicate The function or object literal
       * "matcher" invoked per iteration.
       *
       * @example
       * let alpha = crcModelList.find({name: 'Alpha'});
       * // => [object Object] // Alpha reference
       *
       * @returns {CrcModel|null} Returns the matched CrcModel, else null.
       */
        find(predicate) {
            return _.find(this.models, predicate);
        }

         /**
          * Find a `CrcModel`'s prototype.
          *
          * @param {CrcModel} crcModel
          *
          * @see The article [Strategies for prototype detection](https://github.com/gregswindle/eslint-plugin-crc/wiki/Strategies-for-prototype-detection) describes the definitions for identifying an object's
          * prototype from an AST.
          *
          * @returns {CrcModel|null} The prototype of the crcModel, or null if
          * not found.
          */
        getPrototypeOf(crcModel) {
            const isInvalidObject = (o) => _.isNil(o) || _.isError(o);
            let prototype = crcModelPrototypeVisitor.getPrototypeByObjectCreate(crcModel, this);
            if (isInvalidObject(prototype)) {
                prototype = crcModelPrototypeVisitor.getPrototypeByClassExtends(crcModel, this);
            }
            if (isInvalidObject(prototype)) {
                prototype = crcModelPrototypeVisitor.getPrototypeByNewExpression(crcModel, this);
            }
            return isInvalidObject(prototype) ? null : prototype;
        }

        /**
        * Creates an object composed transformed AST nodes, each of which has
        * property <code>name</code>. The <code>name</code> acts as "key" that can
        * be used by other methods like {@link CrcModelList#find}. The order
        * of grouped values is determined by the order they occur in the AST.
        *
        * @param {string} property  The property/key to group by.
        * @param {function|object} predicate The iteratee to transform keys.
        *
        * @returns {array} Returns the composed aggregate object array.
        */
        groupBy(property, predicate) {
            const models = [];
            const options = _.values(_.omitBy(this.filterBy(predicate), _.isNil));
            _.chain(options)
                 .groupBy(property)
                 .map((opts) => {
                     const crc = CrcModel.factory(opts, this.ast);
                     models.push(crc);
                 })
                 .value();
            return models;
        }

  }

    module.exports = CrcModelList;

}());
