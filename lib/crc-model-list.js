
const CrcModel = require('./crc-model');
const CrcModelPrototypeVisitor = require('./crc-model-prototype-visitor');
const CrcModelVisitor = require('./crc-model-visitor');
const _ = require('lodash');
const astConfig = require('./ast-config');
const espree = require('espree');
const estraverse = require('estraverse');


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

    const crcModelPrototypeVisitor = new CrcModelPrototypeVisitor();

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
          * @see [Strategies for prototype detection](https://git.io/vFK99)
          * describes the definitions for identifying an object's
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
            _
                .chain(options)
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
