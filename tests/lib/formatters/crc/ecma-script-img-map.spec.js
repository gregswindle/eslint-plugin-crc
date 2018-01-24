/**
 * @fileoverview Tests for Markdown reporter.
 * @author Greg Swindle
 */

// ----------------------------------------------------------------------------
// Requirements
// ----------------------------------------------------------------------------

const { expect } = require("chai");
const {esImgMap, EsImgMap} = require("../../../../lib/formatters/crc/ecma-script-img-map");

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Tests
// ----------------------------------------------------------------------------

describe("ecmaScriptImgMap,", () => {
  describe("esImgMap", () => {
    console.log(esImgMap.get("img").es5);
    it("maps ECMAScript versions to an icon of that version");
    it("maps ASTNode types (kinds) to an ECMAScript version");
  });
  describe("EsImgMap", () => {

  });
});
