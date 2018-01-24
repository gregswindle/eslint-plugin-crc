const { expect } = require("chai");
const { logger } = require("./../../lib");

describe("eslint-plugin-crc", () => {

  it("is a module for analyzing prototype-based JavaScript", () => {
    expect(logger).to.be.ok;
  });

  describe("provides services that", () => {
    it("translate ASTNodes into CRC summaries", () => {
      expect(logger).to.be.ok;
    });
  });


  it("has a formatter for generating CRC reports", () => {

  });
});
