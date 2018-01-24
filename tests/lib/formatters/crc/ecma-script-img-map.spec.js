/**
 * @fileoverview Tests for Markdown reporter.
 * @author Greg Swindle
 */

// ----------------------------------------------------------------------------
// Requirements
// ----------------------------------------------------------------------------

const { expect } = require("chai");
const {esImgMap, EsImgMap} = require("../../../../lib/formatters/md/es-version-img-map");
const ecmaScriptDescriptorMap = require("../../../../lib/formatters/md/data/ecma-script-descriptor-map");

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// Tests
// ----------------------------------------------------------------------------

describe("ecmaScriptImgMap evaluates ASTNode types by ECMAScript version with", () => {

  describe("esImgMap, an instance of EcmaScriptImgMap, which,", () => {

    it("is immutable, i.e., read-only; and", () => {
      expect(Object.isFrozen(esImgMap)).to.be.true;
    });

    it("can convert an ASTNode type into a summary HTMLlLinkElement string", () => {
      const linkElHmtl = esImgMap.toHtmlLinkElemString("class");
      expect(linkElHmtl).to.contain("icon-es6-es2015-40.png");
    });

    describe("when given an ASTNode descriptor,", () => {
      it("can find an image of the ECMAScript version applicate for the Symbol", () => {

        expect(esImgMap.findByDescriptor("class"))
          .to.equal("icon-es6-es2015-40.png");

        expect(esImgMap.findByDescriptor("ArrayExpression"))
          .to.equal("icon-es5-es2009-40.png");
      });
    });

    describe("when given a missing, unknown, or undefined ASTNode descriptor", () => {
      it("will return a default \"JS\" image path", () => {

        expect(esImgMap.get("default"))
          .to.equal("icon-javascript-filled-25.png");

        expect(esImgMap.findByDescriptor("FakeNews"))
          .to.equal(esImgMap.get("default"));
      });
    })

    describe("when given an ECMAScript version", () => {
      it("can find the associated ECMAScript version's image", () => {

        expect(esImgMap.findByEsVersion("5"))
          .to.equal("icon-es5-es2009-40.png");

        expect(esImgMap.findByEsVersion("es2009"))
          .to.equal("icon-es5-es2009-40.png");

        expect(esImgMap.findByEsVersion("es6"))
          .to.equal("icon-es6-es2015-40.png");

        expect(esImgMap.findByEsVersion("es2015"))
          .to.equal("icon-es6-es2015-40.png");

        expect(esImgMap.findByEsVersion(7))
          .to.equal("icon-es7-es2016-40.png");
      });
    });

    describe("when given either an ASTNode descriptor or ES version", () => {

      it("returns a default image otherwise", () => {

        expect(esImgMap.findByEsVersion(99999))
          .to.equal(esImgMap.get("default"));
      });
    });

  });

  describe("EsImgMap, a JavaScript class, which", () => {

    let img = null;

    beforeEach(() => {
      img = new EsImgMap();
    });

    afterEach(() => {
      img = null;
    });

    describe("when instantiated,", () => {
      it("loads ECMAScript versions and ASTNodes from a JSON data store", () => {
        expect(img).to.be.ok;
        expect(img.get("default")).to.be.ok;
        expect(img.get("descriptor")).to.be.ok;
        expect(img.get("version")).to.be.ok;
      });

      it("is writable", () => {
        const str = "See, told ya so!"
        img.default = str;

        expect(img.default).to.equal(str)
      })
    });
  });

});
