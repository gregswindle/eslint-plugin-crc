const CrcClass = require("../../../lib/crc/crc-class");
const CrcContext = require("../../../lib/crc/crc-context");
const CrcResponsibility = require("../../../lib/crc/crc-responsibility");
const geometry = require("../../fixtures/crc/crc-responsibilities/geometry");
const {expect} = require("chai");

const SPACES = 1;
const toJson = (object) => JSON.stringify(object, null, SPACES);

describe("CrcResponsibility", () => {
  describe("tries to extract a \"responsibility\" from these JSDoc comments", () => {
    specify("* @classdesc", () => {
      const expectedDesc = "A plane figure with at least three straight sides and angles, and typically five or more.";

      const context = CrcContext.parse({
        "filePath": "tests/fixtures/crc/crc-responsibilities/polygon.js"
      });
      const crcClass = CrcClass.create(context);
      const description = CrcResponsibility.descriptionFromContext(context);

      expect(description).to.equal(expectedDesc);
      expect(crcClass.meta.description).to.equal(expectedDesc);
    });

    specify("* @desc", () => {
      const expectedDesc = "A plane figure with four straight sides and four right angles, especially one with unequal adjacent sides, in contrast to a square.";

      const context = CrcContext.parse({
        "filePath": "tests/fixtures/crc/crc-responsibilities/rectangle.js"
      });
      const crcClass = CrcClass.create(context);
      const description = CrcResponsibility.descriptionFromContext(context);

      expect(description).to.equal(expectedDesc);
      expect(crcClass.meta.description).to.equal(expectedDesc);
    });

    specify("* @description", () => {
      const expectedDesc = "In modern mathematics, a point refers usually to an element of some set called a space.";

      const context = CrcContext.parse({
        "filePath": "tests/fixtures/crc/crc-responsibilities/punkt.js"
      });
      const crcClass = CrcClass.create(context);
      const description = CrcResponsibility.descriptionFromContext(context);

      expect(description).to.contain(expectedDesc);
      expect(crcClass.meta.description).to.contain(expectedDesc);
    });

    specify("* @summary", () => {
      const expectedDesc = "The branch of mathematics concerned with shapes.";

      const context = CrcContext.parse({
        "filePath": "tests/fixtures/crc/crc-responsibilities/geometry.js"
      });

      const crcClass = CrcClass.create(context);
      const description = CrcResponsibility.descriptionFromContext(context);

      expect(description).to.equal(expectedDesc);
      expect(crcClass.meta.description).to.equal(expectedDesc);
    });

    specify("* no tag, but first comment entry", () => {
      const expectedDesc = "A plane figure with four equal straight sides and four right angles.";

      const context = CrcContext.parse({
        "filePath": "tests/fixtures/crc/crc-responsibilities/square.js"
      });
      const crcClass = CrcClass.create(context);
      const description = CrcResponsibility.descriptionFromContext(context);

      expect(description).to.equal(expectedDesc);
      expect(crcClass.meta.description).to.equal(expectedDesc);
    });
  });
});
