const { expect } = require("chai");
const CrcClass = require("../../lib/crc/crc-class");

describe("crc-class", () => {

  let crcClass = null;

  afterEach(() => { crcClass = null; })

  describe("in the context of a CrcModel, provides a class's", () => {

    beforeEach(() => {
      crcClass = new CrcClass({
        node: {},
        name: "Square",
        description: "A polygon with equilateral sides.",
        superClass: {
          name: "Polygon"
        }
      });
    });

    specify("name", () => {
      expect(crcClass.name).to.be.ok;
    });

    specify("superClass's name", () => {
      expect(crcClass.superClass.name).to.be.ok;
    });

    specify("description", () => {
      expect(crcClass.description).to.be.ok;
    });

    specify("declaring AST Node", () => {
      expect(crcClass.node).to.be.ok;
    });
  });

  describe("factory: when given an ASTNode and Context,", () => {
    const astNodeMock = {
      id: {
        name: "Rectangle"
      },
      superClass: {
        name: "Polygon"
      }
    };

    const contextMock = {
      getSourceCode: () => `class Rectangle extends Polygon {}`
    };

    it("creates a CrcModel", () => {
      const crcClass = CrcClass.factory(astNodeMock, contextMock);

      expect(crcClass.name).to.be.ok;
      expect(crcClass.superClass.name).to.be.ok;
      expect(crcClass.description).to.be.null;
      expect(crcClass.node).to.be.ok;
    });
  });
});
