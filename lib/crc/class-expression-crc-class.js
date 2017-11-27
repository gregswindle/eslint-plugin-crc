const CrcClass = require("./crc-class");

class ClassExpressionCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An object with relevant information.
   * @see https://goo.gl/tuUSG5
   * @param {string}
   * @example
   * const crcClass.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */
  factory (node, context, nodeSelectorType) {
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
