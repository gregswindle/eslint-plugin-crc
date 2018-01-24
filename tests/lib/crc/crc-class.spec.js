const { expect } = require("chai");
const CrcClass = require("../../../lib/crc/crc-class");
const NullCrcClass = require("../../../lib/crc/null-crc-class");

const specifyNullCrcClass = (crcClass, context) => {
  expect(crcClass.code).to.equal(nullCrcClass.code);
  expect(crcClass.meta.description).to.be.empty;
  expect(crcClass.name).to.be.null;
  expect(crcClass.superClass).to.be.null;
};

describe("crc-class", () => {

  let crcClass = null;

  afterEach(() => {
    crcClass = null;
  });

  describe("constructor:can create a CrcClass", () => {

    beforeEach(() => {
      crcClass = new CrcClass({
        code: {},
        meta: {
          description: "A polygon with equilateral sides."
        },
        name: "Square",
        superClass: {
          name: "Polygon"
        }
      });
    });



    specify("name", () => {
      expect(crcClass.name).to.equal("Square");
    });

    specify("superClass's name", () => {
      expect(crcClass.superClass.name)
        .to.equal("Polygon");
    });

    specify("description", () => {
      expect(crcClass.meta.description).to.equal("A polygon with equilateral sides.");
    });

    specify("associated ESLint SourceCode", () => {
      expect(crcClass.code).to.be.ok;
    });

    specify("NullObject", () => {
      const nullCrcClass = new NullCrcClass();
      crcClass = new CrcClass();
      expect(crcClass.code).to.equal(nullCrcClass.code);
      expect(crcClass.meta.description).to.be.empty;
      expect(crcClass.name).to.be.null;
      expect(crcClass.superClass).to.be.null;
    });
  });

  describe("factory: can create a Null CrcClass", () => {

    const contextMock = {
      code: {}
    };

    afterEach(() => {
      crcClass = null;
    });

    specify("from an ESLint Context object", () => {
      specifyNullCrcClass(crcClass, contextMock);
    });

    specify("NullObject", () => {
      crcClass = CrcClass.factory();
      specifyNullCrcClass(crcClass);
    });
  });
});
