/**
 * @fileoverview Tests for Markdown reporter.
 * @author Greg Swindle
 */

/*
 * ----------------------------------------------------------------------------
 * Requirements
 * ----------------------------------------------------------------------------
 */

const {expect} = require("chai");
const markdownConverter =
  require("../../../../lib/formatters/md/markdown-converter");

/*
 * ----------------------------------------------------------------------------
 * Helpers
 * ----------------------------------------------------------------------------
 */

/*
 * ----------------------------------------------------------------------------
 * Tests
 * ----------------------------------------------------------------------------
 */

describe("eslint-plugin-crc/formatters/md provides markdown utilities like", () => {
  const crcModelMock = {
    "class": {
      "meta": {
        "kind": "class"
      },
      "name": "CrcMock"
    }
  };

  const link = `<a rel="noopener"\n            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"\n            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a>`;

  describe("markdownConverter, which, when given a CrcModel instance,", () => {
    it("anchor elements (aka, jump tags)", () => {
      expect(markdownConverter.toAnchor(crcModelMock)).to.equal("class-crcmock");
    });

    it("links to MDN help with simplified HTMLLinkElement strings", () => {
      expect(markdownConverter.toDataTypeLink(crcModelMock)).to.equal(link);
    });

    it("links Table Of Content links to anchored CrcModels", () => {
      expect(markdownConverter.link(crcModelMock)).to.equal("class CrcMock");
    });
  });
});
