const { expect } = require("chai");
const CrcClass = require("../../../lib/crc/crc-class");
const CrcModel = require("../../../lib/crc/crc-model");

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

describe("eslint-plugin-crc/crc/crc-model", () => {

  let crcClass = null;
  let crcMath = null;
  let crcModel = null;
  const responsibilities = [
    "A",
    "B",
    "C"
  ];

  describe("represents a Represents a Class-Responsibility-Collaboration model, which expresses a class's", () => {
    beforeEach(() => {
      crcClass = new CrcClass({
        code: {},
        meta: {
          description: "A polygon with equilateral sides.",
          kind: "class"
        },
        name: "Square",
        superClass: {
          name: "Polygon"
        }
      });

      crcMath = new CrcClass({
        code: {},
        name: "Math",
        superClass: null
      });

      crcModel = new CrcModel({
        class: crcClass,
        responsibilities,
        collaborators: [ crcMath ]
      });
    });

    afterEach(() => {
      crcClass = null;
      crcMath = null;
      crcModel = null;
    });

    specify("class", () => {
      expect(crcModel.class.name).to.equal("Square");
    });

    specify("responsibilities", () => {
      expect(crcModel.responsibilities.length).to.equal(3);
    });

    specify("collaborators", () => {
      expect(crcModel.collaborators.length).to.equal(1);
      expect(crcModel.collaborators[0].name).to.equal("Math");
    });
  });

  describe("when given no information", () => {
    it("creates a CrcModel NullObject", () => {
      crcModel = new CrcModel();
      expect(crcModel.class).to.be.null;
      expect(crcModel.collaborators).to.be.empty;
      expect(crcModel.responsibilities).to.be.empty;
    });
  });

  describe("when parsing ESLint result objects", () => {
    it("reads source code from result.filePath");
    it("creates a crc.Context object");

    describe("when parsing the Context object", () => {
      it("splits the context.code.text into source code blocks by ASTNode");

    })
  });

});
