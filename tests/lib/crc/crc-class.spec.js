const {expect} = require("chai");
const CrcClass = require("../../../lib/crc/crc-class");

const specifyNullCrcClass = (crcClass, nullCrcClass) => {
  expect(crcClass.code).to.equal(nullCrcClass.code);
  expect(crcClass.meta.description).to.be.empty;
  expect(crcClass.name).to.be.null;
  expect(crcClass.superClass).to.be.null;
};

describe("eslint-plugin-crc/crc/crc-class,", () => {
  let crcClass = null;
  let nullCrcClass = null;

  before(() => {
    nullCrcClass = new CrcClass();
  });

  afterEach(() => {
    crcClass = null;
  });

  after(() => {
    nullCrcClass = null;
  });

  describe("when given SourceCode, meta, name, and superClass objects,", () => {
    describe("constructs a CrcClass, a summarized a prototypal object with a", () => {
      beforeEach(() => {
        crcClass = new CrcClass({
          "code": {
          },
          "meta": {
            "description": "A polygon with equilateral sides.",
            "kind": "class"
          },
          "name": "Square",
          "superClass": {
            "name": "Polygon"
          }
        });
      });

      specify("name", () => {
        expect(crcClass.name).to.equal("Square");
      });

      specify("superClass", () => {
        expect(crcClass.superClass.name).to.equal("Polygon");
      });

      specify("description", () => {
        expect(crcClass.meta.description).to.equal("A polygon with equilateral sides.");
      });

      specify("meta information", () => {
        expect(crcClass.meta.kind).to.equal("class");
      });

      specify("code (i.e., the associated ESLint SourceCode)", () => {
        expect(crcClass.code).to.be.ok;
      });
    });
  });

  describe("when given no parameters,", () => {
    it("constructs a NullCrcClass when no parameters are passed", () => {
      crcClass = new CrcClass();
      expect(crcClass).to.deep.equal(nullCrcClass);
    });
  });

  describe("creates a CrcClass with a static factory method", () => {
    it("constructs a NullCrcClass when no parameters are passed", () => {
      crcClass = CrcClass.create();
      expect(crcClass).to.deep.equal(nullCrcClass);
    });
  });
});
