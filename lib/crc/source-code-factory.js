const astConfig = require("./ast-config");
const crcLogger = require("../crc-logger");
const espree = require("espree");
const fs = require("fs-extra");
const path = require("path");
const {SourceCode} = require("eslint");

/**
 * @private
 * @ignore
 */

const toSourceString =
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  (filePath) => fs.readFileSync(path.resolve(filePath)).toString();

/**
 * A helper object that generates ESLint
 * [`SourceCode`](https://goo.gl/Gp7Xjs#sourcecode) objects.
 *
 * @hideconstructor
 * @static
 */

class SourceCodeFactory {
  /**
   * @static Factory method for creating an ESLint SourceCode object.
   *
   * @param {string} src - The raw source code.
   * @param {AST} ast - An Abstract Syntax Tree.
   *
   * @returns {SourceCode} An ESLint
   *  [SourceCode](https://goo.gl/Gp7Xjs#sourcecode) object.
   */

  static create (src, ast) {
    try {
      return new SourceCode(src, ast);
    } catch (err) {
      crcLogger.error(err, "Returning a NullSourceCode object.");
    }
    return SourceCodeFactory.nullObject;
  }

  static getAst (src) {
    return espree.parse(src, astConfig);
  }

  /**
   * A [`SourceCode`](https://goo.gl/Gp7Xjs#sourcecode) NullObject.
   *
   * 🔒 **Note:** `NullSourceCode` instances can **only** be created
   *  using the static getter `SourceCode.nullObject`.
   *
   * @static
   * @type NullSourceCode
   * @returns {NullSourceCode} A
   * [`SourceCode`](https://goo.gl/Gp7Xjs#sourcecode) NullObject.
   */

  static get nullObject () {
    /**
     * An ESLint [`SourceCode`](https://goo.gl/Gp7Xjs#sourcecode) NullObject.
     *
     * 🔒 **Note:** `NullSourceCode` instances can **only** be created using the
     *  static getter `SourceCode.nullObject`.
     *
     * @extends SourceCode
     * @protected
     * @inner
     * @example
     * const nullSourceCode = SourceCode.nullObject;
     * @see [`SourceCode`](https://goo.gl/Gp7Xjs#sourcecode)
     */

    class NullSourceCode extends SourceCode {}

    const emptyCode = "";
    const nullAst = espree.parse(emptyCode, astConfig);

    return new NullSourceCode(emptyCode, nullAst);
  }

  /**
   * @static parse - Generate an ESLint
   * [`SourceCode`](https://goo.gl/Gp7Xjs#sourcecode) object from an ESLint
   * {@link  https://goo.gl/XMjsa1#the-result-object Result}
   * object's `filePath`.
   *
   * @param {Result} result - An ESLint
   * {@link  https://goo.gl/XMjsa1#the-result-object Result} object.
   *
   * @returns {SourceCode} An ESLint
   * [`SourceCode`](https://goo.gl/Gp7Xjs#sourcecode) object.
   *
   * @see ESLint formatter
   * {@link  https://goo.gl/XMjsa1#the-result-object Result}
   */

  static parse (result) {
    const src = toSourceString(result.filePath);
    const ast = SourceCodeFactory.getAst(src);
    return SourceCodeFactory.create(src, ast);
  }
}

module.exports = SourceCodeFactory;
