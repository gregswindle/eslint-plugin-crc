const CrcClass = require("../crc-class");
const esquery = require("esquery");
const { first } = require("lodash");

class NewExpressionCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @override
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = NewExpressionCrcClass.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */
  static factory (context) {
    const node = first(esquery.match(
      context.code.ast,
      esquery.parse(NewExpressionCrcClass.descriptor)
    ));

    return Object.assign(super.factory(context), {
      name: node.left.object.name,
      superClass: node.right.callee
    });
  }

  static get descriptor () {
    return "ExpressionStatement > [left.property.name=\"prototype\"][right.type=\"NewExpression\"]";
  }
}

module.exports = NewExpressionCrcClass;
