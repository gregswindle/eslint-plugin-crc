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
const TocFactory = require("../../../../lib/formatters/md/toc-factory");

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

describe("eslint-plugin-crc/formatters/md", () => {
  const crcModelMock = {
    "class": {
      "meta": {
        "kind": "class"
      },
      "name": "CrcMock"
    }
  };

  const link = `<a rel="noopener"\n            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class"\n            title="The class declaration creates a new class with a given name using prototype-based inheritance.">class</a>`;

  describe("TocFactory, when given a CrcModel instance,", () => {
    it("anchor elements (aka, jump tags)", () => {
      expect(TocFactory.toAnchor(crcModelMock)).to.equal("class-crcmock");
    });

    it("links to MDN help with simplified HTMLLinkElement strings", () => {
      expect(TocFactory.toDataTypeLink(crcModelMock)).to.equal(link);
    });

    it("links Table Of Content links to anchored CrcModels", () => {
      expect(TocFactory.link(crcModelMock)).to.equal("class CrcMock");
    });
  });
});
