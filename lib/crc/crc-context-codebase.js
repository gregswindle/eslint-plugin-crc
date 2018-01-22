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
 */

class CrcContextCodebase {
  constructor (results) {
    Object.assign(this, defaultConstructorParams);
    this.load(results);
  }

  /**
   * Adds.
   *
   * @param {array.<Result>} results - All
   *
   * @returns {type} Description.
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

  /**
   * Factory method for generating a CrcContextCodebase object.
   *
   * @static
   * @param {array.<Result>} results - An ESLint Rule Result array.
   * @example
   * const codeBaseContext = CrcContextCodebase.create(results);
   * @returns {CrcContextCodebase} A CrcContextCodebase object.
   */

  static parse (results) {
    return new CrcContextCodebase(results);
  }
}

module.exports = CrcContextCodebase;
