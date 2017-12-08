const astConfig = require("./ast-config");
const espree = require("espree");
const fs = require("fs");
const path = require("path");
const { SourceCode } = require("eslint");

/**
 * Provides contextual information about source code.
 *
 */
class CrcContext {
  /**
   * Factory method for generating a CrcContext object.
   *
   * @static
   * @param {Result} result - An ESLint Rule Result.
   * @param  {object} descriptorFactory - An object that identifies ASTNodes
   * with ESQuery selectors.
   * @returns {CrcContext} A CrcContext object.
   */
  static create (result, descriptorFactory) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const src = fs.readFileSync(path.resolve(result.filePath)).toString();
    const ast = espree.parse(src, astConfig);
    return {
      code: new SourceCode(src, ast),
      filePath: result.filePath,
      descriptor: descriptorFactory.descriptor
    };
  }
}

module.exports = CrcContext;
