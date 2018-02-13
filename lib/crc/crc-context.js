const NodeManager = require("./node-manager");
const SourceCodeFactory = require("./source-code-factory");

const defaultConstructorParams = {
  "code": SourceCodeFactory.create(),
  "filePath": null,
  "nodes": new Map()
};

/**
 * Provides contextual information about source code.
 *
 */

class CrcContext {
  constructor (params = defaultConstructorParams) {
    this.code = params.code;
    this.filePath = NodeManager.getNamespace(params.filePath);
    this.nodes = params.nodes;
  }

  /**
   * @static
   * @description A CrcContext NullObject.
   *
   * 🔒 **Note:** `NullCrcContext` instances can **only** be created
   *  using the static getter `CrcContext.nullObject`.
   * @type NullCrcContext
   * @returns {NullCrcContext} A CrcContext NullObject.
   */

  static get nullObject () {
    /**
     * A CrcContext NullObject.
     *
     * 🔒 **Note:** `NullCrcContext` instances can **only** be created using the
     *  static getter `CrcContext.nullObject`.
     *
     * @extends CrcContext
     * @protected
     * @inner
     * @example
     * const nullCrcContext = CrcContext.nullObject;
     */

    class NullCrcContext extends CrcContext {}

    return new NullCrcContext();
  }

  /**
   * Factory method for generating a CrcContext object.
   *
   * @static
   * @param {Result} result - An ESLint Rule Result.
   * with ESQuery selectors.
   * @example
   * const context = CrcContext.parse(result);
   * @returns {CrcContext} A CrcContext object.
   */

  static parse (result) {
    const code = SourceCodeFactory.parse(result);
    const {filePath} = result;
    const nodes = NodeManager.getAllNodes(
      NodeManager.getNamespace(filePath),
      code
    );

    return new CrcContext({
      code,
      filePath,
      nodes
    });
  }
}

/**
 * @alias module:eslint-plugin-crc/crc/CrcContext
 */

module.exports = CrcContext;
