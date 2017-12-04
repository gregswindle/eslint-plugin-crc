const CrcClass = require("./crc-class");

class ClassExpressionCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = ClassExpressionCrcClass.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */
  static factory (node, context) {
    const params = {
      astNode: node,
      description: null,
      name: node.id.name,
      src: context.getSourceCode(),
      superClass: node.superClass.name
    };

    return new CrcClass(params);
  }
}

module.exports = ClassExpressionCrcClass;
