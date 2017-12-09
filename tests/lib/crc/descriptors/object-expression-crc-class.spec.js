const { expect } = require("chai");
const ObjectExpressionCrcClass = require("../../../../lib/crc/descriptors/object-expression-crc-class");
const Polygon = require("../../../fixtures/crc/function-declarations/polygon.js");
const Square = require("../../../fixtures/crc/function-declarations/assignment-expression-object-create/square.js");
const context = require("../../../fixtures/crc/function-declarations/assignment-expression-object-create/context.json");

describe("ObjectExpressionCrcClass", () => {
  describe("overrides the static CrcClass.factory function and", () => {
    it("creates a CrcClass from a ObjectExpression ASTNode type", () => {
      const crcClass = ObjectExpressionCrcClass.factory(context);

      expect(crcClass.name).to.equal("Square");
      expect(crcClass.superClass.name).to.equal("Polygon");
      expect(crcClass.code).to.equal(context.code);
    });
  });
});
