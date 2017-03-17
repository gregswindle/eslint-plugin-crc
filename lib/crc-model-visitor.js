
const _ = require('lodash');

(function () {

    /**
     * Collects information needed to construct an overall CRC Model
     * by "visiting" the abstract syntax tree.
     */
    class CrcModelVisitor {

        /**
         * @static isDeclaration - Determines whether a node in the AST
         * declares type `Function`, `Class`, or `Variable`.
         *
         * @param {object} node An Espree AST node.
         *
         * @returns {boolean} `true` if the `node` is a declaration; otherwise false.
         */
        static isDeclaration(node) {
            const declarators = [
                'FunctionDeclaration',
              //'FunctionExpression',
              //'ArrowFunctionExpression',
                'ClassDeclaration',
                'ClassExpression',
                'VariableDeclaration',
                'VariableDeclarator'
            ];
            return _.includes(declarators, node.type);
        }

        /**
         * @static getCrcModelOptions - Gets the properties/options of a node in
         * the AST.
         *
         * @param {object} node An Espree AST node.
         *
         * @returns {object} An Espress node "summary" object.
         */
        static getCrcModelOptions(node) {
            let options;
            if (_.has(node, 'id') && !_.isNil(node.id.name)) {
                const clonedNode = _.clone(node);
                options = {
                    declaration: _.pick(clonedNode, [
                        'type',
                        'start',
                        'end',
                        'loc',
                        'range'
                    ]),
                    identifier: _.get(clonedNode, 'id'),
                    name: _.get(clonedNode, 'id.name')
                };
            }
            return options;
        }

        /**
         * @static getModelDeclaredInRange - Returns references to CrcModel as
         * collaborators.
         *
         * @param {object} node         An Espree node in the AST.
         * @param {crcModelList} crcModelList An array of `CrcModels`.
         *
         * @returns {array} `CrcModel` collaborators.
         */
        static getModelDeclaredInRange(node, crcModelList) {
            let crc = null;
            const declarations = {};
            _.map(crcModelList.models, (model) => {
                declarations[model.name] = _.pick(model.declaration, [
                    'start',
                    'end'
                ]);
            });
            return _.forEach(declarations, (declaration, name) => {
                const isDeclaredRange = CrcModelVisitor.inOwnDeclarationScope(node, {
                    declaration
                });
                crc = null;
                if (isDeclaredRange) {
                    crc = crcModelList.find({
                        name
                    });
                    crc.collaborators.push(node);
                    return crc;
                }
            });
        }

        /**
         * @static inOwnDeclarationScope - Used to prevent a `CrcModel` declaring
         * itself as a collaborator.
         *
         * @param {object} node     As Espree AST node.
         * @param {CrcModel} crcModel The `CrcModel`
         *
         * @returns {boolean} `true` if the `node` is a collaborator; otherwise false.
         */
        static inOwnDeclarationScope(node, crcModel) {
            return _.inRange(node.start, crcModel.declaration.start, crcModel.declaration.end);
        }
  }

    module.exports = CrcModelVisitor;

}());
