const NullCrcClass = require("./null-crc-class");

// Const crcLogger = require("../crc-logger");

// Const prototypableFinder = require("./prototypable");

const {
  chain,
  find,
  first,
  get
} = require("lodash");

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

const getReferences = (name, sourceCode) => {
  const tokens = get(sourceCode, "ast.tokens");
  return chain(tokens)
    .filter((token) => name === token.value)
    .sortBy(["start"])
    .value();
};

class CrcClass extends NullCrcClass {
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

    // CrcLogger.info(JSON.stringify(prototypableFinder, null, 2));

    return new CrcClass(params);
  }
}

module.exports = CrcClass;
