const astConfig = require("./ast-config");
const espree = require("espree");
const fs = require("fs");
const path = require("path");
// eslint-disable-next-line node/no-unsupported-features
const { SourceCode } = require("eslint");

/**
 * Provides contextual information about source code.
 *
 */
class CrcContext {
  constructor (code, filePath, descriptor) {
    this.code = code;
    this.filePath = filePath;
    this.descriptor = descriptor;
  }
  /**
   * Factory method for generating a CrcContext object.
   *
   * @static
   * @param {Result} result - An ESLint Rule Result.
   * @param {Object} descriptorFactory - An object that identifies ASTNodes
   * with ESQuery selectors.
   * @example
   * const context = CrcContext.create(result, descriptorFactory);
   * @returns {CrcContext} A CrcContext object.
   */
  static create (result, descriptorFactory) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const src = fs.readFileSync(path.resolve(result.filePath)).toString();
    const ast = espree.parse(src, astConfig);

    return new CrcContext(
      new SourceCode(src, ast),
      result.filePath,
      descriptorFactory.descriptor
    );
  }
}

module.exports = CrcContext;
