const { expect } = require("chai");
const CrcReporter = require("../../../lib/crc/crc-reporter");
const eslintResults = require("../../fixtures/formatters/eslint-results");

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe("crc-reporter", () => {
  let crcReporter = null;
  let report = null;

  before(() => {
    crcReporter = new CrcReporter();
    report = crcReporter.report(eslintResults);
  });

  after(() => {
    crcReporter = null;
  });

  describe("iterates through ESLint results in order to", () => {
    it("fetch the source code from each result's filePath", () => {
      expect(eslintResults).to.be.ok;
    });

    it("create an AST for each file");

    it("create an ESLint SourceCode object for each file");

    it("create an array of ASTNodes for each file");

    it("associate SourceCode text with each ASTNode");

    describe("evaluate each ASTNode for inheritable data structures and", () => {
      it("routes each ASTNode to a CrcClass factory by nodeType");

      it("creates CrcClasses by nodeType");

      it("creates a unique CrcModel per CrcClass");

      it("adds the CrcModel to an array of crcModels");
    });
  });

  describe("generate CRC Model reports by", () => {
    specify("providing its array.<CrcModel> to crc-model formatter");

    specify("creating a markdown string");

    specify("saving the markdown to a file");
  });
});
