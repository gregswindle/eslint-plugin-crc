const CrcClass = require("./crc-class");

class NewExpressionCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = NewExpressionCrcClass.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */
  static factory (node, context) {
    const lhs = node.left;
    const rhs = node.right;
    const params = {
      astNode: node,
      description: null,
      name: lhs.object.name,
      src: context.getSourceCode(),
      superClass: rhs.callee.name
    };

    return new CrcClass(params);
  }
}

module.exports = NewExpressionCrcClass;
