/**
 * @fileoverview Create a `class` summary object for CrcModels.
 * @author Greg Swindle (https://github.com/gregswindle)
 */

/**
 * Default NullObject constructor parameters.
 *
 * @ignore
 * @private
 */
const defaultConstructorParams = {
  node: null,
  description: null,
  name: null,
  superClass: null,
  src: null
};

/**
 * Default `NullObject` factory parameters.
 *
 * @ignore
 * @private
 */
const defaultFactoryParams = {
  context: {
    getSourceCode: function () {
      return null;
    }
  },
  node: {
    id: {
      name: null
    },
    superClass: {
      name: null
    }
  }
};

/**
 * Represents `class` "summary" `Object` used for reporting.
 */
class CrcClass {
  /**
   * @classdesc Create a `class` representation for use in a CrcClass
   * (Class-Responsibility-Collaboration model).
   * @class
   * @public
   * @param {Object} [params] - A parameter object that sets all of
   * the CrcClass's properties.
   * @param {string} [params.name] - The source code identifier of the class or
   * object to be modeled.
   * @param {string} [params.description] - A summary of the
   * object's purpose.
   * @param {ASTNode} [params.node] - The abstract syntax tree node emitted by
   * a {@link https://goo.gl/WngFV9 compatible parser}.
   * @param {Object} [params.superClass] - The `prototype` of the object being
   * modeled. Defaults to `Object`.
   * @example
   * const crcClass = new CrcClass({
   *   name: "Bravo",
   *   description: "Disambiguates the letter \"B\" when stating english letters.",
   *   superClass: Alpha,
   *   node: node
   * });
   */
  // eslint-disable-next-line node/no-unsupported-features
  constructor (params = defaultConstructorParams) {
    this.node = params.node;
    this.description = params.description;
    this.name = params.name;
    this.superClass = params.superClass;
    this.src = params.src;
  }

  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {ASTNode} node - An abstract syntax tree node.
   * @param {Context} context  - An object with relevant information.
   * @see https://goo.gl/tuUSG5
   * @param {string}
   * @example
   * const crcClassFactory = new CrcModel();
   * const crcClass = crcClassFactory.factory(node, context);
   * @returns {CrcClass} A NullObject for CrcClass.
   */
  // eslint-disable-next-line node/no-unsupported-features
  static factory (node = defaultFactoryParams.node,
    // eslint-disable-next-line node/no-unsupported-features
    context = defaultFactoryParams.context) {
    const params = {
      node,
      description: null,
      name: node.id.name,
      src: context.getSourceCode(),
      superClass: node.superClass
    };

    return new CrcClass(params);
  }
}

module.exports = CrcClass;
