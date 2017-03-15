

const relativePath = require('relative-path');
const libCrc = require('require-dir')('../lib', {camelcase: true});
const expect = require('chai').expect;
const fs = require('fs');
const _ = require('lodash');
const CrcModelList = libCrc.crcModelList;
const codeFixturePath = './fixtures/es5-object-identification.js';

describe('CrcModelLists group Identifiers by name. They', function () {
    let path, code, crcModelList;

    beforeEach(function () {
        path = relativePath(codeFixturePath);
        code = fs.readFileSync(path);
        crcModelList = new CrcModelList(code);
    });

    afterEach(function () {
        crcModelList = null;
    });

    it('identify all declared Objects', function () {
        let modelCount = crcModelList.models.length;
        expect(modelCount).to.be.at.least(6);
    });

    it('can find an Identifier by name (by object literal or function predicate)', function () {
        let alpha = crcModelList.find({name: 'Alpha'});
        expect(alpha).to.exist;
        expect(alpha.name).to.equal('Alpha');

        expect(crcModelList.find(function (node) {
            return node.name === 'Bravo';
        })).to.exist;

        expect(crcModelList.find({name: 'foobar'})).not.to.exist;
    });

    it('track an object\'s usage by line numbers and range', function () {
        let alpha = crcModelList.find({name: 'Alpha'});
        let range = alpha.references[0].range;
        expect(_.first(range)).to.be.a('number');
        expect(_.last(range)).to.be.a('number');
    });

    it('associate collaborators with classes and objects', () =>   {
        let alpha, charlie, delta, echo, foxtrot;
        alpha = crcModelList.find({name: 'Alpha'});
        charlie = crcModelList.find({name: 'Charlie'});
        delta = crcModelList.find({name: 'Delta'});
        echo = crcModelList.find({name: 'Echo'});
        foxtrot = crcModelList.find({name: 'Foxtrot'});

        //Console.log(delta.collaborators);
        expect(_.find(delta.collaborators, {name: charlie.name})).to.exist;
        expect(_.find(echo.collaborators, {name: alpha.name})).to.exist;
        expect(_.find(foxtrot.collaborators, {name: alpha.name})).to.exist;

        // Console.log(`alpha.references: ${alpha.references}`);
        // Console.log(`bravo.references: ${bravo.references}`);
        // Console.log(`charlie.references: ${charlie.references}`);
        // Console.log(`delta.references: ${delta.references}`);
        // Console.log(`echo.references: ${echo.references}`);
        // Console.log(`foxtrot.references: ${foxtrot.references}`);
        expect(alpha.references.length).to.be.at.least(3);

    });

    specify('CRC models should not share arrays by reference', function () {
        let alpha, bravo;
        alpha = crcModelList.find({name: 'Alpha'});
        bravo = crcModelList.find({name: 'Bravo'});
        alpha.responsibilities.push('Aplha responsibility');
        //Console.log(alpha.responsibilities, bravo.responsibilities);
        expect(alpha.responsibilities.length).not.to.be.equal(bravo.responsibilities.length);
    });

    it('can identify a CrcModel\'s prototype', function () {
        let path, code, crcModelList, codeFixturePath, crc, prototype;
        codeFixturePath = './fixtures/es5-object-prototypes.js';
        path = relativePath(codeFixturePath);
        code = fs.readFileSync(path);
        crcModelList = new CrcModelList(code);

        crc = crcModelList.find({
            name: 'Employee'
        });

        proto = crcModelList.getPrototypeOf(crc);

        expect(proto.name).to.equal('Person');
    });

});
