const CrcMeta = require("./crc-meta");
const CrcResponsibility = require("./crc-responsibility");
const SourceCodeFactory = require("./source-code-factory");
const prototypable = require("./prototypable");
const {
  get,
  invoke
} = require("lodash");

const defaultConstructorParams = {
  "code": SourceCodeFactory.nullObject,
  "meta": CrcMeta.nullObject,
  "name": null,
  "superClass": null
};

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
  const code = get(context, "code");
  const nodes = get(context, "nodes");
  const firstNode = get(invoke(nodes, "values().next()"), "value");
  const proto = prototypable.getPrototypeOf(context);
  const name = get(firstNode, "name") || proto.name;

  return {
    code,
    "meta": {
      context,
      "description": CrcResponsibility.descriptionFromContext(context),
      "filePath": get(context, "filePath"),
      "kind": proto.meta.kind,
      "references": prototypable.getScopeOf(context).references
    },
    name,
    "superClass": proto.superClass
  };
};

class CrcClass {
  /**
   * Create a `class` representation for use in a CrcClass
   * (Class-Responsibility-Collaboration model).
   *
   * @param {Object} [params] - A parameter object that sets all of
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
   */

  constructor (params = defaultConstructorParams) {
    this.code = params.code;
    this.meta = params.meta;
    this.name = params.name;
    this.superClass = params.superClass;
  }

  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {CrcContext} context - A summary object with information to derive
   * a CrcClass.
   * @example
   * const crcClass = CrcClass.create(context);
   * @returns {CrcClass} A summary representation of a prototypable object.
   */

  static create (context = null) {
    if (context) {
      const params = createParamsFromCrcContext(context);
      return new CrcClass(params);
    }
    return CrcClass.nullObject;
  }

  /**
   * @static
   * @property {NullCrcClass} nullObject - A CrcClass NullObject.
   *
   * 🔒 **Note:** `NullCrcClass` instances can **only** be created
   *  using the static getter `CrcClass.nullObject`.
   * @type NullCrcClass
   * @memberof CrcClass
   * @returns {NullCrcClass} A CrcClass NullObject.
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
     * @inner
     * @example
     * const nullCrcClass = CrcClass.nullObject;
     */

    class NullCrcClass extends CrcClass {}

    return new NullCrcClass(defaultConstructorParams);
  }
}

module.exports = CrcClass;
