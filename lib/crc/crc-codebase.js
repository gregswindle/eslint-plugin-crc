const CrcContext = require("./crc-context");
const {sortedUniq} = require("lodash");

const defaultConstructorParams = {
  "code": new Map(),
  "contexts": [],
  "filePaths": [],
  "nodes": new Map()
};

/**
 * Tracks contextual data for a collection of source code files.
 *
 * @param {array.<Result>} results - All results from ESLint.
 * @class CrcCodebase
 *
 * @prop {Map.<SourceCode>} code - A Map of all SourceCode instances.
 * @prop {array.<CrcContext>} [contexts=[]] - An array of all CrcContexts.
 * @prop {array.<string>} [filePaths=[]] - An array of all source code file
 *  paths.
 * @prop {Map.<ASTNode>} nodes - A Map of all ASTNodes.
 */

class CrcCodebase {
  constructor (results) {
    Object.assign(this, defaultConstructorParams);
    this.load(results);
  }

  /**
   * Loads/initializes a `CrcCodebase` from ESLint result objects.
   *
   * @method load
   * @memberOf CrcCodebase
   * @instance
   *
   * @param {array.<Result>} results - All results from ESLint.
   *
   * @returns {void}
   */

  load (results) {
    results.forEach((result) => {
      const context = CrcContext.parse(result);
      this.contexts.push(context);
      this.filePaths.push(result.filePath);
      context.nodes.forEach((node, namespace) => {
        if (!this.nodes.has(namespace)) {
          this.nodes.set(namespace, node);
        }
      });
    });
    this.filePaths = sortedUniq(this.filePaths);
  }
}

module.exports = CrcCodebase;
