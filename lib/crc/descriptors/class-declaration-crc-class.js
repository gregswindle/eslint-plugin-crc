const CrcClass = require("../crc-class");
const esquery = require("esquery");
const { first } = require("lodash");

/**
 * Create a `class` representation for use in a CrcClass
 * (Class-Responsibility-Collaboration model).
 *
 * @extends CrcClass
 */
class ClassDeclarationCrcClass extends CrcClass {
  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @static
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = ClassDeclarationCrcClass.factory(result, params);
   * @returns {CrcClass} A CrcClass `NullObject`.
   */
  static factory (context) {
    const node = first(esquery.match(
      context.code.ast,
      esquery.parse(ClassDeclarationCrcClass.descriptor)
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
    return "ClassDeclaration";
  }
}

module.exports = ClassDeclarationCrcClass;
