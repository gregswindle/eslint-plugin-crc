'use strict';

const _ = require('lodash');

class CrcModelVisitor {
    static isDeclaration(node) {
        let declarators = [
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
        let clonedNode, options;
        if (_.has(node, 'id') && !_.isNil(node.id.name)) {
            clonedNode = _.clone(node);
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

    static getModelDeclaredInRange(node, crcModelCollection) {
        let crc = null;
        let declarations = {};
        _.map(crcModelCollection.models, (model) => {
            declarations[model.name] = _.pick(model.declaration, [
                'start',
                'end'
            ]);
        });
        return _.forEach(declarations, (declaration, name) => {
            let isDeclaredRange = CrcModelVisitor.inOwnDeclarationScope(node, {
                declaration
            });
            crc = null;
            if (isDeclaredRange) {
                crc = crcModelCollection.find({
                    name
                });
                crc.collaborators.push(node);
                //console.log(`${crc.name} collaborates with ${node.name}`);
                return crc;
            }
        });
    }

    static inOwnDeclarationScope(node, crcModel) {
        return _.inRange(node.start, crcModel.declaration.start, crcModel.declaration.end);
    }
}

module.exports = CrcModelVisitor;
