const { expect } = require("chai");
const CrcClass = require("../../../lib/crc/crc-class");
const CrcModel = require("../../../lib/crc/crc-model");

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

describe("crc-model", () => {
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
        node: {},
        name: "Square",
        description: "A polygon with equilateral sides.",
        superClass: {
          name: "Polygon"
        }
      });

      crcMath = new CrcClass({
        node: {},
        name: "Math"
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
});
