const NodeManager = require('./node-manager')
const SourceCodeFactory = require('./source-code-factory')

const defaultConstructorParams = {
  'code': SourceCodeFactory.create(),
  'filePath': null,
  'nodes': new Map()
}

/**
 * @namespace CrcContext
 * @kind class
 *
 * @classdesc
 * Provides contextual information about source code.
 *
 * @property {SourceCode} code - The ESLint.SourceCode for this CrcContext.
 * @property {string} filePath - The physical location of the source code.
 * @property {array.<ASTNode>} nodes - The ASTNodes associated with this CrcContext.
 */

class CrcContext {
  constructor (params = defaultConstructorParams) {
    this.code = params.code
    this.filePath = NodeManager.getNamespace(params.filePath)
    this.nodes = params.nodes
  }

  /**
   * @static
   * @description A CrcContext NullObject.
   *
   * 🔒 **Note:** `NullCrcContext` instances can **only** be created
   *  using the static getter `CrcContext.nullObject`.
   * @type CrcContext~NullCrcContext
   * @returns {CrcContext~NullCrcContext} A CrcContext NullObject.
   * @example
   * const nullCrcContext = CrcContext.nullObject;
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
     * @memberOf CrcContext
     * @inner
     * @example
     * const nullCrcContext = CrcContext.nullObject;
     */

    class NullCrcContext extends CrcContext {}

    return new NullCrcContext()
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
    const code = SourceCodeFactory.parse(result)
    const {filePath} = result
    const nodes = NodeManager.getAllNodes(
      NodeManager.getNamespace(filePath),
      code
    )

    return new CrcContext({
      code,
      filePath,
      nodes
    })
  }
}

module.exports = CrcContext
