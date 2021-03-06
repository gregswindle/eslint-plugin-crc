const { expect } = require("chai");
const PrototypeConstructorCrcClass = require("../../../../lib/crc/descriptors/prototype-constructor-crc-class");
const Polygon = require("../../../fixtures/crc/function-declarations/polygon.js");
const Square = require("../../../fixtures/crc/function-declarations/assignment-expression-constructor/square.js");
const context = require("../../../fixtures/crc/function-declarations/assignment-expression-constructor/context.json");

describe("PrototypeConstructorCrcClass", () => {
  describe("overrides the static CrcClass.factory function and", () => {
    it("creates a CrcClass from context", () => {
      const crcClass = PrototypeConstructorCrcClass.factory(context);

      expect(crcClass.name).to.equal("Square");
      expect(crcClass.superClass.name).to.equal("Polygon");
      expect(crcClass.code).to.equal(context.code);
    });
  });
});
