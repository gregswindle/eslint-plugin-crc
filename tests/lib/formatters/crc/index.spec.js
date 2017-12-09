/**
 * @fileoverview Tests for Markdown reporter.
 * @author Greg Swindle
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

// eslint-disable-next-line node/no-unsupported-features, node/no-unpublished-require
const { expect } = require("chai");
const formatter = require("../../../../lib/formatters/crc");
const squareCrcModel = require("../../../fixtures/formatters/square-crc-model");
const results = require("../../../fixtures/formatters/eslint-results");

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

describe("formatter:markdown,", () => {
  describe("when passed an array of CrcModels,", () => {
    const code = results;

    it("generates an HTML table representing a CRC card", () => {
      const result = formatter(code);
      expect(result).to.contain("# CRC Model results");
      // eslint-disable-next-line max-len
      expect(result).to.contain("<a rel=\"noopener\" href=\"https://is.gd/ZZBLcn\" target=\"mdn\">Object</a>");
    });
  });
});
