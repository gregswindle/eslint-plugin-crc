/*eslint no-console: ["error", { allow: ["info", "error", "log", "warn"] }] */

const chai = require('chai');
const cli = require('../lib/crc-reporter');
let concat = require('concat');
const CrcModelFormatter = require('../lib/crc-model-formatter');
const CrcModelVisitor = require('../lib/crc-model-visitor');
const dirtychai = require('dirty-chai');
const fs = require('fs');
let glob = require('glob');
const noop = () => {};
const path = require('path');
const sinon = require('sinon').sandbox.create();
const { expect } = chai;

chai.use(dirtychai);

describe('crc-reporter is a command line program, that,', () => {

    beforeEach(() => {
        sinon.stub(console, 'info').callsFake(noop);
        sinon.stub(CrcModelFormatter.prototype, 'format').callsFake(noop);
    });

    afterEach(() => {
        console.info.reset();
        sinon.restore();
    });

    describe('when given a glob pattern,', () => {
        it('concatenates the files into a single object for AST evaluation', (done) => {
            sinon.spy(fs, 'readFileSync');

            cli.parse('./fixtures/cli-shebang.js');

            expect(fs.readFileSync.called).to.be.true();
            expect(CrcModelVisitor.customDeclarators).to.be.equal(CrcModelVisitor.defaultDeclarators);
            done();
        });
    });

    describe('when given a glob it cannot parse,', () => {
        it('writes an error to the console', (done) => {
            sinon.spy(console, 'error');
            expect(() => {
                cli.parse('****////***.');
                expect(console.error.called).to.be.true();
            }).to.throw(Error);

            done();
            console.error.reset();
        });

        it('specifies glob errors', (done) => {
            const error = new TypeError('Bad glob');
            sinon.spy(console, 'error');
            glob = sinon.stub();
            glob.withArgs(error, null).callsArg(0);
            cli.parse('ssl://foobar');

            done();

            glob.restore();
            console.error.reset();
        });
    });

    describe('when given file paths it cannot process,', () => {
        it('writes a warning to the console', (done) => {
            sinon.spy(console, 'warn');
            expect(() => {
                cli.parse('./fixtures/cli-shebang.js, -o ./reports/stub-report.md');
                expect(console.warn.called).to.be.true();
            }).to.throw(Error);

            done();
            console.warn.reset();
        });
    });

    describe('when unable to open a file,', () => {
        it('throws an Error', (done) => {
            concat = sinon.stub();
            concat.throws('Error');
            expect(() => {
                cli.parse('./fixtures/cli-shebang.js, -o ./reports/stub-report.md');
                expect(console.warn.called).to.be.true();
            }).to.throw(Error);

            done();
        });
    });

    describe('when given a file with a shebang (#!),', () => {
        it('will comment the shebang to prevent AST errors', () => {
            expect(() => {
                cli.parse(path.resolve(__dirname, './fixtures/cli-shebang.js'));
            }).not.to.throw(Error);
        });
    });

    describe('when a file path is omitted,', () => {
        it('saves a report in the default location "./reports/crc-model-report.md"', () => {
            cli.parse('');

            expect(cli.rawArgs).to.equal('');
        });
    });

    describe('when given the option', () => {
        specify('--exclude, it will omit files from analysis', () => {
            sinon.stub(cli, 'parse').callsFake(noop);
            cli.parse('--exclude *.spec.js *.js');
            console.log(cli.rawArgs);
        });
    });
});
