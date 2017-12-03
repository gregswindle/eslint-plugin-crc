
const CrcClass = require("../crc-class");
const esquery = require("esquery");
const { first } = require("lodash");

class PrototypeConstructorCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = PrototypeConstructorCrcClass.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */

  static factory (context) {
    // const lhs = node.left;
    // const rhs = node.right;
    // const params = {
    //   node,
    //   description: null,
    //   name: lhs.object.object.name,
    //   src: context.getSourceCode(),
    //   superClass: rhs.name
    // };

    const node = first(esquery.match(
      context.code.ast,
      esquery.parse(PrototypeConstructorCrcClass.descriptor)
    ));

    return Object.assign(super.factory(context), {
      name: node.left.object.object.name,
      superClass: node.right
    });
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

module.exports = PrototypeConstructorCrcClass;
