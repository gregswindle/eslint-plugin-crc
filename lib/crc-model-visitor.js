(function () {
    'use strict';

    const _ = require('lodash');

    class CrcModelVisitor {
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

        static inOwnDeclarationScope(node, crcModel) {
            return _.inRange(node.start, crcModel.declaration.start, crcModel.declaration.end);
        }
  }

    module.exports = CrcModelVisitor;

}());
