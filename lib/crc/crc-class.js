const CrcMeta = require('./crc-meta')
const CrcResponsibility = require('./crc-responsibility')
const SourceCodeFactory = require('./source-code-factory')
const PrototypeInspector = require('./prototype-inspector')
const {
  get,
  invoke
} = require('lodash')

/**
 * Default parameters for a CrcClass.
 *
 * @type {CrcClass~NullCrcClass}
 * @private
 */

const defaultConstructorParams = {
  'code': SourceCodeFactory.nullObject,
  'meta': CrcMeta.nullObject,
  'name': null,
  'superClass': null
}

/**
 * Create CrcClass.prototype.constructor parameters.
 *
 * @param {CrcContext} context - A CrcContext object.
 *
 * @returns {type} Constructor parameters for a new CrcContext.
 * @ignore
 * @private
 */

const createParamsFromCrcContext = (context) => {
  const code = get(context, 'code')
  const nodes = get(context, 'nodes')
  const firstNode = get(invoke(nodes, 'values().next()'), 'value')
  const proto = PrototypeInspector.getPrototypeOf(context)
  const name = get(firstNode, 'name') || proto.name

  return {
    code,
    'meta': {
      context,
      'description': CrcResponsibility.descriptionFromContext(context),
      'filePath': get(context, 'filePath'),
      'kind': proto.meta.kind,
      'references': PrototypeInspector.getScopeOf(context).references
    },
    name,
    'superClass': proto.superClass
  }
}

/**
 * @namespace CrcClass
 * @kind class
 *
 * @classdesc
 * Creates a `class` representation for use in a CrcClass
 * (Class-Responsibility-Collaboration model).
 *
 * @param {Object} [params = defaultConstructorParams] - A parameter object that sets all of
 * the CrcClass's properties.
 * @param {SourceCode} [params.code] - The ESLint
 * [`SourceCode`](http://bit.ly/2kfR79f) object.
 * @param {string} [params.filePath] - The physcical path the source code
 *  file.
 * @param {CrcMeta} [params.meta] - Information about the SourceCode.
 * @param {string} [params.name] - The source code identifier of the class or
 * object to be modeled.
 * @param {array<ASTNode>} [params.references] - ESTree
 *  [`ASTNodes`](https://goo.gl/yTwW1m#node-objects) with locations.
 * @param {CrcClass} [params.superClass] - The `prototype` of the object being
 * modeled. Defaults to `null`.
 *
 * @example
 * const crcClass = new CrcClass({
 *   code: sourceCode,
 *   meta: {
 *     context,
 *     description,
 *     filePath,
 *     references
 *   },
 *   name: "Bravo",
 *   superClass: Alpha
 * });
 *
 * @property {SourceCode} code - The ESLint
 * [`SourceCode`](http://bit.ly/2kfR79f) object.
 * @property {CrcMeta} meta - A CrcMeta instance.
 * @property {String} name - The name of the "class", i.e.,
 *  ECMAScript object that is a `prototype` of another constructor function.
 * @property {CrcClass} superClass - The function constructur that this
 *  CrcClass isPrototypeOf.
 *
 * @this CrcClass
 */

class CrcClass {
  constructor (params = defaultConstructorParams) {
    this.code = params.code
    this.meta = params.meta
    this.name = params.name
    this.superClass = params.superClass
  }

  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {CrcContext} [context=null] - A summary object with information to derive
   * a CrcClass.
   * @example
   * const crcClass = CrcClass.create(context);
   * @returns {CrcClass|CrcClass~NullCrcClass} A summary representation of a PrototypeInspector object.
   */

  static create (context = null) {
    if (context) {
      const params = createParamsFromCrcContext(context)
      return new CrcClass(params)
    }
    return CrcClass.nullObject
  }

  /**
   * @static
   * @property {NullCrcClass} nullObject - A CrcClass NullObject.
   *
   * 🔒 **Note:** `NullCrcClass` instances can **only** be created
   *  using the static getter `CrcClass.nullObject`.
   * @type CrcClass~NullCrcClass
   * @memberof CrcClass
   * @returns {CrcClass~NullCrcClass} A CrcClass NullObject.
   * @example
   * const nullCrcClass = CrcClass.nullObject;
   */

  static get nullObject () {
    /**
     * A CrcClass NullObject.
     *
     * 🔒 **Note:** `NullCrcClass` instances can **only** be created using the
     *  static getter `CrcClass.nullObject`.
     *
     * @extends CrcClass
     * @protected
     * @memberof CrcClass
     * @inner
     * @example
     * const nullCrcClass = CrcClass.nullObject;
     */

    class NullCrcClass extends CrcClass {}

    return new NullCrcClass(defaultConstructorParams)
  }
}

module.exports = CrcClass
