
const CrcClass = require("../crc-class");

class ProptypeConstructorCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = ProptypeConstructorCrcClass.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */

  static factory (node, context) {
    const lhs = node.left;
    const rhs = node.right;
    const params = {
      node,
      description: null,
      name: lhs.object.object.name,
      src: context.getSourceCode(),
      superClass: rhs.name
    };

    return new CrcClass(params);
  }

  /**
   * @static selector - Identify prototypal inheritance by `constructor`
   * `AssignmentExpression`.
   * @example
   * // Identifies
   * Square.prototype.constructor = Polygon
   * @returns {string} An ESQuery selector.
   */
  static get descriptor () {
    return "AssignmentExpression[left.property.name=\"constructor\"][right.type=\"Identifier\"]";
  }
}

module.exports = ProptypeConstructorCrcClass;
