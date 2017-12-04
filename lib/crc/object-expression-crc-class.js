const CrcClass = require("./crc-class");
// eslint-disable-next-line node/no-unsupported-features
const { first } = require("lodash");

class ObjectExpressionCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = ObjectExpressionCrcClass.factory(node, context);
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
      superClass: first(rhs.arguments).object.name
    };

    return new CrcClass(params);
  }
}

module.exports = ObjectExpressionCrcClass;
