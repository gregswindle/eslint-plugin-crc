const CrcMeta = require("../../../lib/crc/crc-meta");
const {expect} = require("chai");
const {isEqual} = require("lodash");

const nullCrcMetaObject = {
  "context": null,
  "description": "",
  "filePath": null,
  "kind": "class",
  "references": [],
  "toc": {
    "anchor": null,
    "link": null
  }
};

describe("CrcMeta", () => {
  const properties = Object.keys(nullCrcMetaObject);

  it("creates a CrcMeta NullObject", () => {
    const nullCrcMeta = CrcMeta.nullObject;
    const nullCrcMetaProperties = Object.keys(nullCrcMeta);
    expect(isEqual(nullCrcMetaProperties, properties)).to.equal(true);
  });
});
