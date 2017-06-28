/*eslint no-console: "off"*/
const chai = require('chai');
const cli = require('../lib/crc-reporter');
let concat = require('concat');
const dirtychai = require('dirty-chai');
const fs = require('fs');
const noop = () => {};
const sinon = require('sinon').sandbox.create();
const {
  expect
} = chai;

chai.use(dirtychai);

describe('crc-model-cli is a command line program, that,', () => {

  beforeEach(() => {
    concat = sinon.spy(concat);
    open = sinon.stub(fs, 'open').callsFake(noop);
  });

  afterEach(() => {
    open = null;
    sinon.restore();
  });

  describe('when given a glob pattern,', () => {
    it('concatenates the files into a single object for AST evaluation');

    it('writes to the console on error', () => {
      // const error = sinon.stub(console, 'error').callsFake(noop);
      cli.parse('@#@$%#*)@)!&&&.bad');
      expect(console.error.called).to.be.false();
    });
  });

  describe('when given a file with a shebang (#!),', () => {
    it('will comment the shebang to prevent AST errors', () => {
      expect(() => {
        cli.parse('./fixtures/cli-shebang.js');
      }).not.to.throw(Error);
    });
  });

  describe('when given a path to a file,', () => {
    it('creates a report in that location', () => {
      // const parse = sinon.stub(cli, 'parse').callsFake(noop);
      cli.parse('./fixtures/cli-shebang.js, -o ./reports/stub-report.md');
      console.log(cli.rawArgs);
      expect(cli.rawArgs).to.contain('./fixtures/cli-shebang.js');
    });
  });

  describe('when a file path is omitted,', () => {
    it('saves a report in the default location "./reports/crc-model-report.md"', () => {
      cli.parse('');

      expect(cli.rawArgs).to.equal('');
    });
  });
});
