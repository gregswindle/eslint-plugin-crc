const { expect } = require("chai");
const NewExpressionCrcClass = require("../../../../lib/crc/descriptors/new-expression-crc-class");
const Polygon = require("../../../fixtures/crc/function-declarations/polygon.js");
const Square = require("../../../fixtures/crc/function-declarations/new-expression/square.js");


// tests/../../../new-expression-crc-class.spec.js

// tests/fixtures/crc/new-expression/polygon.js
describe("NewExpressionCrcClass", () => {
  describe("overrides the static CrcClass.factory function and", () => {
    it("creates a CrcClass from a NewExpression ASTNode type");
    // it("creates a CrcClass from a NewExpression ASTNode type", () => {
    //   const polygon = NewExpressionCrcClass.factory()
    // });
  });
});
