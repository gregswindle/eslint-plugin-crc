const CrcClass = require("../crc-class");
const esquery = require("esquery");
const { first } = require("lodash");

class ObjectExpressionCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @override
   * @param {Context} context  - An ESLint
   * {@link https://goo.Gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = ObjectExpressionCrcClass.factory(context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */
  static factory (context) {
    const node = first(esquery.match(
      context.code.ast,
      esquery.parse(ObjectExpressionCrcClass.descriptor)
    ));

    const superClassName = first(node.right.arguments).object.name;
    const superClass = first(esquery.match(
      context.code.ast,
      esquery.parse(`Identifier[name="${superClassName}"]`)
    ));

    return Object.assign(super.factory(context), {
      name: node.left.object.name,
      superClass
    });
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
