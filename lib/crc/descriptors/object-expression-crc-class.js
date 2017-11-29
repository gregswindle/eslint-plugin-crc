const CrcClass = require("../crc-class");
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
      node,
      description: null,
      src: context.getSourceCode(),
      name: lhs.object.name,
      superClass: first(rhs.arguments).object.name
    };

    return new CrcClass(params);
  }

  /**
   * @static selector - Identify prototypal inheritance by an `Object.create`
   * `AssignmentExpression`.
   *
   * @returns {string} An ESQuery selector.
   */
  static get descriptor () {
    return "AssignmentExpression[left.property.name=\"prototype\"][right.type=\"CallExpression\"],[right.callee.object.name=\"Object\"][callee.property.name=\"create\"][arguments] [object][property.name=\"prototype\"]";
  }
}

module.exports = ObjectExpressionCrcClass;
