const {expect} = require("chai");
const CrcContext = require("../../../lib/crc/crc-context");
const PrototypeInspector = require("../../../lib/crc/prototype-inspector");
const squareNewExpressionFilePath = "tests/fixtures/crc/function-declarations/new-expression/square.js";
const squareObjectExpressionFilePath = "tests/fixtures/crc/function-declarations/assignment-expression-object-create/square.js";
const squareConstructorFilePath = "tests/fixtures/crc/function-declarations/assignment-expression-constructor/square.js";
const nullObjectFilePath = "tests/fixtures/crc/function-declarations/polygon.js";

describe("crc/prototype-inspector", () => {
  describe("does not have an invokable constructor; therefore it", () => {
    it("throws a TypeError when you attempt to create an instance", () => {
      const typeErrorConstrutor = () => new PrototypeInspector();
      expect(typeErrorConstrutor).to.throw(TypeError);
    })
  });

  describe("detects NewExpression prototypal inheritance,", () => {
    it("returns the superClass", () => {
      const context = CrcContext.parse({
        "filePath": squareNewExpressionFilePath
      });

      const prototypeInfo = PrototypeInspector.getPrototypeOf(context);

      expect(prototypeInfo.name).to.equal("Square");
      expect(prototypeInfo.superClass.name).to.equal("Polygon");
      expect(prototypeInfo.meta.kind).to.equal("function");
    });
  });

  describe("detects ObjectExpression prototypal inheritance,", () => {
    it("returns the superClass", () => {
      const context = CrcContext.parse({
        "filePath": squareObjectExpressionFilePath
      });

      const prototypeInfo = PrototypeInspector.getPrototypeOf(context);

      expect(prototypeInfo.name).to.equal("Square");
      expect(prototypeInfo.superClass.name).to.equal("Polygon");
      expect(prototypeInfo.meta.kind).to.equal("Object");
    });
  });

  describe("detects constructor prototypal inheritance,", () => {
    it("returns the superClass", () => {
      const context = CrcContext.parse({
        "filePath": squareConstructorFilePath
      });

      const prototypeInfo = PrototypeInspector.getPrototypeOf(context);

      expect(prototypeInfo.name).to.equal("Square");
      expect(prototypeInfo.superClass.name).to.equal("Polygon");
      expect(prototypeInfo.meta.kind).to.equal("function");
    });
  });

  describe("when it cannot detect prototypal inheritance,", () => {
    it("returns a NullObject", () => {
      const context = CrcContext.parse({
        "filePath": nullObjectFilePath
      });

      const prototypeInfo = PrototypeInspector.getPrototypeOf(context);

      expect(prototypeInfo.name).to.equal("Polygon");
      expect(prototypeInfo.superClass).to.be.undefined;
      expect(prototypeInfo.meta.kind).to.equal("Object");
    });
  });
});
