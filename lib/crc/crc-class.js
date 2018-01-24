const CrcResponsibility = require("./crc-responsibility");
const SourceCodeFactory = require("./source-code-factory");
const {
  chain,
  find,
  first,
  get
} = require("lodash");

/**
 * Represents as prototypal summary object used for reporting.
 *
 * @property {string} description - The purpose or intent of the `class`.
 * @property {string} name - The name of the `class`.
 * @property {SourceCode} code - The ESLint
 * {@link http://bit.ly/2kfR79f `SourceCode`} object.
 * @property {CrcClass} superClass - The `prototype` of the object being
 * modeled. Defaults to `null`.
 */

class CrcClass {
  /**
   * Create a `class` representation for use in a CrcClass
   * (Class-Responsibility-Collaboration model).
   *
   * @param {Object} [params] - A parameter object that sets all of
   * the CrcClass's properties.
   * @param {SourceCode} [params.code] - The ESLint
   * {@link http://bit.ly/2kfR79f `SourceCode`} object.
   * @param {string} [params.description] - A summary of the
   * object's purpose.
   * @param {string} [params.filePath] - The physcical path the source code
   *  file.
   * @param {object} [params.meta] - Information about the bo
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
  // eslint-disable-next-line node/no-unsupported-features
  constructor (params = defaultConstructorParams) {
    this.code = params.code;
    this.meta = params.meta;
    this.name = params.name;
    this.superClass = params.superClass;
    CrcResponsibility.assign(this);
  }

  /**
   * Create a `CrcClass` from ESTree `Nodes` and ESLint Rule `Contexts`.
   *
   * @param {CrcContext} context - A summary object with information to derive
   * a CrcModel.
   * @example
   * const crcClass = CrcClass.factory(context);
   * @returns {CrcClass} A summary representation of a prototypable object.
   */

  static factory (context) {
    const params = crcClassParamsFactory.create(context);

    return new CrcClass(params);
  }
}

// eslint-disable-next-line max-len
const findNode = (name, astNodes) => astNodes.filter((node) => find(node.declarations, {
  "id": {
    name
  }
}));

/**
 * Create CrcClass.prototype.constructor parameters.
 *
 * @ignore
 * @private
 * @param {CrcContext} context - A CrcContext object.
 *
 * @returns {object} Constructor parameters for a new CrcContext.
 */

const crcClassParamsFactory = {
  "create" (context) {
    return crcClassParamsFactory.fromCrcContext(context);
  },

  "fromCrcContext" (context) {
    const code = get(context, "code");
    const nodes = get(context, "nodes");
    const firstNode = nodes.values().next().value;
    const name = get(firstNode, "name");
    const srcNode = findNode(name, code.ast.body);

    return {
      code,
      "meta": {
        context,
        "filePath": get(context, "filePath"),
        "kind": get(first(srcNode), "kind") || "class",
        "references": getReferences(name, code)
      },
      name
    };
  }
};

/**
 * Default NullObject constructor parameters.
 *
 * @ignore
 * @private
 */

const defaultConstructorParams = {
  "code": SourceCodeFactory.create(),
  "meta": {
    "context": null,
    "description": null,
    "filePath": null,
    "kind": "class",
    "references": []
  },
  "name": null,
  "superClass": null
};

const getReferences = (name, sourceCode) => {
  const tokens = get(sourceCode, "ast.tokens");
  return chain(tokens).filter((token) => name === token.value)
    .sortBy(["start"])
    .value();
};

module.exports = CrcClass;
