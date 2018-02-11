const crc = require("./../../lib");
const { expect } = require("chai");

describe("module:eslint-plugin-crc analyzes prototype-based JavaScript with", () => {

  it("logger, a buyan logger", () => {
    expect(crc.logger).to.be.ok;
  });

  describe("module:crc, which", () => {
    it("translate ASTNodes into CRC summaries", () => {
      expect(crc).to.be.ok;
    });
  });

  describe("module:crc.formatters, which", () => {
    it("has a formatter for generating CRC reports", () => {
      expect(crc.formatters).to.be.ok;
    });
  });
});
