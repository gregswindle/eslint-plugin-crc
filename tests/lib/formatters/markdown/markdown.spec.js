/**
 * @fileoverview Tests for Markdown reporter.
 * @author Greg Swindle
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const { expect } = require("chai");
const formatter = require("../../../../lib/formatters/markdown");
const markyMarkdownLite = require("marky-markdown-lite");
const squareCrcModel = require("../../../fixtures/formatters/square-crc-model");
const shapeCrcModelList = require("../../../fixtures/formatters/shape-crc-model-list");

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
