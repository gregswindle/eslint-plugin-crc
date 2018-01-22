const nullAst = require("./null-ast.json");
const nullSourceCode = require("./null-source-code.json");
const {SourceCode} = require("eslint");

class NullSourceCode {
  static create () {
    const nullCode = Object.create(SourceCode.prototype);
    nullCode.ast = Object.assign({
    }, nullSourceCode, nullAst);
    return nullCode;
  }
}

module.exports = NullSourceCode;
