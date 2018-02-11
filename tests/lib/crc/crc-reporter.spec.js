const { expect } = require("chai");
const CrcReporter = require("../../../lib/crc/crc-reporter");
const eslintResults = require("../../fixtures/formatters/eslint-results");

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe("eslint-plugin-crc/crc/crc-reporter", () => {

  let crcReporter = null;
  let report = null;

  before(() => {
    crcReporter = new CrcReporter();
    report = crcReporter.report(eslintResults);
  });

  after(() => {
    crcReporter = null;
  });

  describe("generate CRC Model reports by", () => {
    specify("providing its array.<CrcModel> to crc-model formatter");

    specify("creating a markdown string");

    specify("saving the markdown to a file");
  });

});
