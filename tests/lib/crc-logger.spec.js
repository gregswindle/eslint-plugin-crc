const chai = require("chai");
const crcLogger = require("../../lib/crc-logger");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const {noop} = require("lodash");

chai.use(sinonChai);

describe("eslint-plugin-crc/crc-logger", () => {
  describe("logs FATAL and ERROR events", () => {
    beforeEach(() => {
      sinon.stub(console, "error").callsFake(noop);
    });

    afterEach(() => {
      console.error.restore();
    });

    specify("to the console", () => {
      const err = new Error("Test ERR");
      crcLogger.error({
        err
      });
      chai.expect(console.error).to.be.called;
    });
  });

  describe("logs WARN, INFO, DEBUG, and TRACE events", () => {
    beforeEach(() => {
      sinon.stub(console, "log").callsFake(noop);
    });

    afterEach(() => {
      console.log.restore();
    });

    specify("to the terminal", (done) => {
      crcLogger.info("Foobar");
      chai.expect(console.log).to.be.called;
      done();
    });
  });
});
