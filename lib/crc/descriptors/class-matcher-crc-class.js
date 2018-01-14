const CrcClass = require("../crc-class");
const esquery = require("esquery");
const { first } = require("lodash");

/**
 * Create a `CrcClass` for ASPNodes identified by `ClassDeclarations` and
 * `ClassExpressions`.
 *
 * @extends CrcClass
 */
class ClassMatcherCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @override
   * @param {Context} context  - An ESLint
   * {@link https://goo.Gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = ClassMatcherCrcClass.factory(result, params);
   * @returns {CrcClass} A `CrcClass` `NullObject`.
   */
  static factory (context) {
    const node = first(esquery.match(
      context.code.ast,
      esquery.parse(ClassMatcherCrcClass.descriptor)
    ));

    return Object.assign(super.factory(context), {
      name: node.id.name,
      superClass: node.superClass
    });
  }

  /**
   * @static selector - An ESQuery selector that identifies ClassDeclarations.
   *
   * @returns {string} An ESQuery selector that identifies ClassDeclarations.
   */
  static get descriptor () {
    return ":matches(ClassDeclaration, ClassExpression)";
  }
}

module.exports = ClassMatcherCrcClass;
