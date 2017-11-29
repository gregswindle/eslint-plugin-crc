const CrcClass = require("../crc-class");
const { assign, find } = require("lodash");

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
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An ESLint
   * {@link https://goo.gl/tuUSG5 Context} object with relevant information.
   * @example
   * const crcClass = ClassDeclarationCrcClass.factory(result, params);
   * @returns {CrcClass} A CrcClass `NullObject`.
   */
  static factory (context) {
    const node = find(context.code.ast.body, {
      type: ClassDeclarationCrcClass.type
    });
    const crcClass = assign(super.factory(context), {
      name: node.id.name,
      superClass: node.superClass || Object
    });

    return crcClass;
  }

  /**
   * @static selector - An ESQuery selector that identifies ClassDeclarations.
   *
   * @returns {string} An ESQuery selector that identifies ClassDeclarations.
   */
  static get descriptor () {
    return "ClassDeclaration";
  }

  static get type () {
    return ClassDeclarationCrcClass.descriptor;
  }
}

module.exports = ClassDeclarationCrcClass;
