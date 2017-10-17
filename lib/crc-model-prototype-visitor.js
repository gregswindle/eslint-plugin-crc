const CrcModelListVisitor = require('./crc-model-list-visitor');
const { find, first, forEach, get, set } = require('lodash');
const templates = require('require-dir')('./templates', {
    recurse: true,
    camelcase: true
});

/**
 * Identifies the `prototype` of each `CrcModel` in a `CrcModelList`.
 * @implements {CrcModelListVisitor}
 */
class CrcModelPrototypeVisitor extends CrcModelListVisitor {
    /**
   *
   * Find a `CrcModel`'s prototype when expressed with `Object.create`
   *
   * @param {CrcModel} crcModel  The `CrcModel` whose prototype you need.
   * @param {CrcModelList} crcModelList The array of `CrcModels` to which the `CrcModel` in question belongs.
   *
   * @returns {CrcModel|Error} The `CrcModel`'s prototype or an `Error` if a prototype does not exist for it.'
   */
    getPrototypeByObjectCreate(crcModel, crcModelList) {
        // Definition 1: Object.create
        let crcPrototype;
        try {
            let predicate = set(
                templates.getPrototypeOfExpressionStatement,
                'expression.left.object.name',
                crcModel.name
            );
            const expressionStatement = find(crcModelList.ast.body, predicate);
            predicate = templates.getPrototypeOfMemberExpression;
            const memberExpression =
              find(expressionStatement.expression.right.arguments, predicate);
            const name = get(memberExpression, 'object.name');
            crcPrototype = crcModelList.find({name});
        }
        catch (err) {
            crcPrototype = err;
        }
        return crcPrototype;
    }

    /**
   *
   * Find a `CrcModel`'s prototype when expressed with `extends`.
   *
   * @param {CrcModel} crcModel  The `CrcModel` whose prototype you need.
   * @param {CrcModelList} crcModelList The array of `CrcModels` to which the `CrcModel` in question belongs.
   *
   * @returns {CrcModel|Error} The `CrcModel`'s prototype or an `Error` if a prototype does not exist for it.'
   */
    getPrototypeByClassExtends(crcModel, crcModelList) {
        // Definition 3: class extends
        let crcPrototype;
        try {
            const predicate = set(templates.getPrototypeOfClassExpression, 'id.name', crcModel.name);
            const classDeclaration = find(crcModelList.ast.body, predicate);
            const name = get(classDeclaration, 'superClass.name');
            crcPrototype = crcModelList.find({name});
        }
        catch (err) {
            crcPrototype = err;
        }
        return crcPrototype;
    }

    /**
   *
   * Find a `CrcModel`'s prototype when expressed with the `new` keyword.
   *
   * @param {CrcModel} crcModel  The `CrcModel` whose prototype you need.
   * @param {CrcModelList} crcModelList The array of `CrcModels` to which the `CrcModel` in question belongs.
   *
   * @returns {CrcModel|Error} The `CrcModel`'s prototype or an `Error` if a prototype does not exist for it.'
   */
    getPrototypeByNewExpression(crcModel, crcModelList) {
        let crcPrototype;
        try {
            const predicate = templates.getPrototypeOfNewExpression;
            first(predicate.declarations).id.name = crcModel.name;
            const newExpression = find(crcModelList.ast.body, predicate);
            const name = get(
                first(newExpression.declarations),
                'init.callee.name'
            );
            crcPrototype = crcModelList.find({name}).superClass;
        }
        catch (err) {
            crcPrototype = err;
        }
        return crcPrototype;
    }

    /**
   *
   * Traverses a `CrcModelList`'s AST to find and assign object prototypes
   * to each `CrcModel#superClass` property.
   * @augments CrcModelListVisitor#visit
   *
   * @param {CrcModelList} crcModelList An array of `CrcModels`.
   *
   * @returns {undefined}
   */
    visit(crcModelList) {
        forEach(crcModelList.models, (model) => {
            const prototype = crcModelList.getPrototypeOf(model);
            model.superClass = prototype;
        });
    }
}

module.exports = CrcModelPrototypeVisitor;
