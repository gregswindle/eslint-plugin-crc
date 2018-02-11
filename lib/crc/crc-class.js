const NullCrcMeta = require("./null-crc-meta");
const NullSourceCode = require("./null-source-code");
const prototypable = require("./prototypable");
const {
  chain,
  find,
  first,
  get,
  invoke
} = require("lodash");

const defaultConstructorParams = {
  "code": new NullSourceCode(),
  "meta": new NullCrcMeta(),
  "name": null,
  "superClass": null
};

// eslint-disable-next-line max-len
const findNode = (name, astNodes) => astNodes.filter((node) => find(node.declarations, {
  "id": {
    name
  }
}));

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
  const name = get(firstNode, "name");
  const body = get(code, "ast.body") || [];
  const srcNode = findNode(name, body);
  const proto = prototypable.getPrototypeOf(context);

  return {
    code,
    "meta": {
      context,
      "filePath": get(context, "filePath"),
      "kind": get(first(srcNode), "kind") || "class",
      "references": getReferences(name, code)
    },
    "name": name || proto.name,
    "superClass": proto.superClass
  };
};

const getReferences = (name, sourceCode) => {
  const tokens = get(sourceCode, "ast.tokens");
  return chain(tokens)
    .filter((token) => name === token.value)
    .sortBy(["start"])
    .value();
};

class CrcClass {
  /**
   * Create a `class` representation for use in a CrcClass
   * (Class-Responsibility-Collaboration model).
   *
   * @param {Object} [params] - A parameter object that sets all of
   * the CrcClass's properties.
   * @param {SourceCode} [params.code] - The ESLint
   * {@link http://bit.ly/2kfR79f `SourceCode`} object.
   * @param {string} [params.filePath] - The physcical path the source code
   *  file.
   * @param {CrcMeta} [params.meta] - Information about the bo
   * @param {string} [params.name] - The source code identifier of the class or
   * object to be modeled.
   * @param {array<ASTNode>} [params.references] - ASTNodes with locations.
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
   * a CrcModel.
   * @example
   * const crcClass = CrcClass.create(context);
   * @returns {CrcClass} A summary representation of a prototypable object.
   */

  static create (context) {
    const params = createParamsFromCrcContext(context);
    return new CrcClass(params);
  }

  static get nullObject () {
    class NullCrcClass extends CrcClass {}
    return new NullCrcClass(defaultConstructorParams);
  }
}

module.exports = CrcClass;
