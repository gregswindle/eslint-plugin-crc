

const relativePath = require('relative-path');
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const {expect} = chai;
const fs = require('fs');
const _ = require('lodash');
const CrcModelList = require('../lib/crc-model-list');
const codeFixturePath = './fixtures/es5-object-identification.js';

chai.use(dirtyChai);

describe('CrcModelLists group Identifiers by name. They', () => {
    let code, crcModelList, path;

    before(() => {
        path = relativePath(codeFixturePath);
        code = fs.readFileSync(path);
        crcModelList = new CrcModelList(code);
    });

    after(() => {
        crcModelList = null;
    });

    it('identify all declared Objects', () => {
        const modelCount = crcModelList.models.length;
        expect(modelCount).to.be.at.least(6);
    });

    it('can find an Identifier by name (by object literal or function predicate)', () => {
        const alpha = crcModelList.find({name: 'Alpha'});
        expect(alpha).to.exist();
        expect(alpha.name).to.equal('Alpha');

        /*eslint arrow-body-style: ["error", "as-needed"]*/
        const result = crcModelList.find((node) => {
            return node.name === 'Bravo';
        });
        expect(result).to.exist();
        expect(crcModelList.find({name: 'foobar'})).not.to.exist();
    });

    it('track an object\'s usage by line numbers and range', () => {
        const alpha = crcModelList.find({name: 'Alpha'});
        const {range} = _.first(alpha.references);
        expect(_.first(range)).to.be.a('number');
        expect(_.last(range)).to.be.a('number');
    });

    it('associate collaborators with classes and objects', () =>   {
        const alpha = crcModelList.find({name: 'Alpha'});
        const charlie = crcModelList.find({name: 'Charlie'});
        const delta = crcModelList.find({name: 'Delta'});
        const echo = crcModelList.find({name: 'Echo'});
        const foxtrot = crcModelList.find({name: 'Foxtrot'});

        expect(_.find(delta.collaborators, {name: charlie.name})).to.exist();
        expect(_.find(echo.collaborators, {name: alpha.name})).to.exist();
        expect(_.find(foxtrot.collaborators, {name: alpha.name})).to.exist();
        expect(alpha.references.length).to.be.at.least(3);

    });

    specify('CRC models should not share arrays by reference', () => {
        const alpha = crcModelList.find({name: 'Alpha'});
        const bravo = crcModelList.find({name: 'Bravo'});
        alpha.responsibilities.push('Aplha responsibility');
        expect(alpha.responsibilities.length).not.to.be.equal(bravo.responsibilities.length);
    });

    describe('also identify an object\'s prototype', () => {

        let code, codeFixturePath, crcModelList, path;

        before(() => {
            codeFixturePath = './fixtures/es5-object-prototypes.js';
            path = relativePath(codeFixturePath);
            code = fs.readFileSync(path);
            crcModelList = new CrcModelList(code);
        });

        after(() => {
            crcModelList = null;
        });

        specify('with an Object.create expression statement', () => {
            const crc = crcModelList.find({
                name: 'Employee'
            });
            const proto = crcModelList.getPrototypeOf(crc);
            expect(proto.name).to.equal('Person');
            expect(crc.superClass.name).to.equal('Person');
        });

        specify('with class syntax and extends', () => {
            const crc = crcModelList.find({name: 'Mime'});
            const proto = crcModelList.getPrototypeOf(crc);
            expect(proto.name).to.equal('Person');
            expect(crc.superClass.name).to.equal('Person');
        });

        specify('with the "new" expression', () => {
            const crc = crcModelList.find({name: 'joe'});
            expect(crc).to.exist();
            const proto = crcModelList.getPrototypeOf(crc);
            expect(proto).to.exist();
            expect(proto.name).to.equal('Person');
            expect(crc.superClass.name).to.equal('Person');
        });

        it('returns undefined if a prototype is not found', () => {
            let crc = crcModelList.find({name: 'Person'});
            const proto = crcModelList.getPrototypeOf(crc);
            expect(proto).to.be.null();

            crc = null;
            expect(crcModelList.getPrototypeOf(null)).to.be.null();
        });
    });

});
