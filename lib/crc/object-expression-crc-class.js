const CrcClass = require("./crc-class");
const { first } = require("lodash");

class ObjectExpressionCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @Override CrcClass
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An object with relevant information.
   * @see https://goo.gl/tuUSG5
   * @example
   * const crcClass.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */
  factory (node, context) {
    const lhs = node.left;
    const rhs = node.right;
    const params = {
      astNode: node,
      description: null,
      name: lhs.object.name,
      src: context.getSourceCode(),
      superClass: first(rhs.arguments).object.name
    };

    return new CrcClass(params);
  }
}

module.exports = ObjectExpressionCrcClass;
