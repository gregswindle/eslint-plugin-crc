const NullSourceCode = require("./null-source-code.js");
const astConfig = require("./ast-config");
const crcLogger = require("../crc-logger");
const espree = require("espree");
const fs = require("fs-extra");
const path = require("path");
const {SourceCode} = require("eslint");

/**
 * A helper object that generates eslint SourceCode objects.
 */

class SourceCodeFactory {
  static create (src, ast) {
    let code = NullSourceCode.create();
    try {
      code = new SourceCode(src, ast);
    } catch (err) {
      crcLogger.error(err, "Returning a NullSourceCode object.");
    }
    return code;
  }

  static getAst (src) {
    return espree.parse(src, astConfig);
  }

  static parse (result) {
    const src = SourceCodeFactory.toSourceString(result.filePath);
    const ast = SourceCodeFactory.getAst(src);
    return SourceCodeFactory.create(src, ast);
  }

  static toSourceString (filePath) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    return fs.readFileSync(path.resolve(filePath)).toString();
  }
}

module.exports = SourceCodeFactory;
