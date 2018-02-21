/**
 * @fileoverview Tests for Markdown reporter.
 * @author Greg Swindle
 */

/*
 * ------------------------------------------------------------------------------
 * Requirements
 * ------------------------------------------------------------------------------
 */

// eslint-disable-next-line node/no-unsupported-features, node/no-unpublished-require
const {expect} = require("chai");
const md = require("../../../../lib/formatters/md");
const squareCrcModel = require("../../../fixtures/crc/class-declaration/square");
const results = require("../../../fixtures/formatters/eslint-results");

/*
 * ------------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------------
 */

/*
 * ------------------------------------------------------------------------------
 * Tests
 * ------------------------------------------------------------------------------
 */

describe("eslint-plugin-crc/formatters/md#format,", () => {
  describe("when passed an array of CrcModels,", () => {
    const code = results;

    it("generates an HTML table representing a CRC card", () => {
      const result = md(results);
      expect(result).to.contain("# CRC Model Report");
      expect(result).to.contain("## Table of contents");
      expect(result).to.contain("## CRC Models");
    });
  });
});
