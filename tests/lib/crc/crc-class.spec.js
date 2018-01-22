const { expect } = require("chai");
const CrcClass = require("../../../lib/crc/crc-class");

describe("crc-class", () => {

  let crcClass = null;

  afterEach(() => { crcClass = null; })

  describe("constructor:can create a CrcClass", () => {

    beforeEach(() => {
      crcClass = new CrcClass({
        name: "Square",
        description: "A polygon with equilateral sides.",
        superClass: {
          name: "Polygon"
        },
        code: {}
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
      crcClass = new CrcClass();
      expect(crcClass.code).to.be.null;
      expect(crcClass.meta.description).to.be.null;
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
      crcClass = CrcClass.factory(contextMock);

      expect(crcClass.name).to.be.null;
      expect(crcClass.superClass).to.be.null;
      expect(crcClass.meta.description).to.be.null;
      expect(crcClass.code).to.be.ok;
    });

    specify("NullObject", () => {
      crcClass = CrcClass.factory();

      expect(crcClass.name).to.be.null;
      expect(crcClass.superClass).to.be.null;
      expect(crcClass.meta.description).to.be.null;
      expect(crcClass.code).to.be.null;
    });
  });
});
