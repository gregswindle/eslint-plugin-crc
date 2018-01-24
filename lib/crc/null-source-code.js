const astConfig = require("./ast-config");
const espree = require("espree");
const {SourceCode} = require("eslint");

const emptyCode = "";
const nullAst = espree.parse(emptyCode, astConfig);

/**
 * Eslint.SourceCode NullObject.
 *
 * @extends SourceCode
 */

/**
 * Returns an eslint.SourceCode NullObject.
 *
 * @returns {SourceCode} An eslint.SourceCode NullObject.
 */

class NullSourceCode extends SourceCode {
  constructor () {
    super(emptyCode, nullAst);
  }

  static create () {
    return new NullSourceCode();
  }
}

module.exports = NullSourceCode;
