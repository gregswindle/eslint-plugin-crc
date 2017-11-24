/**
 * @fileoverview Tests for Markdown reporter.
 * @author Greg Swindle
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

// eslint-disable-next-line node/no-unsupported-features, node/no-unpublished-require
const { expect } = require("chai");
const formatter = require("../../../../lib/formatters/markdown");
const squareCrcModel = require("../../../fixtures/formatters/square-crc-model");

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

describe("formatter:markdown,", () => {
  describe("when passed an array of CrcModels,", () => {
    const code = [{
      filePath: "foo.js",
      errorCount: 0,
      warningCount: 0,
      messages: [{
        message: JSON.stringify(squareCrcModel),
        severity: 2,
        ruleId: "foo",
        source: "foo"
      }]
    }];

    it("generates an HTML table representing a CRC card", () => {
      const result = formatter(code);
      expect(result).to.contain("# CRC Model results");
      expect(result).to.contain("0 problems.");
      // eslint-disable-next-line max-len
      expect(result).to.contain("Square extends <a rel=\"noopener\" href=\"https://is.gd/ZZBLcn\" target=\"mdn\">Object</a>");
    });
  });

  describe("when generating a report summary,", () => {
    const code = [{
      filePath: "foo.js",
      errorCount: 2,
      warningCount: 1,
      messages: [{
        message: JSON.stringify(squareCrcModel),
        severity: 1,
        line: 5,
        column: 10,
        ruleId: "foo",
        source: "foo"
      }]
    }];

    it("renders problem, error, warning counts", () => {
      const result = formatter(code);
      expect(result).to.contain("3 problems (2 errors, 1 warning).");
    });
  });
});
