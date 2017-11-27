const CrcClass = require("./crc-class");

class ProptypeConstructorCrcClass extends CrcClass {
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
  factory (node, context) {
    const lhs = node.left;
    const rhs = node.right;
    const params = {
      astNode: node,
      description: null,
      name: lhs.object.object.name,
      src: context.getSourceCode(),
      superClass: rhs.name
    };

    return new CrcClass(params);
  }
}

module.exports = ProptypeConstructorCrcClass;
