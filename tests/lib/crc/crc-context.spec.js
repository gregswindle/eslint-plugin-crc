const CrcContext = require("../../../lib/crc/crc-context");
const SourceCodeFactory = require("../../../lib/crc/source-code-factory");
const {expect} = require("chai");
const {isEqual} = require("lodash");

const nullCrcContextObject = {
  "code": SourceCodeFactory.nullObject,
  "filePath": null,
  "nodes": new Map()
};

describe("CrcContext", () => {
  const nullObjectProps = Object.keys(nullCrcContextObject);

  describe("when given no parameters,", () => {
    it("creates a NullCrcContext", () => {
      const context = new CrcContext();
      let contextProps = Object.keys(context);

      expect(isEqual(contextProps, nullObjectProps)).to.equal(true);

      const nullObject = CrcContext.nullObject;
      contextProps = Object.keys(nullObject);
      expect(isEqual(contextProps, nullObjectProps)).to.equal(true);
    });
  });
});
