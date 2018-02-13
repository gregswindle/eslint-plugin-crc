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
const MdnReference = require("../../../../lib/formatters/md/mdn-reference");

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

describe("MdnReference provides link to help on the Mozilla Developer Network site, including", () => {
  const mdn = new MdnReference();

  it("references to hundreds of bulit-in Symbols", () => {
    expect(mdn.references).to.be.ok;
    expect(mdn.references.length).to.be.ok;
  });

  it("creates a simplified HTMLlLinkElement string", () => {
    const link = mdn.link("AsyncFunction");
    expect(link).to.contain("AsyncFunction");
  });

  it("returns the text whenver no MDN help resources can be found", () => {
    expect(mdn.link("la-la-lan")).to.equal("la-la-lan");
  });
});
