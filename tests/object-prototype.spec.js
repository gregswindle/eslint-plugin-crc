'use strict';

const relativePath = require('relative-path');
const libCrc = require('require-dir')('../lib', {camelcase: true});
const expect = require('chai').expect;
const fs = require('fs');
const _ = require('lodash');
const CrcModelList = libCrc.crcModelList;
const CrcModelVisitor = libCrc.crcModelVisitor;
const codeFixturePath = './fixtures/es5-object-prototypes.js';


describe('CrcModelList can identify an object\'s prototype', function() {
    'use strict';

    let path, code, crcModelList;

    beforeEach(function () {
        path = relativePath(codeFixturePath);
        code = fs.readFileSync(path);
        crcModelList = new CrcModelList(code);
    });

    afterEach(function () {
        crcModelList = null;
        crcModelList = (void 0);
    });

    it('by VariableDeclaration', () => {
        const crc = crcModelList.find({name: 'Employee'});
        const proto = CrcModelVisitor.getPrototypeOf(crc);
        expect(crc).to.exist;
        expect(proto.name).to.equal('Person');
    });
});
