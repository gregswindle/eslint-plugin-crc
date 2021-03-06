const { expect } = require("chai");
const NewExpressionCrcClass = require("../../../../lib/crc/descriptors/new-expression-crc-class");
const Polygon = require("../../../fixtures/crc/function-declarations/polygon.js");
const Square = require("../../../fixtures/crc/function-declarations/new-expression/square.js");
const context = require("../../../fixtures/crc/function-declarations/new-expression/context.json");

describe("NewExpressionCrcClass", () => {
  describe("overrides the static CrcClass.factory function and", () => {
    it("creates a CrcClass from a NewExpression ASTNode type", () => {
      const crcClass = NewExpressionCrcClass.factory(context);

      expect(crcClass.name).to.equal("Square");
      expect(crcClass.superClass.name).to.equal("Polygon");
      expect(crcClass.code.ast).to.equal(context.code.ast);
    });
  });
});
