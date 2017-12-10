const crc = require("../../lib");
const { expect } = require("chai");

describe("eslint-plugin-crc", () => {

  it("is a module for analyzing prototype-based JavaScript", () => {
    expect(crc).to.be.ok;
  });

  describe("provides services that", () => {
    it("translate ASTNodes into CRC summaries", () => {
      expect(crc.services).to.be.ok;
      expect(crc.services['ast-config']).to.be.an('object');
      expect(crc.services['crc-class']).to.be.a('function');
      expect(crc.services['crc-context']).to.be.a('function');
      expect(crc.services['crc-model']).to.be.a('function');
      expect(crc.services['crc-reporter']).to.be.a('function');
      expect(crc.services['crc-responsibility']).to.be.a('function');
      expect(crc.services.descriptors).to.be.ok;
      expect(crc.services.descriptors.astNodeFactories).to.be.ok;
      expect(crc.services.descriptors.astNodeFactoryMap).to.be.ok;
    });
  });


  it("has a formatter for generating CRC reports", () => {
    expect(crc.formatters.crc).to.be.ok;
    expect(crc.formatters.crc).to.be.an('object');
  });
});
