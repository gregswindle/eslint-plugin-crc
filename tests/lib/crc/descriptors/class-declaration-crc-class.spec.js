const { expect } = require("chai");
const ClassDeclarationCrcClass = require("../../../../lib/crc/descriptors/class-declaration-crc-class");
const Polygon = require("../../../fixtures/crc/class-declaration/polygon.js");
const Square = require("../../../fixtures/crc/class-declaration/square.js");
const context = require("../../../fixtures/crc/class-declaration/context.json");

describe("ClassDeclarationCrcClass", () => {
  describe("overrides the static CrcClass.factory function and", () => {
    it("creates a CrcClass from context", () => {
      const crcClass = ClassDeclarationCrcClass.factory(context);

      // TODO: ensure that context provides one class at a time!
      expect(crcClass.name).to.equal("Polygon");
      expect(crcClass.superClass).to.be.null;
      expect(crcClass.code).to.equal(context.code);
    });
  });
});
