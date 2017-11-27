const { expect } = require("chai");
const CrcClass = require("../../lib/crc/crc-class");

describe("crc-class", () => {

  let crcClass = null;
  const srcCode = "class Rectangle extends Polygon {}";

  afterEach(() => { crcClass = null; })

  describe("constructor:can create a CrcClass", () => {

    beforeEach(() => {
      crcClass = new CrcClass({
        node: {},
        name: "Square",
        description: "A polygon with equilateral sides.",
        superClass: {
          name: "Polygon"
        },
        src: srcCode
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
      expect(crcClass.description).to.equal("A polygon with equilateral sides.");
    });

    specify("declaring AST Node", () => {
      expect(crcClass.node).to.be.ok;
    });

    specify("source code", () => {
      expect(crcClass.src).to.equal(srcCode);
    });

    specify("`NullObject`", () => {
      crcClass = new CrcClass();
      expect(crcClass.node).to.be.null;
      expect(crcClass.description).to.be.null;
      expect(crcClass.superClass).to.be.null;
      expect(crcClass.src).to.be.null;
    });
  });

  describe("factory:can create a CrcClass", () => {

    const astNodeMock = {
      id: {
        name: "Rectangle"
      },
      superClass: {
        name: "Polygon"
      }
    };

    const contextMock = {
      getSourceCode: () => srcCode
    };

    afterEach(() => {
      crcClass = null;
    });

    specify("from an ESLint rule's ASTNode and Context", () => {
      crcClass = CrcClass.factory(astNodeMock, contextMock);

      expect(crcClass.name).to.be.ok;
      expect(crcClass.superClass.name).to.be.ok;
      expect(crcClass.description).to.be.null;
      expect(crcClass.node).to.be.ok;
      expect(crcClass.src).to.equal(srcCode);
    });

    specify("`NullObject`", () => {
      crcClass = CrcClass.factory();

      expect(crcClass.name).to.be.null;
      expect(crcClass.superClass.name).to.be.null;
      expect(crcClass.description).to.be.null;
      expect(crcClass.src).to.be.null;
    });
  });
});
