const CrcClass = require("../../../lib/crc/crc-class");
const CrcMeta = require("../../../lib/crc/crc-meta");
const CrcModel = require("../../../lib/crc/crc-model");
const CrcResponsibility = require("../../../lib/crc/crc-responsibility");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const {isEqual, noop} = require("lodash");

chai.use(sinonChai);

/*
 * ------------------------------------------------------------------------------
 * Tests
 * ------------------------------------------------------------------------------
 */

describe("eslint-plugin-crc/crc/crc-model", () => {
  let crcClass = null;
  let crcMath = null;
  let crcModel = null;
  const responsibilities = [
    "A",
    "B",
    "C"
  ];

  const nullCrcModelObject = {
    "class": new CrcClass(),
    "collaborators": [],
    "meta": CrcMeta.nullObject,
    "responsibilities": []
  };

  describe("represents a Represents a Class-Responsibility-Collaboration model, which expresses a class's", () => {
    beforeEach(() => {
      sinon.stub(CrcResponsibility, "create").returns({
        "all": responsibilities
      });

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

      crcMath = new CrcClass({
        "code": {
        },
        "name": "Math",
        "superClass": null
      });

      crcModel = new CrcModel({
        "class": crcClass,
        responsibilities,
        "collaborators": [crcMath]
      });
    });

    afterEach(() => {
      CrcResponsibility.create.restore();
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

    it("creates a NullObject", () => {
      CrcResponsibility.create.reset();

      const nullObjectProperties = Object.keys(nullCrcModelObject);
      const nullCrcModel = CrcModel.nullObject;
      const nullCrcModelProps = Object.keys(nullCrcModel);

      expect(isEqual(nullCrcModelProps, nullObjectProperties)).to.equal(true);
    });
  });
});
